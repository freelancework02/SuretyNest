// PartnerProgram.SuretyNest.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  Handshake,
  Notebook,
  BookOpenText,
  ChartNoAxesCombined,
  X,
} from "lucide-react";

/**
 * PartnerProgram.SuretyNest.jsx
 *
 * Refreshed layout + colors to match the SuretyNest brand:
 * - Palette: teal, gold, white backgrounds, black/near-black text.
 * - Wide hero header band + equal-height cards + sticky benefit panel.
 * - Clickable cards open a modal with full details.
 */

const GOLD_START = "#f7d88b";
const GOLD_END = "#c9943b";
const TEAL = "#137a6c";
const SURFACE = "#ffffff";
const TEXT_MAIN = "#111827";

const cardData = [
  {
    title: "Responsibilities",
    description: [
      "Embrace the system, follow it, and align with your leaders.",
      "Allow leaders to guide you while you earn and learn simultaneously.",
      "Invite prospects to multiple workshops and events.",
      "Schedule follow-ups to grow your pipeline and skills.",
    ],
    Icon: Handshake,
  },
  {
    title: "Educate People On Securing Their Future",
    description: [
      "Help families secure future needs, build generational wealth, and enjoy life without compromise.",
      "Use simple language to explain complex financial concepts.",
    ],
    Icon: Notebook,
  },
  {
    title: "Required Skills",
    description: [
      "Energetic self-starter with a positive attitude.",
      "Coachable and willing to follow a proven playbook.",
      "18+ with valid SSN and authorization to work.",
    ],
    Icon: BookOpenText,
  },
  {
    title: "What Will You Gain",
    description: [
      "Learn to build plans for retirement, tax efficiency, 401(k) rollovers, college saving, asset protection and estate planning.",
      "Grow skills that compound over years, not just months.",
    ],
    Icon: ChartNoAxesCombined,
  },
];

