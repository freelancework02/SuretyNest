// HeroModern.jsx
import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/Herosec.png";

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







// // HeroProfessional.jsx
// import React from "react";
// import heroImg from "../../assets/Herosec.png";

// // Brand palette based on SuretyNest logo
// const GOLD_LIGHT = "#f7d88b";
// const GOLD_DARK = "#c9943b";
// const NAVY = "#0c274a";
// const TEAL = "#137a6c";
// const TEXT_MUTED = "#6b7280";

// export default function HeroProfessional({ onBook = () => {} }) {
//   const handleBook = (e) => {
//     e.preventDefault();
//     onBook();
//     if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
//       window.Calendly.initPopupWidget({
//         url: "https://calendly.com/vmfinsolutions/financialneedanalysis",
//       });
//     } else {
//       window.open(
//         "https://calendly.com/vmfinsolutions/financialneedanalysis",
//         "_blank",
//         "noopener,noreferrer"
//       );
//     }
//   };

//   return (
//     <header
//       className="w-full mt-24"
//       style={{
//         background: "radial-gradient(circle at top, #f4f5f7, #ffffff)",
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
//           {/* LEFT: Main content */}
//           <div className="lg:col-span-7">
//             {/* Small brand lockup */}
//             <div className="inline-flex items-center gap-3 mb-5">
//               <div
//                 className="h-9 w-9 rounded-xl flex items-center justify-center"
//                 style={{
//                   background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD_DARK})`,
//                   boxShadow: "0 10px 25px rgba(201,148,59,0.45)",
//                 }}
//               >
//                 <span className="text-xs font-bold" style={{ color: NAVY }}>
//                   SN
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <span
//                   className="text-xs font-semibold tracking-[0.18em] uppercase"
//                   style={{ color: NAVY }}
//                 >
//                   SuretyNest
//                 </span>
//                 <span
//                   className="text-[11px] tracking-widest uppercase"
//                   style={{ color: TEXT_MUTED }}
//                 >
//                   Financial Solutions
//                 </span>
//               </div>
//             </div>

//             {/* Headline + copy */}
//             <h1
//               className="text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold leading-tight"
//               style={{ color: NAVY }}
//             >
//               Confident financial decisions,{" "}
//               <span style={{ color: TEAL }}>backed by experts.</span>
//             </h1>

//             <p className="mt-4 text-base sm:text-lg max-w-xl" style={{ color: "#4b5563" }}>
//               We help families and professionals create practical, disciplined
//               financial plans—covering protection, investments, and long-term
//               goals—with clarity you can rely on.
//             </p>

//             {/* Primary actions */}
//             <div className="mt-7 flex flex-wrap gap-4 items-center">
//               <button
//                 onClick={handleBook}
//                 className="rounded-full px-8 py-3.5 font-semibold text-sm sm:text-base shadow-md"
//                 style={{
//                   background: `linear-gradient(90deg, ${GOLD_LIGHT}, ${GOLD_DARK})`,
//                   color: NAVY,
//                   boxShadow: "0 14px 38px rgba(201,148,59,0.30)",
//                 }}
//               >
//                 Book an Appointment
//               </button>

//               <button
//                 onClick={handleBook}
//                 className="rounded-full px-7 py-3 text-sm font-medium border bg-white/70"
//                 style={{
//                   color: TEAL,
//                   borderColor: "rgba(12,39,74,0.18)",
//                 }}
//               >
//                 Speak to an advisor
//               </button>
//             </div>

//             {/* Trust / stats strip */}
//             <div className="mt-8 flex flex-wrap gap-7 items-center">
//               <div>
//                 <div
//                   className="text-sm font-semibold"
//                   style={{ color: NAVY }}
//                 >
//                   1,200+
//                 </div>
//                 <div className="text-xs" style={{ color: TEXT_MUTED }}>
//                   Families advised
//                 </div>
//               </div>

//               <div className="h-10 w-px bg-slate-200" />

//               <div>
//                 <div
//                   className="text-sm font-semibold"
//                   style={{ color: NAVY }}
//                 >
//                   12+ years
//                 </div>
//                 <div className="text-xs" style={{ color: TEXT_MUTED }}>
//                   Advisory experience
//                 </div>
//               </div>

//               <div className="h-10 w-px bg-slate-200 hidden sm:block" />

//               <div className="flex items-center gap-2">
//                 <span
//                   className="inline-block h-2 w-2 rounded-full"
//                   style={{ backgroundColor: TEAL }}
//                 />
//                 <span className="text-xs" style={{ color: TEXT_MUTED }}>
//                   SEBI-registered partners & leading insurers
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: Image + checklist card */}
//           <div className="lg:col-span-5">
//             <div className="relative">
//               {/* Background panel */}
//               <div
//                 className="absolute -top-6 -right-4 w-64 h-64 rounded-3xl hidden md:block"
//                 style={{
//                   background: `linear-gradient(145deg, ${NAVY}, ${TEAL})`,
//                   opacity: 0.13,
//                   filter: "blur(6px)",
//                 }}
//               />

//               <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border"
//                 style={{ borderColor: "rgba(12,39,74,0.12)" }}
//               >
//                 <img
//                   src={heroImg}
//                   alt="Financial overview"
//                   className="w-full h-[360px] md:h-[430px] object-cover"
//                 />

//                 {/* Overlay card at bottom */}
//                 <div className="absolute inset-x-5 -bottom-5">
//                   <div
//                     className="bg-white rounded-2xl px-4 py-4 shadow-xl border flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
//                     style={{ borderColor: "rgba(12,39,74,0.12)" }}
//                   >
//                     <div>
//                       <div
//                         className="text-xs font-semibold uppercase tracking-wide"
//                         style={{ color: NAVY }}
//                       >
//                         Discovery Call
//                       </div>
//                       <div
//                         className="text-sm font-semibold mt-1"
//                         style={{ color: TEAL }}
//                       >
//                         15 minutes to understand your priorities.
//                       </div>
//                       <div className="text-xs mt-1" style={{ color: TEXT_MUTED }}>
//                         No obligation, just clear direction and next steps.
//                       </div>
//                     </div>

//                     <button
//                       onClick={handleBook}
//                       className="mt-3 md:mt-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold"
//                       style={{
//                         background: `linear-gradient(90deg, ${GOLD_LIGHT}, ${GOLD_DARK})`,
//                         color: NAVY,
//                       }}
//                     >
//                       Schedule now
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Checklist pill */}
//               <div className="mt-8 bg-white rounded-2xl border shadow-sm p-4">
//                 <div
//                   className="text-xs font-semibold uppercase tracking-[0.18em] mb-3"
//                   style={{ color: NAVY }}
//                 >
//                   What we cover
//                 </div>
//                 <ul className="space-y-2 text-sm" style={{ color: TEXT_MUTED }}>
//                   <li>✔ Protection & risk cover analysis</li>
//                   <li>✔ Goal-based investment planning</li>
//                   <li>✔ Cash-flow & emergency fund review</li>
//                   <li>✔ Clear, written action plan</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
