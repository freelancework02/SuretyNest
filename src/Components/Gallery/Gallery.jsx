// EventsGallery.Attractive.jsx
import React, { useEffect, useState } from "react";

import img1 from "../../assets/images/img1.jpeg";
import img2 from "../../assets/images/img2.jpeg";
import img3 from "../../assets/images/img3.jpeg";
import img4 from "../../assets/images/img4.jpeg";

const API_BASE = "https://suretynest.com";

// SuretyNest Branding Colors
const BRAND_NAVY = "#022548";
const BRAND_TEAL = "#0B6970";
const GOLD_START = "#E5C569";
const GOLD_END = "#AF8F3C";
const WHITE = "#FFFFFF";

const EXTRA_IMAGES = [img1, img2, img3, img4];
const goldGradient = `linear-gradient(135deg, ${GOLD_START}, ${GOLD_END})`;

// Normalize images coming from Firestore


export default function EventsGalleryAttractive() {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const [filter, setFilter] = useState("All");
  const [availableTags, setAvailableTags] = useState(["All"]);

  // Lightbox state: show all images in a popup grid
  const [lightbox, setLightbox] = useState({
    open: false,
    images: [],
    title: "",
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/galleries`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Handle if response is wrapped in an object or just an array
        const rawEvents = Array.isArray(data) ? data : (data.galleries || []);

        const events = rawEvents
          .map((item) => {
            // Determine images array
            let imageUrls = [];
            // If the API returns 'images' as array of IDs/filenames
            if (Array.isArray(item.images) && item.images.length > 0) {
              imageUrls = item.images.map(imgStr => {
                // If it's already a full URL, keep it. Otherwise construct blob URL
                if (typeof imgStr === 'string' && (imgStr.startsWith('http') || imgStr.startsWith('data:'))) {
                  return imgStr;
                }
                return `${API_BASE}/api/galleries/image/${imgStr}/blob`;
              });
            } else if (item.image) {
              // Fallback for single image
              const imgStr = item.image;
              if (typeof imgStr === 'string' && (imgStr.startsWith('http') || imgStr.startsWith('data:'))) {
                imageUrls = [imgStr];
              } else {
                imageUrls = [`${API_BASE}/api/galleries/image/${imgStr}/blob`];
              }
            }

            return {
              id: item._id || item.id,
              ...item,
              images: imageUrls,
            };
          })
          .filter((e) => e.images && e.images.length > 0);

        // Optional: ensure numeric sort if IDs are comparable, otherwise default order
        // events.sort((a, b) => (a.id > b.id ? 1 : -1));

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
        } else {
          events.push(extrasItem);
        }

        setEventsData(events);

        const tags = new Set(["All"]);
        events.forEach((e) => {
          if (e.tag) tags.add(String(e.tag));
          if (e.category) tags.add(String(e.category));
        });
        setAvailableTags([...tags]);
      } catch (e) {
        console.error(e);
        setErr("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const openLightbox = (images, title = "") => {
    if (!images || images.length === 0) return;
    setLightbox({ open: true, images, title });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox({ open: false, images: [], title: "" });
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
      className="mt-20 mb-20  max-w-7xl mx-auto px-4 py-16 rounded-3xl"
      style={{
        background:
          "radial-gradient(circle at top, #fdf9f0 0, #f3f6fb 40%, #f5f7fa 100%)",
        boxShadow: "0 24px 60px rgba(2, 37, 72, 0.18)",
      }}
    >
      {/* Top Heading */}
      <div className="mt-10 flex justify-between mb-10 flex-wrap gap-6 items-end">
        <div>
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-xs tracking-[0.18em] font-semibold mb-3"
            style={{
              background: "#FDF5E5",
              color: BRAND_TEAL,
              border: `1px solid ${GOLD_END}33`,
            }}
          >
            SURETYNEST • EVENTS & MOMENTS
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: BRAND_NAVY }}
          >
            SuretyNest Gallery
          </h2>
          <p
            className="mt-3 text-sm md:text-base max-w-xl leading-relaxed"
            style={{ color: "#4B5563" }}
          >
            A visual story of trust, growth, and financial journeys we&apos;ve
            built with our clients and partners.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col items-end gap-3 w-full md:w-auto">

          <div className="flex gap-2 flex-wrap justify-end">
            {availableTags.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className="px-4 py-2 rounded-full font-medium text-xs md:text-sm transition-all shadow-sm"
                style={
                  filter === t
                    ? {
                      background: goldGradient,
                      color: BRAND_NAVY,
                      boxShadow: "0 10px 25px rgba(175,143,60,0.45)",
                    }
                    : {
                      background: WHITE,
                      border: `1px solid ${BRAND_TEAL}40`,
                      color: BRAND_TEAL,
                    }
                }
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Error */}
      {err && (
        <div className="mb-6 text-sm font-semibold" style={{ color: "#B91C1C" }}>
          {err}
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div
          className="text-center text-sm md:text-base"
          style={{ color: BRAND_NAVY }}
        >
          Loading galleries…
        </div>
      )}

      {/* Latest Hero Card */}
      {!loading && latest && latest.images && latest.images.length > 0 && (
        <article className="mb-14">
          <div
            className="rounded-[32px] p-[1.5px] overflow-hidden"
            style={{
              backgroundImage: goldGradient,
              boxShadow: "0 22px 48px rgba(2, 37, 72, 0.35)",
            }}
          >
            <div
              className="grid md:grid-cols-2 rounded-[30px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #022548 0%, #033863 50%, #0B6970 100%)",
              }}
            >
              {/* Image */}
              <div className="relative h-[260px] md:h-[410px] overflow-hidden">
                <img
                  src={latest.images[0]}
                  alt={latest.title || "Latest event"}
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span
                    className="text-[10px] uppercase tracking-[0.22em] font-semibold px-3 py-1 rounded-full"
                    style={{ background: WHITE, color: BRAND_NAVY }}
                  >
                    Latest Collection
                  </span>
                </div>
              </div>

              {/* Text block */}
              <div className="flex flex-col justify-between p-6 md:p-10 text-white">
                <div>
                  {latest.date && (
                    <p className="text-xs mb-2 opacity-80">
                      {latest.date} • {latest.location || "SuretyNest Event"}
                    </p>
                  )}
                  <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                    {latest.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-white/85 leading-relaxed">
                    {excerpt(latest.subtitle || latest.description, 190)}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button
                    className="px-6 py-3 rounded-xl font-semibold text-sm md:text-base"
                    style={{
                      background: goldGradient,
                      color: BRAND_NAVY,
                      boxShadow: "0 12px 30px rgba(229,197,105,0.55)",
                    }}
                    onClick={() =>
                      openLightbox(latest.images, latest.title || "Gallery")
                    }
                  >
                    View Photos ({latest.images.length})
                  </button>

                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <span
                      className="inline-block w-8 h-8 rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 20%, #ffffff 0, #f7e9bf 30%, #c29b45 70%, #7e6020 100%)",
                        boxShadow: "0 0 0 2px rgba(255,255,255,0.16)",
                      }}
                    />
                    <span className="max-w-[230px]">
                      Financial journeys captured with the care and precision
                      we bring to every client.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* Previous Section */}
      <div className="flex items-center justify-between mb-6 gap-3">
        <h4 className="text-xl md:text-2xl font-bold" style={{ color: BRAND_NAVY }}>
          Previous Collections
        </h4>
        <span className="text-xs md:text-sm" style={{ color: "#6B7280" }}>
          Showing {filteredPrevious.length}{" "}
          {filter === "All" ? "events" : `${filter} events`}
        </span>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredPrevious.map(
          (ev) =>
            ev.images &&
            ev.images.length > 0 && (
              <div
                key={ev.id}
                className="rounded-2xl overflow-hidden bg-white border transition transform hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  borderColor: "#E5E7EB",
                  boxShadow: "0 14px 30px rgba(2,37,72,0.09)",
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={ev.images[0]}
                    className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                    alt={ev.title || "Event"}
                  />
                  {ev.tag && (
                    <span
                      className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.16em]"
                      style={{
                        background: `${WHITE}E6`,
                        color: BRAND_TEAL,
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      {ev.tag}
                    </span>
                  )}
                  {ev.images.length > 1 && (
                    <span
                      className="absolute bottom-3 right-3 px-2 py-1 rounded-full text-[10px] font-semibold"
                      style={{
                        background: "#00000088",
                        color: WHITE,
                      }}
                    >
                      {ev.images.length} Photos
                    </span>
                  )}
                </div>

                <div className="p-4 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-2">
                    <h5
                      className="font-semibold text-lg leading-snug"
                      style={{ color: BRAND_NAVY }}
                    >
                      {ev.title}
                    </h5>
                    {ev.date && (
                      <span className="text-[11px]" style={{ color: "#9CA3AF" }}>
                        {ev.date}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-sm flex-1 leading-relaxed"
                    style={{ color: "#4B5563" }}
                  >
                    {excerpt(ev.subtitle || ev.description)}
                  </p>

                  <button
                    className="mt-4 px-4 py-2 rounded-xl font-medium text-sm self-start"
                    style={{
                      background: goldGradient,
                      color: BRAND_NAVY,
                      boxShadow: "0 10px 24px rgba(175,143,60,0.45)",
                    }}
                    onClick={() =>
                      openLightbox(ev.images, ev.title || "Gallery")
                    }
                  >
                    View Photos
                  </button>
                </div>
              </div>
            )
        )}
      </div>

      {/* Lightbox: shows ALL images in a responsive grid */}
      {lightbox.open && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-3 md:px-6"
        >
          <div
            className="relative max-w-6xl w-full bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4 gap-3">
              <div>
                <h3
                  className="text-base md:text-lg font-semibold"
                  style={{ color: BRAND_NAVY }}
                >
                  {lightbox.title}
                </h3>
                <p className="text-xs md:text-sm" style={{ color: "#6B7280" }}>
                  {lightbox.images.length}{" "}
                  {lightbox.images.length === 1 ? "photo" : "photos"}
                </p>
              </div>
              <button
                className="w-9 h-9 rounded-full flex items-center justify-center text-lg"
                style={{
                  background: BRAND_NAVY,
                  color: WHITE,
                }}
                onClick={closeLightbox}
              >
                ×
              </button>
            </div>

            {/* Images grid */}
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {lightbox.images.map((img, i) => (
                  <div
                    key={i}
                    className="w-full rounded-xl overflow-hidden bg-gray-100"
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Footer for small screens */}
            <div className="mt-3 flex justify-end md:justify-between items-center gap-3 text-xs md:text-sm">
              <span className="hidden md:inline" style={{ color: "#6B7280" }}>
                Tap any photo to zoom using your device viewer.
              </span>
              <button
                className="px-4 py-1.5 rounded-full font-semibold"
                style={{
                  background: goldGradient,
                  color: BRAND_NAVY,
                }}
                onClick={closeLightbox}
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
