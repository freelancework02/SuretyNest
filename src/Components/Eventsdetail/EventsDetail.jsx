// EventsDetail.Modern.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FiCalendar,
  FiUser,
  FiImage,
  FiClock,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

/**
 * EventsDetail - Modern (SuretyNest Styled)
 *
 * Props:
 *  - event: object with title, date, host, thumbnailUrl, gallery (array), meetingLink, description
 *  - previousEvents: optional array of prior events
 */

// SuretyNest brand palette
const BRAND_NAVY = "#022548";
const BRAND_TEAL = "#0B6970";
const GOLD_START = "#E5C569";
const GOLD_END = "#AF8F3C";
const SURFACE = "#FFFFFF";

const GOLD_GRADIENT = `linear-gradient(135deg, ${GOLD_START}, ${GOLD_END})`;
const NAVY_GRADIENT = `linear-gradient(135deg, ${BRAND_NAVY}, ${BRAND_TEAL})`;

/* ---------- demo data (used when no event prop provided) ---------- */
const DEMO_EVENT = {
  title: "Design Systems & DX — Practical Deep Dive",
  date: "2025-11-24T18:30:00+05:30",
  host: "vm financial solutions · Vaibhav Maddiwar",
  description: `<p>Join Vaibhav Maddiwar for a hands-on session exploring design systems that scale, accessibility patterns, and practical developer experience improvements you can adopt right away.</p>
     <ul>
       <li>Short talk: design tokens & theming</li>
       <li>Live demo: building a small component library</li>
       <li>Q&amp;A and practical next steps</li>
     </ul>
     <p>Bring your questions — this session is interactive.</p>`,
  thumbnailUrl:
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop",
  gallery: [
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1400&auto=format&fit=crop",
  ],
  meetingLink: "https://meet.google.com/example-meet-link",
};

const DEMO_PREVIOUS = [
  {
    id: "prev-101",
    title: "Frontend Roadmap: Build with Confidence",
    date: "2025-10-22T18:00:00+05:30",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop",
    recordingLink: "https://example.com/recording/frontend-roadmap",
  },
  {
    id: "prev-102",
    title: "React Accessibility Patterns",
    date: "2025-09-10T17:00:00+05:30",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    recordingLink: "https://example.com/recording/react-a11y",
  },
  {
    id: "prev-103",
    title: "Practical Performance Budgets",
    date: "2025-08-05T16:00:00+05:30",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=800&auto=format&fit=crop",
    recordingLink: "https://example.com/recording/perf-budgets",
  },
];

