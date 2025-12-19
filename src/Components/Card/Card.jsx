import React from "react";

const GOLD_LIGHT = "#f7d88b";
const GOLD_DARK = "#c9943b";
const NAVY = "#0c274a";
const TEAL = "#137a6c";
const TEXT_MAIN = "#0f3144";
const BORDER_SUBTLE = "rgba(12,39,74,0.08)";

const services = [
  {
    title: "Expertise",
    description:
      "Over ten years of experience. Clear insights, strategic roadmaps, and ongoing reviews that keep your goals on track.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img1.jpg",
  },
  {
    title: "Discretion",
    description:
      "Your privacy matters. We handle sensitive information with full confidentiality and secure data processes.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img2.jpg",
  },
  {
    title: "Dependability",
    description:
      "Consistent support, transparent updates, and a results-driven approach to your long-term well-being.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img3.jpg",
  },
  {
    title: "Consulting",
    description:
      "Cut through complexity. Focused strategy sessions that help you clarify goals and close financial gaps.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img4.jpg",
  },
  {
    title: "Sales",
    description:
      "Curated financial solutions that prioritize suitability, cost-efficiency, and long-term value.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img5.jpg",
  },
  {
    title: "Partnership",
    description:
      "If our philosophy aligns, we grow together—built on trust, shared standards, and mutual integrity.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/card-img6.jpg",
  },
];

