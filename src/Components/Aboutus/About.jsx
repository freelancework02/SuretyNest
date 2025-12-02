// AboutUs.FounderFirst.jsx
import React from "react";

const GOLD_START = "#f7d88b";
const GOLD_END = "#c9943b";
const NAVY = "#0c274a";
const DEEP_NAVY = "#082a48";
const TEAL = "#137a6c";
const TEXT = "#0f3144";

export default function AboutUsFounder({
  founderImage,
  founderName = "Vaibhav Maddiwar",
  initials = "VM",
}) {
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
      aria-labelledby="about-heading"
      className="relative mt-16 py-12 md:py-16 px-4 sm:px-6 lg:px-12"
      style={{
        background:
          "radial-gradient(circle at top, #ffffff 0%, #f5f6f9 40%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div className="text-center md:text-left">
            <span
              className="inline-flex items-center px-4 py-1 rounded-full text-xs md:text-sm font-semibold tracking-[0.22em] uppercase"
              style={{
                background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                color: NAVY,
              }}
            >
              About Us
            </span>

            <h2
              id="about-heading"
              className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold"
              style={{ color: TEXT }}
            >
              Guiding your{" "}
              <span
                style={{
                  // background: `linear-gradient(90deg, ${GOLD_START}, ${TEAL})`,
                  WebkitBackgroundClip: "text",
                  color: TEAL,
                }}
              >
                financial nest
              </span>{" "}
              with clarity and care.
            </h2>

            <p
              className="mt-3 text-sm md:text-base max-w-2xl"
              style={{ color: "rgba(15,49,68,0.8)" }}
            >
              Personal finance is deeply personal. Our mission is to educate,
              simplify, and build plans that actually fit your life.
            </p>
          </div>
        </div>

        {/* Main two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div
              className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_18px_48px_rgba(8,42,72,0.06)] border relative overflow-hidden"
              style={{ borderColor: "rgba(8,42,72,0.06)" }}
            >
              {/* gold accent bar */}
              <div
                aria-hidden
                className="absolute left-0 top-0 h-full w-1.5"
                style={{
                  background: `linear-gradient(180deg, ${GOLD_START}, ${GOLD_END})`,
                }}
              />

              <h3
                className="text-xl md:text-2xl font-semibold"
                style={{ color: DEEP_NAVY }}
              >
                Our Mission 🎯
              </h3>

              <div className="mt-4 text-sm md:text-base text-black/80 space-y-4 leading-relaxed">
                <p>
                  Personal finances are something that every individual should
                  know and understand. But there is very little formal education
                  on the topic and many of us copy what everyone else is doing.
                  That may not always be in your best interest. What works for
                  someone else may not work for you because every family has
                  different goals, time horizons, and challenges.
                </p>

                <p>
                  SuretyNest Financial Solutions was conceived to take an
                  education-first approach to personal finances: first teach the
                  basics, then help you take action to meet your financial
                  goals—with clarity instead of confusion.
                </p>
              </div>

              {/* quick facts */}
              <div className="mt-6 flex flex-wrap gap-4">
                <div
                  className="flex items-center gap-3 rounded-xl px-4 py-2 border bg-white"
                  style={{ borderColor: "rgba(8,42,72,0.05)" }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                    }}
                  />
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: DEEP_NAVY }}
                    >
                      Education-first
                    </div>
                    <div className="text-xs text-black/60">
                      Learning that leads to action
                    </div>
                  </div>
                </div>

                <div
                  className="flex items-center gap-3 rounded-xl px-4 py-2 border bg-white"
                  style={{ borderColor: "rgba(8,42,72,0.05)" }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: DEEP_NAVY }}
                  />
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: DEEP_NAVY }}
                    >
                      Personalized
                    </div>
                    <div className="text-xs text-black/60">
                      Plans built for your life
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA row */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  onClick={openCalendly}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold shadow-md text-sm md:text-base"
                  style={{
                    background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                    color: NAVY,
                    boxShadow: "0 12px 34px rgba(199,155,75,0.24)",
                  }}
                >
                  Book a review
                </a>
                <a
                  href="/service"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 border text-sm md:text-base font-semibold"
                  style={{
                    borderColor: "rgba(8,42,72,0.12)",
                    color: TEAL,
                  }}
                >
                  Our services
                </a>
              </div>
            </div>
          </div>

          {/* Founder portrait column */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px]">
              {/* decorative background panel */}
              <div
                aria-hidden
                className="absolute -inset-y-5 -left-4 right-4 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(8,42,72,0.06), rgba(247,216,139,0.14))",
                  transform: "translateY(8px)",
                  zIndex: 0,
                }}
              />

              {/* main founder card */}
              <div
                className="relative bg-white rounded-3xl p-6 md:p-7 shadow-[0_24px_60px_rgba(8,42,72,0.10)] border"
                style={{ borderColor: "rgba(8,42,72,0.08)" }}
              >
                {/* top row */}
                <div className="flex items-start gap-4">
                  {/* portrait / initials */}
                  <div className="relative">
                    <div
                      className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center border-4"
                      style={{
                        borderColor: "rgba(247,216,139,0.7)",
                        boxShadow: "0 10px 30px rgba(8,42,72,0.25)",
                        background:
                          "linear-gradient(135deg, #f9fafb, #e5e7eb)",
                      }}
                    >
                      {founderImage ? (
                        <img
                          src={founderImage}
                          alt={founderName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span
                          className="text-2xl font-bold"
                          style={{ color: DEEP_NAVY }}
                        >
                          {initials}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <div
                      className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                      style={{ color: GOLD_START }}
                    >
                      Founder
                    </div>
                    <div
                      className="mt-1 text-lg md:text-xl font-bold"
                      style={{ color: DEEP_NAVY }}
                    >
                      {founderName}
                    </div>
                    <div
                      className="text-xs md:text-sm mt-1"
                      style={{ color: "rgba(15,49,68,0.8)" }}
                    >
                      (License Number – 21017650)
                    </div>
                    <p
                      className="mt-2 text-xs md:text-sm"
                      style={{ color: "rgba(15,49,68,0.75)" }}
                    >
                      Educator, advisor, and long-term partner in your financial
                      journey.
                    </p>
                  </div>
                </div>

                {/* quote / philosophy */}
                <div className="mt-5 text-sm text-black/75 leading-relaxed">
                  “I believe every family deserves a clear roadmap—not just
                  products. My role is to teach first, then guide you toward
                  decisions that truly support your future.”
                </div>

                {/* card footer */}
                <div
                  className="mt-6 pt-4 border-t flex items-center justify-between gap-3"
                  style={{ borderColor: "rgba(8,42,72,0.06)" }}
                >
                  <div className="text-xs md:text-sm text-black/60">
                    Trusted guidance • Practical plans • Ongoing support
                  </div>
                  <span
                    className="text-[10px] px-3 py-1 rounded-full font-semibold"
                    style={{
                      background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                      color: NAVY,
                    }}
                  >
                    SuretyNest
                  </span>
                </div>
              </div>

              {/* subtle gold glow behind the card */}
              <div
                aria-hidden
                className="absolute -right-10 -top-8 w-[220px] h-[220px] rounded-full"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${GOLD_START}, transparent 60%)`,
                  opacity: 0.7,
                  filter: "blur(18px)",
                  zIndex: -1,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
