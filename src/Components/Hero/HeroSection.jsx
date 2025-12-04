// HeroModern.jsx
import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/Logo/Hero.png";

const GOLD_LIGHT = "#f7d88b";
const GOLD_DARK = "#c9943b";
const NAVY = "#0c274a";
const TEAL = "#137a6c";
const TEXT_MUTED = "#9ca3af";

export default function HeroModern({ onBook = () => {} }) {
  const handleBook = (e) => {
    e.preventDefault();
    onBook();
    if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/vmfinsolutions/financialneedanalysis",
      });
    } else {
      window.open(
        "https://calendly.com/vmfinsolutions/financialneedanalysis",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <header className="w-full mt-24 relative overflow-hidden">
      {/* Split background: navy block on left, light on right */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-3/4 lg:w-2/3"
          style={{
            background: `linear-gradient(135deg, ${NAVY}, ${TEAL})`,
          }}
        />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-[#f5f6f8]" />
        {/* Soft gold circle accent */}
        <div
          className="absolute -right-10 top-10 w-56 h-56 rounded-full opacity-70"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${GOLD_LIGHT}, transparent 55%)`,
            filter: "blur(16px)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT: Content inside a floating white card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.18)] border px-6 sm:px-8 py-7 sm:py-9"
              style={{ borderColor: "rgba(12,39,74,0.12)" }}
            >
              {/* Small badge row */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div
                  className="rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase"
                  style={{
                    background: "rgba(12,39,74,0.05)",
                    color: NAVY,
                  }}
                >
                  SuretyNest • Financial Solutions
                </div>
                <div className="flex items-center gap-1 text-[11px]">
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD_DARK})`,
                    }}
                  />
                  <span style={{ color: TEXT_MUTED }}>Trusted by 1,200+ families</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-tight"
                style={{ color: NAVY }}
              >
                Turn uncertainty into a{" "}
                <span style={{ color: GOLD_DARK }}>secure nest.</span>
              </h1>

              <p className="mt-4 text-base sm:text-lg"
                style={{ color: "#4b5563" }}
              >
                A modern advisory experience—simple conversations, clear plans,
                and ongoing support so your money decisions always match your
                life stage.
              </p>

              {/* CTA row */}
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleBook}
                  className="rounded-full px-8 py-3.5 font-semibold text-sm sm:text-base shadow-lg flex items-center gap-2"
                  style={{
                    background: `linear-gradient(120deg, ${GOLD_LIGHT}, ${GOLD_DARK})`,
                    color: NAVY,
                    boxShadow: "0 18px 40px rgba(201,148,59,0.40)",
                  }}
                >
                  Get your free strategy call
                </button>

                <button
                  onClick={handleBook}
                  className="rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium border bg-white/80"
                  style={{
                    borderColor: "rgba(19,122,108,0.25)",
                    color: TEAL,
                  }}
                >
                  Talk to an expert now
                </button>
              </div>

              {/* Highlights row */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1 h-2 w-2 rounded-full"
                    style={{ backgroundColor: TEAL }}
                  />
                  <div>
                    <div className="font-semibold" style={{ color: NAVY }}>
                      Goal-first planning
                    </div>
                    <div style={{ color: TEXT_MUTED }}>
                      Education, retirement, protection—prioritized and mapped.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1 h-2 w-2 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD_DARK})`,
                    }}
                  />
                  <div>
                    <div className="font-semibold" style={{ color: NAVY }}>
                      Transparent advice
                    </div>
                    <div style={{ color: TEXT_MUTED }}>
                      Clear reasoning behind every recommendation.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1 h-2 w-2 rounded-full"
                    style={{ backgroundColor: NAVY }}
                  />
                  <div>
                    <div className="font-semibold" style={{ color: NAVY }}>
                      Ongoing support
                    </div>
                    <div style={{ color: TEXT_MUTED }}>
                      Check-ins as your life and income change.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Modern stacked visual with floating cards */}
          <div className="lg:col-span-6 mt-6 lg:mt-0">
            <div className="relative max-w-xl mx-auto">
              {/* Image container */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.45)] border bg-slate-900"
                style={{ borderColor: "rgba(15,23,42,0.5)" }}
              >
                <img
                  src={heroImg}
                  alt="Financial overview"
                  className="w-full h-[380px] md:h-[440px] object-cover"
                />
              </motion.div>

              {/* Floating top-right pill card */}
              <motion.div
                initial={{ opacity: 0, y: -20, x: 30 }}
                animate={{ opacity: 1, y: -10, x: 10 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -top-6 right-2 sm:right-6"
              >
                <div
                  className="bg-white/95 rounded-2xl px-4 py-3 shadow-xl border backdrop-blur-sm text-xs"
                  style={{ borderColor: "rgba(12,39,74,0.18)" }}
                >
                  <div
                    className="font-semibold mb-1"
                    style={{ color: NAVY }}
                  >
                    Risk vs. Growth
                  </div>
                  <div style={{ color: TEXT_MUTED }}>
                    Custom asset mix, updated as your goals evolve.
                  </div>
                </div>
              </motion.div>

              {/* Floating bottom-left consult card */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 10, x: -4 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute bottom-0 -left-2 sm:-left-6"
              >
                <div
                  className="bg-slate-900/95 rounded-2xl px-4 py-3 shadow-xl border text-xs sm:text-sm"
                  style={{ borderColor: "rgba(148,163,184,0.4)" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="h-6 w-6 rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD_DARK})`,
                      }}
                    >
                      <span className="text-[10px]" style={{ color: NAVY }}>
                        15m
                      </span>
                    </div>
                    <div className="font-semibold" style={{ color: "#e5e7eb" }}>
                      Quick Financial Health Check
                    </div>
                  </div>
                  <div style={{ color: "#9ca3af" }}>
                    Answer a few questions and walk away with 1–2 concrete
                    actions.
                  </div>
                  <button
                    onClick={handleBook}
                    className="mt-3 inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-semibold"
                    style={{
                      background: `linear-gradient(120deg, ${GOLD_LIGHT}, ${GOLD_DARK})`,
                      color: NAVY,
                    }}
                  >
                    Book now
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