export function ProfessionalServicesVariantB() {
  const ACCENT_START = GOLD_LIGHT;
  const ACCENT_END = GOLD_DARK;
  const SLATE = NAVY;

  const openCalendly = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/contact-suretynest/30min",
      });
    } else if (typeof window !== "undefined") {
      window.open(
        "https://calendly.com/contact-suretynest/30min",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <section
      className="py-16 px-4 md:px-6 lg:px-12"
      aria-labelledby="services-heading-2"
      style={{
        background:
          "radial-gradient(circle at top left, #ffffff 0%, #f5f6f9 38%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top band: label + title, aligned left */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-10">
          <div className="space-y-3 max-w-2xl">
            {/* Label pill */}
            <div
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white shadow border"
              style={{ borderColor: BORDER_SUBTLE }}
            >
              <span
                className="flex items-center justify-center w-7 h-7 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${ACCENT_START}, ${ACCENT_END})`,
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12l4 4L19 6"
                    stroke={NAVY}
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span
                className="tracking-[0.18em] text-[11px] uppercase"
                style={{ color: SLATE }}
              >
                What you can expect from us
              </span>
            </div>

            {/* Heading */}
            <div>
              <h2
                id="services-heading-2"
                className="text-3xl md:text-4xl font-extrabold tracking-tight"
                style={{ color: TEXT_MAIN }}
              >
                Skills & services that match{" "}
                <span
                  style={{
                    background: `linear-gradient(90deg, ${ACCENT_START}, ${ACCENT_END})`,
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  your financial reality.
                </span>
              </h2>
              <p
                className="mt-3 text-sm md:text-base"
                style={{ color: "rgba(15,49,68,0.75)" }}
              >
                From deep expertise to long-term partnership, each service is
                designed to protect, organize, and grow your financial life —
                with the same trust and stability your logo promises.
              </p>
            </div>
          </div>

          {/* Small stats block on the right */}
          <div className="mt-4 md:mt-0">
            <div
              className="rounded-2xl px-4 py-4 bg-white/90 border shadow-sm"
              style={{ borderColor: BORDER_SUBTLE }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="h-10 w-10 rounded-2xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${ACCENT_START}, ${ACCENT_END})`,
                    boxShadow: "0 10px 20px rgba(201,148,59,0.35)",
                  }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{ color: NAVY }}
                  >
                    SN
                  </span>
                </div>
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: TEXT_MAIN }}
                  >
                    1,200+ families guided
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(15,49,68,0.7)" }}
                  >
                    Expertise • Discretion • Dependability
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards grid – first card highlighted, staggered layout on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const isHeroCard = i === 0;

            return (
              <article
                key={i}
                className={`group bg-white rounded-3xl overflow-hidden border flex flex-col h-full relative ${
                  isHeroCard
                    ? "lg:col-span-2 lg:flex-row"
                    : "lg:col-span-1 lg:flex-col"
                }`}
                style={{
                  borderColor: BORDER_SUBTLE,
                  boxShadow: isHeroCard
                    ? "0 18px 45px rgba(12,39,74,0.18)"
                    : "0 10px 28px rgba(12,39,74,0.08)",
                }}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${
                    isHeroCard
                      ? "w-full lg:w-1/2 h-56 lg:h-auto"
                      : "h-52 md:h-56 lg:h-56 w-full"
                  }`}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                  <span
                    className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold text-[#072033] shadow"
                    style={{
                      background: `linear-gradient(120deg, ${ACCENT_START}, ${ACCENT_END})`,
                    }}
                  >
                    {isHeroCard ? "Signature Service" : "Featured"}
                  </span>
                  <span
                    aria-hidden
                    className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full opacity-60 pointer-events-none"
                    style={{
                      background: `radial-gradient(60% 60% at 50% 50%, ${ACCENT_START} 0%, rgba(201,148,59,0.16) 40%, transparent 60%)`,
                      filter: "blur(18px)",
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  className={`p-6 md:p-7 flex flex-col flex-1 ${
                    isHeroCard ? "lg:w-1/2" : ""
                  }`}
                >
                  <h3
                    className="text-xl md:text-[1.125rem] font-semibold mb-1.5"
                    style={{ color: TEXT_MAIN }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed mb-4"
                    style={{ color: "rgba(15,49,68,0.78)" }}
                  >
                    {s.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full border"
                      style={{
                        borderColor: BORDER_SUBTLE,
                        background: "#fdfaf4",
                        color: "#4b5b64",
                      }}
                    >
                      Clarity
                    </span>
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full border"
                      style={{
                        borderColor: BORDER_SUBTLE,
                        background: "#fdfaf4",
                        color: "#4b5b64",
                      }}
                    >
                      Consistency
                    </span>
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full border"
                      style={{
                        borderColor: BORDER_SUBTLE,
                        background: "#fdfaf4",
                        color: "#4b5b64",
                      }}
                    >
                      Accountability
                    </span>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3">
                    <a
                      href="#"
                      onClick={openCalendly}
                      className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-transform shadow-sm hover:-translate-y-[1px]"
                      style={{
                        background: `linear-gradient(120deg, ${ACCENT_START}, ${ACCENT_END})`,
                        color: NAVY,
                        boxShadow: "0 10px 26px rgba(201,148,59,0.22)",
                      }}
                      aria-label={`Get started with ${s.title}`}
                    >
                      Get Started
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 12h12M12 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>

                    <a
                      href="#"
                      onClick={openCalendly}
                      className="text-sm font-medium transition hover:underline"
                      style={{ color: TEAL }}
                      aria-label={`Learn more about ${s.title}`}
                    >
                      Learn more →
                    </a>
                  </div>

                  <div
                    className="mt-5 h-[3px] w-0 group-hover:w-full transition-[width] duration-400 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${ACCENT_START}, ${ACCENT_END})`,
                    }}
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA strip – shield-like navy band with gold glow */}
        <div
          className="mt-14 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5 border relative overflow-hidden"
          style={{
            borderColor: "rgba(15,23,42,0.45)",
            background: NAVY,
            boxShadow: "0 18px 48px rgba(15,23,42,0.6)",
          }}
        >
          {/* Glow */}
          <div
            aria-hidden
            className="absolute -right-10 -bottom-10 w-56 h-56 rounded-full opacity-70"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${GOLD_LIGHT}, transparent 55%)`,
              filter: "blur(18px)",
            }}
          />

          <div className="relative max-w-xl">
            <h3 className="text-lg md:text-xl font-bold text-white">
              Want a quick, no-pressure review?
            </h3>
            <p
              className="text-sm mt-2"
              style={{ color: "rgba(226,232,240,0.88)" }}
            >
              A short call is often enough to spot gaps, confirm what you’re
              already doing right, and identify 1–2 moves that can strengthen
              your financial “nest” immediately.
            </p>
          </div>

          <div className="relative flex flex-wrap gap-3">
            <a
              href="#"
              onClick={openCalendly}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-sm md:text-base"
              style={{
                background: `linear-gradient(120deg, ${ACCENT_START}, ${ACCENT_END})`,
                color: NAVY,
                boxShadow: "0 14px 38px rgba(201,148,59,0.4)",
              }}
            >
              Book a Review
            </a>

            <a
              href="#"
              onClick={openCalendly}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 border text-sm font-semibold bg-transparent"
              style={{
                borderColor: "rgba(248,250,252,0.9)",
                color: "#e5e7eb",
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// default export
export default ProfessionalServicesVariantB;
