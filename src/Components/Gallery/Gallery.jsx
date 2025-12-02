// EventsGallery.Attractive.jsx
import React, { useEffect, useState, useCallback, useRef } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import img1 from "../../assets/images/img1.jpeg";
import img2 from "../../assets/images/img2.jpeg";
import img3 from "../../assets/images/img3.jpeg";
import img4 from "../../assets/images/img4.jpeg";

/* ---------- Firebase (unchanged) ---------- */
const firebaseConfig = {
  apiKey: "AIzaSyBg2p1nPZQ39AU91CDzRWeYtQjBs5HHf-Y",
  authDomain: "ajazgraphic-da740.firebaseapp.com",
  projectId: "ajazgraphic-da740",
  storageBucket: "ajazgraphic-da740.appspot.com",
  messagingSenderId: "600209988666",
  appId: "1:600209988666:web:d806f6d7dfd10fa394a903",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// SuretyNest Branding Colors
const BRAND_NAVY = "#022548";
const BRAND_TEAL = "#0B6970";
const GOLD_START = "#E5C569";
const GOLD_END = "#AF8F3C";
const WHITE = "#FFFFFF";

const EXTRA_IMAGES = [img1, img2, img3, img4];

export default function EventsGalleryAttractive() {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const [filter, setFilter] = useState("All");
  const [availableTags, setAvailableTags] = useState(["All"]);
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0, title: "" });

  const observerRef = useRef(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const qs = await getDocs(collection(db, "properedgefinance"));
        const events = qs.docs.map((doc) => ({
          id: parseInt(doc.id, 10) || doc.id,
          ...doc.data(),
        }));

        events.sort((a, b) => (a.id > b.id ? 1 : -1));

        const extrasItem = {
          id: "extras",
          title: "Extras & Behind the Scenes",
          subtitle: "Captured moments outside the spotlight.",
          description: "Behind the scenes & extras.",
          images: EXTRA_IMAGES,
          date: new Date().toLocaleDateString(),
          tag: "Extras",
        };

        if (events.length > 0) {
          const last = events.pop();
          events.push(extrasItem);
          events.push(last);
        } else events.push(extrasItem);

        setEventsData(events);

        const tags = new Set(["All"]);
        events.forEach((e) => {
          if (e.tag) tags.add(String(e.tag));
          if (e.category) tags.add(String(e.category));
        });
        setAvailableTags([...tags]);
      } catch (e) {
        setErr("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const openLightbox = (images, index = 0, title = "") => {
    setLightbox({ open: true, images, index, title });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox((s) => ({ ...s, open: false }));
    document.body.style.overflow = "";
  };

  const latest = eventsData.at(-1);
  const previous = eventsData.slice(0, -1).reverse();

  const filteredPrevious =
    filter === "All"
      ? previous
      : previous.filter((ev) => ev.tag === filter || ev.category === filter);

  const excerpt = (txt, l = 120) =>
    txt ? txt.slice(0, l) + (txt.length > l ? "…" : "") : "";

  return (
    <section
      className="mt-20 max-w-7xl mx-auto px-4 py-16"
      style={{ background: "#F5F5F5" }}
    >
      {/* Top Heading */}
      <div className="flex justify-between mb-10 flex-wrap gap-5">
        <div>
          <h2 className="text-4xl font-bold" style={{ color: BRAND_NAVY }}>
            SuretyNest Gallery
          </h2>
          <p className="mt-2 text-gray-600 max-w-xl">
            Discover our financial growth journey across events, highlights &
            success stories.
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap">
          {availableTags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className="px-4 py-2 rounded-full font-medium text-sm transition-all"
              style={
                filter === t
                  ? {
                      background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                      color: WHITE,
                    }
                  : {
                      border: `1px solid ${BRAND_TEAL}`,
                      color: BRAND_TEAL,
                    }
              }
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center text-gray-600">Loading galleries...</div>
      )}

      {/* Latest Hero Card */}
      {!loading && latest && (
        <article
          className="rounded-3xl overflow-hidden shadow-xl mb-14"
          style={{ border: "1px solid #d7d7d7" }}
        >
          <div className="relative">
            <img
              src={latest.images?.[0]}
              alt=""
              className="w-full h-[460px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#022548dd] to-transparent" />

            <div className="absolute bottom-8 left-8 text-white max-w-xl">
              <span
                className="text-xs px-3 py-1 rounded-full font-semibold"
                style={{
                  background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                  color: BRAND_NAVY,
                }}
              >
                Latest
              </span>

              <h3 className="text-4xl font-bold mt-3">{latest.title}</h3>
              <p className="text-sm mt-2 text-white/90">
                {excerpt(latest.subtitle || latest.description, 160)}
              </p>

              <button
                className="mt-5 px-6 py-3 rounded-lg shadow font-semibold"
                style={{
                  background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                  color: BRAND_NAVY,
                }}
                onClick={() =>
                  openLightbox(latest.images || [], 0, latest.title)
                }
              >
                View Gallery
              </button>
            </div>
          </div>
        </article>
      )}

      {/* Previous Section */}
      <h4 className="text-xl font-bold mb-6" style={{ color: BRAND_NAVY }}>
        Previous Collections
      </h4>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPrevious.map((ev) => (
          <div
            key={ev.id}
            className="rounded-2xl overflow-hidden bg-white border shadow hover:shadow-lg transition"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={ev.images?.[0]}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className="p-4 flex flex-col">
              <h5 className="font-semibold text-lg" style={{ color: BRAND_NAVY }}>
                {ev.title}
              </h5>
              <p className="mt-2 text-gray-600 text-sm">
                {excerpt(ev.subtitle || ev.description)}
              </p>

              <button
                className="mt-4 px-4 py-2 rounded-lg font-medium shadow"
                style={{
                  background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                  color: BRAND_NAVY,
                }}
                onClick={() => openLightbox(ev.images || [], 0, ev.title)}
              >
                View Photos
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Viewer */}
      {lightbox.open && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >
          <div className="max-w-5xl w-full bg-white rounded-xl p-2">
            <img
              src={lightbox.images[lightbox.index]}
              className="w-full max-h-[80vh] object-contain"
              alt=""
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={closeLightbox}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
