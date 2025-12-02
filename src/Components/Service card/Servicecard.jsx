// Servicecard.VariantA.Updated.jsx
import React from "react";

const GOLD_START = "#f7d88b";
const GOLD_END = "#c9943b";
const NAVY = "#0c274a"; // SuretyNest wordmark
const DEEP_NAVY = "#082a48"; // shield tone
const TEAL = "#137a6c";
const TEXT_MAIN = "#0f3144";

const services = [
  {
    title: "Retirement Planning",
    description:
      "Plan your retirement so your lifestyle is shaped by choice, not just assets at retirement.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img1.jpg",
  },
  {
    title: "Estate Planning",
    description:
      "Protect what you’ve built from probate, litigation, and unfavorable taxation.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img2.jpg",
  },
  {
    title: "Kids Education Planning",
    description:
      "Choose a smart, disciplined path to fund your children’s education.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img3.jpg",
  },
  {
    title: "Lifetime Income Planning",
    description:
      "No pension? Create one—and secure predictable, lifetime income streams.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img4.jpg",
  },
  {
    title: "Life Insurance Planning",
    description:
      "Right-sized coverage with living benefits and quotes that fit your budget.",
    image:
      "https://s3.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/files/images/240314022303_Life%20Insurance%20at%20Various%20Life%20Stages.jpeg",
  },
  {
    title: "Investments Planning",
    description:
      "Grow capital the smart way. Know the difference between nominal and real returns.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/service-img6.jpg",
  },
];

export default function ServicecardVariantAUpdated() {
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
      style={{
        background:
          "radial-gradient(circle at top, #ffffff 0%, #f5f6f9 40%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="text-center lg:text-left">
            <div
              className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-white border shadow-sm"
              style={{ borderColor: "rgba(8,42,72,0.08)" }}
            >
              <span
                className="px-2 py-1 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                  boxShadow: "0 6px 20px rgba(199,155,75,0.18)",
                }}
              />
              <span
                className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase"
                style={{ color: NAVY }}
              >
                Our Services
              </span>
            </div>

            <h2
              className="mt-6 text-3xl md:text-4xl font-extrabold"
              style={{ color: TEXT_MAIN }}
            >
              Services built around your{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                financial nest
              </span>
            </h2>

            <p
              className="mt-3 text-sm md:text-base max-w-xl mx-auto lg:mx-0"
              style={{ color: "rgba(15,49,68,0.78)" }}
            >
              From protecting today to planning decades ahead, each service is
              designed to work together as one clear strategy.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-md"
              style={{
                background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                color: NAVY,
                boxShadow: "0 12px 30px rgba(199,155,75,0.28)",
              }}
            >
              Talk through your options
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M5 12h12M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Navy band with floating cards */}
        <div className="relative">
          {/* navy background belt */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-8 bottom-0 rounded-3xl"
          
          />

          {/* cards grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_18px_42px_rgba(12,39,74,0.22)] border flex flex-col"
                style={{
                  borderColor: "rgba(8,42,72,0.05)",
                  transform:
                    i === 1
                      ? "translateY(-10px)"
                      : i === 4
                      ? "translateY(10px)"
                      : "translateY(0)",
                }}
              >
                {/* image */}
                <div className="relative h-40 md:h-44 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(6,24,44,0.55), transparent 55%)",
                    }}
                  />
                  {/* gold tag */}
                  <div
                    className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold text-[#072033]"
                    style={{
                      background: `linear-gradient(120deg, ${GOLD_START}, ${GOLD_END})`,
                      boxShadow: "0 10px 24px rgba(199,155,75,0.28)",
                    }}
                  >
                    {i === 0 ? "Signature" : "Core"} Service
                  </div>
                </div>

                {/* content */}
                <div className="flex-1 flex flex-col p-5 md:p-6">
                  <h3
                    className="text-lg md:text-xl font-semibold mb-2"
                    style={{ color: DEEP_NAVY }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm md:text-[15px] leading-relaxed mb-4"
                    style={{ color: "rgba(15,49,68,0.86)" }}
                  >
                    {s.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3">
                    <button
                      onClick={openCalendly}
                      className="text-sm font-semibold"
                      style={{ color: TEAL }}
                    >
                      Get started →
                    </button>

                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: `linear-gradient(135deg, ${GOLD_START}, ${GOLD_END})`,
                        }}
                      />
                      <span className="text-[11px] text-black/60">
                        Trusted by families
                      </span>
                    </div>
                  </div>

                  {/* gold underline on hover */}
                  <div
                    className="mt-4 h-[3px] w-0 group-hover:w-full transition-[width] duration-300 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* bottom CTA strip */}
        <div
          className="mt-14 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-white"
          style={{
            border: "1px solid rgba(3,43,85,0.08)",
            boxShadow: "0 12px 34px rgba(3,43,85,0.10)",
          }}
        >
          <div>
            <h3
              className="text-lg md:text-xl font-bold"
              style={{ color: NAVY }}
            >
              Not sure which service fits you best?
            </h3>
            <p
              className="text-sm md:text-base mt-1"
              style={{ color: "rgba(15,49,68,0.8)" }}
            >
              Share where you are today, and we’ll map the right mix of
              protection, growth, and income for your situation.
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
              Book a 30-min review
            </button>

            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 border text-sm md:text-base font-semibold"
              style={{
                borderColor: "rgba(3,43,85,0.14)",
                color: TEAL,
              }}
            >
              Ask a quick question
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
