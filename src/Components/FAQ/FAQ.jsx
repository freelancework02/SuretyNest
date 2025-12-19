// FoundationalCommitments.Gold.jsx
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Mail, HelpCircle } from "lucide-react";
import faqimg from "../../assets/faqimg.jpg"; // keep your path
import Logo from "../../assets/Logo/logobg.png"; // SuretyNest logo

// Brand palette (from logo)
const GOLD_START = "#f7d88b";
const GOLD_END = "#c9943b";
const DEEP_NAVY = "#0c274a";
const TEAL = "#137a6c";
const TEXT = "#0f3144";
const SOFT_BG = "rgba(8,42,72,0.04)";

const commitmentsData = [
  {
    title:
      "Is it possible to engage a financial advisor if I don't have a substantial amount of disposable income?",
    content:
      "Yes, everyone can benefit from financial advising. We help you make confident financial decisions — regardless of your income level.",
  },
  {
    title: "Can you help make my investments more secure?",
    content:
      "We work with you to balance risk and reward, ensuring your investments support your long-term goals.",
  },
  {
    title: "Could you please review my portfolio?",
    content:
      "Regular portfolio reviews keep your financial direction aligned. We conduct a full Financial Needs Analysis for your entire portfolio.",
  },
  {
    title: "What kind of kids' education plans do you offer?",
    content:
      "We estimate future education costs and recommend personalized financial products to match your family's goals.",
  },
  {
    title: "Do you provide assistance with life insurance?",
    content:
      "Life insurance is essential for long-term family security, asset protection, and estate planning — and we guide you through it all.",
  },
];

