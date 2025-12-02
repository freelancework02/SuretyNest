// Valueprop.VariantA.Updated.v2.jsx
import React from "react";

/**
 * SuretyNest-themed Value Proposition Section
 * - Colors aligned to logo: deep navy, teal accent, gold gradient.
 * - Hero band with large left visual + right copy / CTA.
 * - Staggered cards below with gold accent strips and teal chips.
 */

const GOLD_START = "#f7d88b";
const GOLD_END = "#c9943b";
const NAVY = "#0c274a";
const DEEP_NAVY = "#082a48";
const TEAL = "#137a6c";
const TEXT = "#0f3144";

const services = [
  {
    title: "Planning for the Future",
    description: (
      <>
        <p className="text-black/80 leading-relaxed">
          We’ve helped clients prepare for the unknown while staying aligned
          with their financial goals. Ask us about:
        </p>
        <ul className="list-disc list-outside mt-3 text-black/70 pl-5 space-y-1">
          <li>Financial planning</li>
          <li>Tax optimization</li>
          <li>Education funding</li>
          <li>Estate planning</li>
        </ul>
        <p className="mt-3 text-black/80 leading-relaxed">
          As an independent firm, we source across providers to tailor solutions
          that fit your exact needs.
        </p>
      </>
    ),
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img7.jpg",
    tag: "Flagship",
  },
  {
    title: "Comprehensive End-to-End Approach",
    description:
      "We start with a deep needs analysis, clarify goals, and review your full portfolio. Then we tailor strategies to your risk tolerance and market realities—expect unbiased recommendations built around you.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img8.jpg",
    tag: "Featured",
  },
  {
    title: "Committed to Service",
    description:
      "Great strategies begin with great relationships. Our mission is to exceed expectations—on day one and year ten. Let’s map short- and long-term moves that bring your goals within reach.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img9.jpg",
    tag: "Trusted",
  },
];