/* -------------------- component -------------------- */
export default function EventsDetailModern({ event = null, previousEvents = null }) {
  const model = useMemo(() => ({ ...(event || DEMO_EVENT) }), [event]);
  const prevList =
    Array.isArray(previousEvents) && previousEvents.length
      ? previousEvents
      : DEMO_PREVIOUS;

  const images = Array.isArray(model.gallery) ? model.gallery : [];
  const hasGallery = images.length > 0;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const lightboxRef = useRef(null);

  const formattedDate = useMemo(
    () => safeFormatDate(model.date),
    [model.date]
  );

  /* keyboard nav for lightbox */
  useEffect(() => {
    const handler = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, images.length]);

  function openAt(i) {
    if (!hasGallery) return;
    setLightboxIndex(Math.max(0, i % images.length));
    setLightboxOpen(true);
    setTimeout(() => lightboxRef.current?.focus?.(), 50);
    document.body.style.overflow = "hidden";
  }

  function handleClose() {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }

  function prev() {
    setLightboxIndex((p) => (p - 1 + images.length) % images.length);
  }

  function next() {
    setLightboxIndex((p) => (p + 1) % images.length);
  }

  function joinMeeting() {
    if (!model.meetingLink) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      return;
    }
    window.open(model.meetingLink, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      className="w-full pb-12 mt-32"
      style={{
        background:
          "radial-gradient(circle at top, #faf5e8 0, #f3f6fb 40%, #f5f7fa 100%)",
      }}
    >
      {/* HERO */}
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6 pt-6">
        <div className="relative h-64 md:h-96 lg:h-[520px] w-full overflow-hidden rounded-[32px] shadow-[0_22px_60px_rgba(2,37,72,0.35)] border border-[rgba(2,37,72,0.08)]">
          {model.thumbnailUrl ? (
            <img
              src={model.thumbnailUrl}
              alt={model.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-100" />
          )}
          {/* brand overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(2,37,72,0.8) 0%, rgba(11,105,112,0.7) 45%, rgba(0,0,0,0.2) 100%)",
            }}
          />

          {/* floating info card */}
          <div className="absolute left-4 right-4 md:left-8 md:right-auto bottom-4 md:bottom-8 md:w-[60%] lg:w-[52%]">
            <article
              className="rounded-2xl bg-white/95 backdrop-blur px-4 py-4 md:px-5 md:py-5 shadow-[0_18px_40px_rgba(2,37,72,0.45)] border"
              style={{ borderColor: "rgba(2,37,72,0.08)" }}
              aria-label={`Event card: ${model.title}`}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <span
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px]"
                      style={{
                        background: GOLD_GRADIENT,
                        color: BRAND_NAVY,
                      }}
                    >
                      <FiCalendar className="text-[13px]" />
                      <span>{formattedDate}</span>
                    </span>
                  </div>
                  <span
                    className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.16em]"
                    style={{ color: BRAND_TEAL }}
                  >
                    <FiClock className="text-xs" />
                    Live Session · ~90 mins
                  </span>
                </div>

                <div>
                  <h1
                    className="text-lg md:text-xl lg:text-2xl font-extrabold leading-snug"
                    style={{ color: BRAND_NAVY }}
                  >
                    {model.title}
                  </h1>
                  <div className="mt-1 flex items-center gap-2 text-xs md:text-sm">
                    <FiUser className="text-[13px]" style={{ color: BRAND_TEAL }} />
                    <span className="text-black/70">{model.host}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 flex-wrap pt-1">
                  <div className="flex items-center gap-2 text-[11px] text-black/60">
                    <span
                      className="inline-block w-8 h-8 rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 20%, #ffffff 0, #f7e9bf 30%, #c29b45 70%, #7e6020 100%)",
                        boxShadow: "0 0 0 2px rgba(2,37,72,0.08)",
                      }}
                    />
                    <span className="max-w-[200px] md:max-w-[260px]">
                      Interactive session with Q&amp;A and practical examples.
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={joinMeeting}
                      className="rounded-full px-4 py-2 text-xs md:text-sm font-semibold shadow-sm"
                      style={{
                        background: NAVY_GRADIENT,
                        color: SURFACE,
                        boxShadow: "0 10px 24px rgba(2,37,72,0.55)",
                      }}
                    >
                      {model.meetingLink ? "Join Meeting" : "Contact Organizer"}
                    </button>

                    {hasGallery && (
                      <button
                        onClick={() => openAt(0)}
                        className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs md:text-sm font-medium border"
                        style={{
                          borderColor: "rgba(2,37,72,0.16)",
                          color: BRAND_NAVY,
                          backgroundColor: SURFACE,
                        }}
                      >
                        <FiImage className="text-sm" />
                        View Gallery
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-7">
        {/* main column */}
        <div className="lg:col-span-2 space-y-6">
          {/* About */}
          <section
            className="rounded-2xl p-5 md:p-6 bg-white border shadow-sm"
            style={{ borderColor: "rgba(2,37,72,0.06)" }}
          >
            <div className="flex items-center justify-between mb-3 gap-2">
              <h2
                className="text-base md:text-lg font-semibold"
                style={{ color: BRAND_NAVY }}
              >
                About this session
              </h2>
              <span className="text-[11px] uppercase tracking-[0.18em]" style={{ color: BRAND_TEAL }}>
                OVERVIEW
              </span>
            </div>

            <div className="text-sm md:text-base text-gray-700 prose max-w-none">
              {looksLikeHtml(model.description) ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: safeHTML(model.description),
                  }}
                />
              ) : (
                <p>{model.description}</p>
              )}
            </div>
          </section>

          {/* Gallery */}
          <section
            className="rounded-2xl p-5 md:p-6 bg-white border shadow-sm"
            style={{ borderColor: "rgba(2,37,72,0.06)" }}
          >
            <div className="flex items-center justify-between mb-4 gap-3">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, #ffffff 0, #e3f1f2 40%, #0B6970 100%)",
                  }}
                >
                  <FiImage className="text-sm" style={{ color: BRAND_NAVY }} />
                </div>
                <div>
                  <h3
                    className="text-base md:text-lg font-semibold"
                    style={{ color: BRAND_NAVY }}
                  >
                    Event gallery
                  </h3>
                  <p className="text-xs md:text-sm text-black/55">
                    Highlights and moments from the session.
                  </p>
                </div>
              </div>

              <div className="text-xs md:text-sm text-black/60">
                {images.length} {images.length === 1 ? "photo" : "photos"}
              </div>
            </div>

            {hasGallery ? (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                  {images.slice(0, 6).map((src, i) => (
                    <button
                      key={i}
                      onClick={() => openAt(i)}
                      className="group relative rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition"
                      aria-label={`Open image ${i + 1}`}
                      style={{ borderColor: "rgba(2,37,72,0.06)" }}
                    >
                      <div className="aspect-[4/3]">
                        <img
                          src={src}
                          alt={`Event image ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      <div
                        className="absolute left-2 top-2 px-2 py-0.5 rounded-md text-[11px] text-white flex items-center gap-1"
                        style={{ background: GOLD_GRADIENT }}
                      >
                        <span>#{i + 1}</span>
                      </div>

                      {i === 0 && images.length > 3 && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                          <span className="m-2 text-[11px] text-white font-medium bg-black/40 px-2 py-1 rounded-full">
                            + more photos
                          </span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                {images.length > 6 && (
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => openAt(0)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-semibold"
                      style={{
                        background: GOLD_GRADIENT,
                        color: BRAND_NAVY,
                        boxShadow: "0 10px 24px rgba(175,143,60,0.45)",
                      }}
                    >
                      View full gallery
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="rounded-xl border-dashed border p-6 text-center text-gray-500 text-sm">
                No gallery has been added yet.
              </div>
            )}
          </section>
        </div>

        {/* sidebar */}
        <aside className="space-y-4 lg:space-y-5">
          {/* event details card */}
          <div
            className="rounded-2xl p-4 md:p-5 bg-white border shadow-sm lg:sticky lg:top-24"
            style={{ borderColor: "rgba(2,37,72,0.08)" }}
          >
            <h4
              className="font-semibold text-sm md:text-base mb-3"
              style={{ color: BRAND_NAVY }}
            >
              Event details
            </h4>
            <ul className="space-y-3 text-sm text-black/75">
              <li className="flex gap-3">
                <span className="mt-0.5">
                  <FiCalendar className="text-[15px]" style={{ color: BRAND_TEAL }} />
                </span>
                <div>
                  <div className="font-medium">When</div>
                  <div className="text-black/60 text-sm">{formattedDate}</div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5">
                  <FiUser className="text-[15px]" style={{ color: BRAND_TEAL }} />
                </span>
                <div>
                  <div className="font-medium">Host</div>
                  <div className="text-black/60 text-sm">{model.host}</div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5">
                  <FiClock className="text-[15px]" style={{ color: BRAND_TEAL }} />
                </span>
                <div>
                  <div className="font-medium">Duration</div>
                  <div className="text-black/60 text-sm">Approx. 60–90 mins</div>
                </div>
              </li>
            </ul>

            <div className="mt-5">
              <button
                onClick={joinMeeting}
                className="w-full rounded-xl px-4 py-2.5 font-semibold text-sm"
                style={{
                  background: NAVY_GRADIENT,
                  color: SURFACE,
                  boxShadow: "0 12px 26px rgba(2,37,72,0.45)",
                }}
              >
                {model.meetingLink ? "Join live session" : "Request more info"}
              </button>
            </div>
          </div>

          {/* previous events */}
          <div
            className="rounded-2xl p-4 md:p-5 bg-white border shadow-sm"
            style={{ borderColor: "rgba(2,37,72,0.06)" }}
          >
            <h5
              className="font-semibold text-sm md:text-base mb-3"
              style={{ color: BRAND_NAVY }}
            >
              Previous events
            </h5>
            <div className="space-y-3 text-sm text-black/75">
              {prevList.slice(0, 3).map((p, i) => (
                <div
                  key={p.id || i}
                  className="flex items-start gap-3 rounded-xl hover:bg-[#F5F7FA] p-2 -mx-2 transition"
                >
                  <div className="w-14 h-10 rounded-md bg-gray-100 overflow-hidden flex-shrink-0">
                    {p.thumbnailUrl ? (
                      <img
                        src={p.thumbnailUrl}
                        alt={p.title}
                        className="w-full h-full object-cover"
                      />
                    ) : null}
                  </div>
                  <div>
                    <div
                      className="font-medium text-xs md:text-sm leading-snug"
                      style={{ color: BRAND_NAVY }}
                    >
                      {p.title}
                    </div>
                    <div className="text-[11px] text-black/55">
                      {safeFormatDate(p.date)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && hasGallery && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/85 px-3 md:px-6"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              ref={lightboxRef}
              src={images[lightboxIndex]}
              alt={`Preview ${lightboxIndex + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.8)] bg-black"
            />

            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/95 shadow"
              aria-label="Close"
            >
              <FiX className="text-lg" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/95 shadow hidden sm:inline-flex"
              aria-label="Previous"
            >
              <FiChevronLeft className="text-lg" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/95 shadow hidden sm:inline-flex"
              aria-label="Next"
            >
              <FiChevronRight className="text-lg" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full flex items-center gap-2">
              <span>
                {lightboxIndex + 1} / {images.length}
              </span>
              <span className="hidden sm:inline-block">Use arrows or swipe</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------------- helpers ---------------- */

function safeFormatDate(d) {
  try {
    const dt = new Date(d);
    if (Number.isNaN(dt.getTime())) return String(d || "");
    return dt.toLocaleString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return String(d || "");
  }
}

function looksLikeHtml(s) {
  return typeof s === "string" && /<\/?[a-z][\s\S]*>/i.test(s);
}

function safeHTML(html) {
  // minimal sanitizer: strip script/style tags
  return String(html || "").replace(
    /<(script|style)[\s\S]*?>[\s\S]*?<\/\1>/gi,
    ""
  );
}