export default function FoundationalCommitmentsGold() {
  const [open, setOpen] = useState(null);
  const contentRefs = useRef({});

  useEffect(() => {
    Object.keys(contentRefs.current).forEach((k) => {
      const el = contentRefs.current[k];
      if (!el) return;
      if (Number(k) === open) {
        el.style.maxHeight = el.scrollHeight + 24 + "px";
      } else {
        el.style.maxHeight = "0px";
      }
    });
  }, [open]);

  const handleBook = (e) => {
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
      id="faq"
      className="py-16 px-6 md:px-10"
      style={{
        background:
          "radial-gradient(circle at top, #ffffff 0%, #f5f6f9 40%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header: logo + title + CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            {/* Brand row */}
            <div className="inline-flex items-center gap-3 mb-4">
              <div
                className="h-10 w-10 rounded-2xl flex items-center justify-center shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${GOLD_START}, ${GOLD_END})`,
                }}
              >
                <img
                  src={Logo}
                  alt="SuretyNest logo"
                  className="h-7 w-auto object-contain"
                />
              </div>

              <div>
                <div
                  className="text-[11px] uppercase tracking-[0.22em] font-semibold"
                  style={{ color: DEEP_NAVY }}
                >
                  SuretyNest
                </div>
                <div
                  className="text-xs tracking-[0.16em] uppercase"
                  style={{ color: TEAL }}
                >
                  Financial Solutions
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-3 mb-3">
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-full shadow-sm"
                style={{
                  background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M4 16h3v4H4v-4zM10 10h3v10h-3V10zM16 4h3v16h-3V4z"
                    fill="#0c274a"
                    opacity="0.95"
                  />
                </svg>
              </span>

              <div>
                <div
                  className="text-xs uppercase tracking-wider font-semibold"
                  style={{ color: DEEP_NAVY }}
                >
                  Frequently Asked Questions
                </div>
                <div
                  className="text-sm"
                  style={{ color: "rgba(64,85,105,0.9)" }}
                >
                  Everything you want to know
                </div>
              </div>
            </div>

            <h1
              className="text-2xl md:text-3xl font-extrabold leading-tight"
              style={{ color: TEXT }}
            >
              Everything you want to know before you trust us with your{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                financial nest.
              </span>
            </h1>

            <p
              className="mt-3 text-sm md:text-base"
              style={{ color: "rgba(0,0,0,0.7)" }}
            >
              Here’s what people commonly ask before working with us. Straight
              answers. No jargon. No pressure.
            </p>
          </div>

          {/* CTA on right */}
          <div className="flex flex-col items-start gap-3 ml-auto">
            <div
              className="rounded-2xl px-4 py-3 border bg-white/90 shadow-sm"
              style={{ borderColor: SOFT_BG }}
            >
              <div className="text-xs uppercase tracking-[0.18em] mb-1.5"
                style={{ color: DEEP_NAVY }}
              >
                Quick 15-min clarity call
              </div>
              <div
                className="text-sm"
                style={{ color: "rgba(15,49,68,0.8)" }}
              >
                Ask anything, understand your options, and walk away with next
                steps.
              </div>
            </div>

            <button
              onClick={handleBook}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold shadow-md text-sm"
              style={{
                background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                color: DEEP_NAVY,
                boxShadow: "0 14px 36px rgba(201,148,59,0.35)",
              }}
            >
              Book a Review
            </button>
          </div>
        </div>

        {/* Layout: accordion + visual column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {commitmentsData.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden transition-shadow"
                    style={{
                      boxShadow: isOpen
                        ? "0 18px 40px rgba(8,42,72,0.10)"
                        : "0 6px 18px rgba(8,42,72,0.05)",
                      border: `1px solid ${isOpen
                          ? "rgba(201,148,59,0.35)"
                          : "rgba(3,43,85,0.06)"
                        }`,
                      background: isOpen
                        ? "#ffffff"
                        : "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,255,255,0.96))",
                    }}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="w-full flex items-center gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#f7d88b]"
                    >
                      <div
                        className="h-8 w-1.5 rounded-full mr-1 hidden sm:block"
                        style={{
                          background: isOpen
                            ? `linear-gradient(180deg, ${GOLD_START}, ${GOLD_END})`
                            : "rgba(226,232,240,0.9)",
                        }}
                      />
                      <div className="flex-1">
                        <h3
                          className="font-semibold text-base md:text-lg"
                          style={{ color: DEEP_NAVY }}
                        >
                          {item.title}
                        </h3>
                      </div>

                      <div
                        className="flex items-center justify-center w-8 h-8 rounded-full border"
                        style={{
                          borderColor: isOpen
                            ? "rgba(201,148,59,0.65)"
                            : "rgba(148,163,184,0.6)",
                          background: isOpen
                            ? `linear-gradient(135deg, ${GOLD_START}, ${GOLD_END})`
                            : "#ffffff",
                        }}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                            }`}
                          style={{
                            color: isOpen ? DEEP_NAVY : "rgba(15,23,42,0.8)",
                          }}
                          aria-hidden="true"
                        />
                      </div>
                    </button>

                    <div
                      id={`faq-panel-${i}`}
                      ref={(el) => (contentRefs.current[i] = el)}
                      className="px-6 overflow-hidden transition-max-h duration-300 ease-in-out"
                      style={{ maxHeight: 0 }}
                    >
                      <div className="py-4 pb-6 text-sm md:text-[15px] text-black/80">
                        {item.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Email CTA */}
            <div className="mt-6">
              <div
                className="inline-flex items-center gap-4 px-5 py-4 rounded-2xl shadow-sm border bg-white"
                style={{ borderColor: SOFT_BG }}
              >
                <Mail
                  className="w-5 h-5"
                  style={{ color: GOLD_START }}
                />
                <div className="text-sm text-black/85">
                  Still have questions? Email{" "}
                  <a
                    href="mailto:Contact@suretynest.com"
                    className="font-semibold"
                    style={{ color: DEEP_NAVY }}
                  >
                    Contact@suretynest.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: image + overlay card */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-[0_22px_55px_rgba(12,39,74,0.55)] border"
              style={{ borderColor: "rgba(12,39,74,0.4)", backgroundColor: DEEP_NAVY }}
            >
              {/* Image */}
              <img
                src={faqimg}
                alt="Client consulting financial expert"
                className="w-full h-full object-cover opacity-95 transform hover:scale-105 transition-transform duration-700"
              />

              {/* Deep overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(6,24,44,0.7), rgba(6,24,44,0.1))",
                }}
              />

              {/* Gold strip at top */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{
                  background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                }}
              />

              {/* Info card */}
              <div
                className="absolute bottom-6 left-6 right-6 rounded-2xl px-4 py-4 shadow-xl bg-white/95 border backdrop-blur-sm"
                style={{ borderColor: "rgba(3,43,85,0.08)" }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="h-8 w-8 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${GOLD_START}, ${GOLD_END})`,
                    }}
                  >
                    <HelpCircle
                      className="w-4 h-4"
                      style={{ color: DEEP_NAVY }}
                    />
                  </div>

                  <div>
                    <div
                      className="font-semibold text-sm"
                      style={{ color: DEEP_NAVY }}
                    >
                      Trusted by 1,200+ families
                    </div>
                    <div
                      className="text-xs mb-2"
                      style={{ color: "rgba(15,49,68,0.75)" }}
                    >
                      Real guidance. Real clarity. Real results.
                    </div>
                    <button
                      onClick={handleBook}
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold"
                      style={{
                        background: `linear-gradient(120deg, ${GOLD_START}, ${GOLD_END})`,
                        color: DEEP_NAVY,
                      }}
                    >
                      Ask your own question
                    </button>
                  </div>
                </div>
              </div>

              {/* Gold glow (decorative) */}
              <div
                aria-hidden
                className="absolute -right-10 -top-10 w-48 h-48 rounded-full"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${GOLD_START}, transparent 55%)`,
                  opacity: 0.7,
                  filter: "blur(20px)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