export default function ValuepropVariantAUpdatedV2() {
  const openCalendly = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/vmfinsolutions/financialneedanalysis",
      });
    } else if (typeof window !== "undefined") {
      window.open(
        "https://calendly.com/vmfinsolutions/financialneedanalysis",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <section
      className="py-16"
      aria-labelledby="valueprop-heading"
      style={{
        background:
          "radial-gradient(circle at top, #ffffff 0%, #f3f4f7 46%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO FEATURE BAND */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14 rounded-3xl border shadow-[0_20px_50px_rgba(12,39,74,0.10)] overflow-hidden bg-white"
          style={{ borderColor: "rgba(12,39,74,0.08)" }}
        >
          {/* Large visual panel (left on desktop) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div
              className="relative h-full min-h-[320px] rounded-none lg:rounded-l-3xl overflow-hidden group"
            >
              <img
                src={services[0].image}
                alt={services[0].title}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* dark overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              {/* left accent strip */}
              <div
                className="absolute left-0 top-0 h-full w-2"
                style={{
                  background: `linear-gradient(180deg, ${GOLD_START}, ${GOLD_END})`,
                }}
                aria-hidden
              />

              {/* floating badge */}
              <div
                className="absolute left-5 bottom-5 rounded-full px-3 py-2 text-xs md:text-sm font-semibold text-[#072033] shadow"
                style={{
                  background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                }}
              >
                {services[0].tag} Planning
              </div>
            </div>
          </div>

          {/* Text content + CTA (right on desktop) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="h-full flex flex-col justify-center gap-5 px-2 py-6 lg:py-10 lg:pr-10">
              {/* small heading pill */}
              <div className="inline-flex items-center gap-3 mb-1">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md"
                  style={{
                    background: `linear-gradient(135deg, ${GOLD_START}, ${GOLD_END})`,
                  }}
                  aria-hidden
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M7 17L17 7"
                      stroke={NAVY}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 7H8"
                      stroke={NAVY}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <p
                    className="text-[11px] uppercase tracking-[0.22em] font-semibold"
                    style={{ color: NAVY }}
                  >
                    Why clients choose us
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(15,49,68,0.75)" }}
                  >
                    SuretyNest • Financial Solutions
                  </p>
                </div>
              </div>

              <h3
                id="valueprop-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight"
                style={{ color: TEXT }}
              >
                Our value is in{" "}
                <span
                  style={{
                    background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  clarity, confidence,
                </span>{" "}
                and a plan that matches your life.
              </h3>

              <div
                className="mt-1 text-sm md:text-base text-black/80 leading-relaxed"
                style={{ color: "rgba(15,49,68,0.9)" }}
              >
                <p className="mb-3">
                  We help you prepare for the unknown while staying aligned with
                  what actually matters—your family, lifestyle, and future
                  goals. Numbers matter, but so does the person behind them.
                </p>

                <ul className="pl-5 list-disc space-y-1 text-black/75">
                  <li>Independent, product-agnostic recommendations</li>
                  <li>Goal-based planning, not one-size-fits-all advice</li>
                  <li>Ongoing reviews as your life and markets change</li>
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={openCalendly}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold shadow-md"
                  style={{
                    background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                    color: NAVY,
                    boxShadow: "0 14px 36px rgba(199,155,75,0.28)",
                  }}
                >
                  Book a consultation
                </button>

                <button
                  onClick={openCalendly}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold border"
                  style={{
                    borderColor: "rgba(12,39,74,0.16)",
                    color: TEAL,
                  }}
                >
                  Ask a quick question →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* STAGGERED CARD MASONRY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => {
            const offsetClass =
              idx === 1 ? "md:mt-8 lg:mt-12" : idx === 2 ? "lg:mt-6" : "";
            return (
              <article
                key={idx}
                className={`${offsetClass} group bg-white rounded-2xl overflow-hidden shadow-md border flex flex-col`}
                style={{ borderColor: "rgba(8,42,72,0.06)" }}
                aria-labelledby={`vp-${idx}-title`}
              >
                {/* Image + tags */}
                <div className="relative">
                  <div className="h-44 md:h-52 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div
                    className="absolute left-4 top-4 px-3 py-1.5 rounded-full text-[11px] font-semibold text-[#072033] shadow"
                    style={{
                      background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                    }}
                  >
                    {s.tag}
                  </div>

                  {/* gold accent strip */}
                  <div
                    className="absolute left-0 top-0 h-full w-1"
                    style={{
                      background: `linear-gradient(180deg, ${GOLD_START}, ${GOLD_END})`,
                    }}
                    aria-hidden
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h4
                    id={`vp-${idx}-title`}
                    className="text-xl font-bold mb-2"
                    style={{ color: DEEP_NAVY }}
                  >
                    {s.title}
                  </h4>

                  <div className="text-sm text-black/80 mb-4">
                    {s.description}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="text-[11px] px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(3,43,85,0.05)",
                          color: "rgba(15,49,68,0.8)",
                        }}
                      >
                        Clarity
                      </span>
                      <span
                        className="text-[11px] px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(19,122,108,0.08)",
                          color: TEAL,
                        }}
                      >
                        Tailored
                      </span>
                    </div>

                    <button
                      onClick={openCalendly}
                      className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold"
                      style={{ color: TEAL }}
                    >
                      Talk to an advisor →
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA FOOTER STRIP */}
        <div
          className="mt-14 rounded-2xl p-7 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-white"
          style={{
            boxShadow: "0 10px 34px rgba(3,43,85,0.08)",
            border: "1px solid rgba(3,43,85,0.06)",
          }}
        >
          <div>
            <h4
              className="text-lg md:text-xl font-bold"
              style={{ color: NAVY }}
            >
              Ready to move from uncertainty to clarity?
            </h4>
            <p
              className="text-sm md:text-base mt-1"
              style={{ color: "rgba(15,49,68,0.8)" }}
            >
              Book a free 30-minute consultation and we’ll map the next steps
              together—no obligation, just clear guidance.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-sm md:text-base"
              style={{
                background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                color: NAVY,
              }}
            >
              Book a consultation
            </button>

            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 border text-sm md:text-base font-semibold"
              style={{
                borderColor: "rgba(3,43,85,0.16)",
                color: TEAL,
              }}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