export default function PartnerProgramSuretyNest() {
  const [selectedCard, setSelectedCard] = useState(null);
  const calendlyReadyRef = useRef(false);

  // Load Calendly widget (once)
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (document.getElementById("calendly-widget")) {
      calendlyReadyRef.current = !!window.Calendly;
      return;
    }

    const s = document.createElement("script");
    s.id = "calendly-widget";
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    s.onload = () => {
      calendlyReadyRef.current = true;
    };
    document.body.appendChild(s);
  }, []);

  const openCalendly = (
    url = "https://calendly.com/contact-suretynest/30min"
  ) => {
    if (typeof window === "undefined") return;

    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url });
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      className="mt-28 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      aria-labelledby="partner-heading"
      style={{
        background:
          "radial-gradient(circle at top, #ffffff 0%, #f4f8f6 40%, #ffffff 100%)",
      }}
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-14">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold tracking-[0.18em] uppercase"
            style={{
              backgroundColor: SURFACE,
              color: TEAL,
              border: "1px solid rgba(19,122,108,0.18)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
            }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
              }}
            />
            Partner with us
          </span>
        </div>

        <h2
          id="partner-heading"
          className="text-3xl md:text-4xl font-extrabold text-center"
          style={{ color: TEXT_MAIN }}
        >
          Build a{" "}
          <span
            style={{
              background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            meaningful career
          </span>{" "}
          with SuretyNest
        </h2>

        <p className="mt-4 text-base md:text-lg text-center text-black/70">
          Help families protect their future while you grow skills, income, and
          confidence—with structure, training, and a clear path forward.
        </p>

        <div className="mt-7 flex justify-center flex-wrap gap-3">
          <button
            onClick={() => openCalendly()}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow"
            style={{
              background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
              color: "#111827",
              boxShadow: "0 14px 36px rgba(201,148,59,0.28)",
            }}
          >
            Book an intro call
          </button>

          <button
            onClick={() => openCalendly()}
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium border bg-white"
            style={{
              borderColor: "rgba(19,122,108,0.28)",
              color: TEAL,
            }}
          >
            Talk to our team
          </button>
        </div>
      </div>

      {/* Content: cards + sticky panel */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Cards area */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 auto-rows-fr">
          {cardData.map((card, idx) => {
            const { Icon } = card;
            return (
              <article
                key={idx}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedCard(card)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedCard(card);
                }}
                className="relative group cursor-pointer rounded-2xl bg-white h-full flex flex-col border shadow-sm hover:shadow-xl transition-transform hover:-translate-y-1"
                style={{
                  borderColor: "rgba(15,23,42,0.06)",
                }}
                aria-label={`${card.title} — view details`}
              >
                {/* top accent bar */}
                <div
                  className="h-1.5 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                  }}
                />

                {/* icon bubble */}
                <div className="px-6 pt-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(19,122,108,0.08), rgba(247,216,139,0.4))",
                    }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: TEAL }}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* content */}
                <div className="px-6 pb-6 pt-3 flex-1 flex flex-col">
                  <h3
                    className="text-lg md:text-xl font-semibold"
                    style={{ color: TEXT_MAIN }}
                  >
                    {card.title}
                  </h3>

                  <ul className="mt-3 text-sm text-black/75 list-disc pl-5 space-y-1 leading-relaxed flex-1">
                    {card.description.slice(0, 4).map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCard(card);
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                      style={{
                        background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                        color: "#111827",
                        boxShadow: "0 10px 28px rgba(201,148,59,0.22)",
                      }}
                    >
                      View details
                    </button>

                    <span className="text-[11px] font-medium text-black/60">
                      Tap to learn more
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Sticky right-hand panel */}
        <aside className="lg:col-span-4">
          <div
            className="sticky top-24 rounded-3xl p-6 md:p-7 bg-white border shadow-md"
            style={{ borderColor: "rgba(19,122,108,0.2)" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold mb-3">
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: TEAL,
                }}
              />
              <span style={{ color: TEAL }}>Why this program works</span>
            </div>

            <h4
              className="text-xl font-bold"
              style={{ color: TEXT_MAIN }}
            >
              A clear path, not guesswork
            </h4>

            <p className="mt-2 text-sm text-black/75">
              You’re not left on your own. You’ll plug into workshops, systems,
              and real examples so you can focus on helping families—not
              reinventing everything from scratch.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-black/80">
              <li>✔ Structured mentorship & step-by-step onboarding.</li>
              <li>✔ Live workshops, tools, and presentations you can plug into.</li>
              <li>✔ Earning potential that grows as your skills improve.</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => openCalendly()}
                className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold"
                style={{
                  background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                  color: "#111827",
                  boxShadow: "0 12px 32px rgba(201,148,59,0.26)",
                }}
              >
                Schedule intro call
              </button>

              <button
                onClick={() => openCalendly()}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold border bg-white"
                style={{
                  borderColor: "rgba(19,122,108,0.32)",
                  color: TEAL,
                }}
              >
                Ask a question
              </button>
            </div>

            <div className="mt-5 text-xs text-black/65">
              <strong>Availability:</strong> weekday evenings &amp; flexible
              weekend slots. No pressure—just a straightforward conversation.
            </div>
          </div>
        </aside>
      </div>

      {/* Modal for selected card */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 bg-black/60 grid place-items-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCard.title} details`}
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-6 md:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5"
              onClick={() => setSelectedCard(null)}
              aria-label="Close details"
            >
              <X className="w-5 h-5 text-black/70" />
            </button>

            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold mb-3"
              style={{
                backgroundColor: "rgba(19,122,108,0.04)",
                color: TEAL,
              }}
            >
              Partner program detail
            </div>

            <h3
              className="text-2xl font-bold"
              style={{ color: TEXT_MAIN }}
            >
              {selectedCard.title}
            </h3>

            <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-black/80 leading-relaxed">
              {selectedCard.description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => openCalendly()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold"
                style={{
                  background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                  color: "#111827",
                }}
              >
                Book a call
              </button>

              <button
                onClick={() => setSelectedCard(null)}
                className="px-4 py-3 rounded-full text-sm font-medium border bg-white"
                style={{
                  borderColor: "rgba(19,122,108,0.26)",
                  color: TEAL,
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
