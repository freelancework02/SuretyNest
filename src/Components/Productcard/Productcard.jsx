import React, { useState, useEffect, useRef } from "react";

// SuretyNest-lite palette (no navy / deep navy)
const GOLD_START = "#f7d88b";
const GOLD_END = "#c9943b";
const TEAL = "#137a6c";
const SURFACE = "#ffffff";
const TEXT_MAIN = "#111827"; // black-ish
const TEXT_MUTED = "rgba(17,24,39,0.7)";

const products = [
  {
    title: "Fixed & Indexed Annuities",
    description:
      "A contract with an insurer that can guarantee principal and interest while offering potential lifelong income withdrawals.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img4.jpg",
  },
  {
    title: "Indexed Universal Life",
    description:
      "Death benefit protection plus portfolio diversification with the potential for tax-advantaged growth.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img3.jpg",
  },
  {
    title: "Term Life",
    description:
      "Straightforward coverage for the years you need it most—protect temporary responsibilities with confidence.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img2.jpg",
  },
  {
    title: "Traditional IRA / Roth IRA",
    description:
      "Tax-deferred growth with Traditional IRAs or tax-free qualified withdrawals with Roth IRAs—plan an efficient retirement.",
    image: "https://wesecurefuture.com/wp-content/uploads/2024/12/2148793763.jpg",
  },
  {
    title: "Whole Life Insurance",
    description:
      "Lifetime coverage with guaranteed benefits and cash value that can grow over time.",
    image: "https://wesecurefuture.com/wp-content/uploads/2024/12/2163.jpg",
  },
  {
    title: "Will & Trust",
    description:
      "Establish your Will & Trust plus four other core estate documents to protect wishes and heirs.",
    image:
      "https://s3.us-east-1.amazonaws.com/cdn.s3.webcontentor.com/OFFICE/VMF01/site_design/images/product-img1.jpg",
  },
];

// Simple SVG fallback (data URL)
const FALLBACK_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'>
    <defs>
      <linearGradient id='g' x1='0' x2='1'>
        <stop offset='0' stop-color='${GOLD_START}' />
        <stop offset='1' stop-color='${GOLD_END}' />
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' fill='url(#g)' />
    <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
      font-family='Arial, Helvetica, sans-serif' font-size='32'
      fill='${SURFACE}' opacity='0.95'>Image unavailable</text>
  </svg>`
)}`;

// Calendly launcher
function openCalendly() {
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
}

const heroImgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

export default function ProductcardGoldVariantModern() {
  const [active, setActive] = useState(0);
  const cardRefs = useRef([]);

  // scroll active card into view whenever active changes
  // useEffect(() => {
  //   const el = cardRefs.current[active];
  //   if (el && typeof el.scrollIntoView === "function") {
  //     el.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //       inline: "nearest",
  //     });
  //   }
  // }, [active]);

  // fallback handler for images
  const handleImgError = (e) => {
    try {
      if (e?.target?.dataset?.fallbackused) return;
      e.target.src = FALLBACK_SVG;
      e.target.dataset.fallbackused = "1";
    } catch {
      // ignore
    }
  };

  // base card style
  const cardBaseStyle = {
    borderRadius: 24,
    overflow: "hidden",
    background: SURFACE,
    border: "1px solid rgba(17,24,39,0.08)",
    display: "flex",
    flexDirection: "column",
    transition:
      "transform 320ms cubic-bezier(.2,.9,.2,1), box-shadow 320ms ease, border-color 220ms ease",
  };

  const activeProduct = products[active];

  return (
    <section
      aria-labelledby="products-modern"
    
      style={{
        marginTop: 64,
        paddingTop: 64,
        paddingBottom: 64,
        background:
          "radial-gradient(circle at top, #ffffff 0%, #e7f6f2 38%, #ffffff 100%)", // white + soft teal
      }}
    >
      <div
      
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        {/* Header row */}
        <div
          className="mt-16"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 10px",
                  borderRadius: 999,
                  backgroundColor: SURFACE,
                  border: "1px solid rgba(17,24,39,0.08)",
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "999px",
                    background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                    boxShadow: "0 4px 12px rgba(199,155,75,0.3)",
                  }}
                />
                <span
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: TEXT_MAIN,
                  }}
                >
                  Products
                </span>
              </div>

              <h2
                id="products-modern"
                style={{
                  fontSize: 30,
                  lineHeight: 1.25,
                  fontWeight: 800,
                  color: TEAL,
                  margin: "12px 0 4px",
                }}
              >
                Products that protect your{" "}
                <span
                  style={{
                    background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  financial nest
                </span>
                .
              </h2>
              <p
                style={{
                  marginTop: 4,
                  color: TEXT_MUTED,
                  maxWidth: 620,
                  fontSize: 14,
                }}
              >
                A curated lineup of protection, accumulation, and estate tools —
                explained in plain language, matched to your goals.
              </p>
            </div>

            <button
              onClick={openCalendly}
              style={{
                borderRadius: 999,
                padding: "10px 20px",
                fontWeight: 700,
                boxShadow: "0 18px 48px rgba(199,155,75,0.18)",
                background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                color: TEXT_MAIN,
                border: "none",
                cursor: "pointer",
                fontSize: 14,
                whiteSpace: "nowrap",
              }}
              aria-label="Schedule Financial Review"
            >
              Schedule a review
            </button>
          </div>
        </div>

        {/* Main layout: hero left, list + grid right */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {/* HERO (active product) */}
          <div
            style={{
              flex: "2 1 360px",
              minWidth: 320,
            }}
          >
            <div
              style={{
                ...cardBaseStyle,
                boxShadow: "0 20px 48px rgba(17,24,39,0.14)",
                border: "1px solid rgba(17,24,39,0.08)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 260,
                  overflow: "hidden",
                }}
              >
                <img
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  onError={handleImgError}
                  style={heroImgStyle}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
                  }}
                />
                {/* left gold strip */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 4,
                    height: "100%",
                    background: `linear-gradient(180deg, ${GOLD_START}, ${GOLD_END})`,
                  }}
                />
                {/* badge */}
                <div
                  style={{
                    position: "absolute",
                    left: 16,
                    top: 14,
                    padding: "6px 12px",
                    borderRadius: 999,
                    background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                    color: TEXT_MAIN,
                    fontSize: 11,
                    fontWeight: 800,
                    boxShadow: "0 10px 30px rgba(199,155,75,0.35)",
                  }}
                >
                  Featured product
                </div>
              </div>

              <div
                style={{
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: 20,
                    fontWeight: 800,
                    color: TEXT_MAIN,
                  }}
                >
                  {activeProduct.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    marginTop: 4,
                    color: TEXT_MUTED,
                    fontSize: 14,
                    lineHeight: 1.6,
                  }}
                >
                  {activeProduct.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    marginTop: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      padding: "6px 10px",
                      borderRadius: 999,
                      background: "rgba(19,122,108,0.06)", // soft teal
                      color: TEXT_MAIN,
                      fontWeight: 600,
                    }}
                  >
                    15 min • Quick review
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      padding: "6px 10px",
                      borderRadius: 999,
                      background: "rgba(247,216,139,0.26)",
                      color: TEXT_MAIN,
                      fontWeight: 600,
                    }}
                  >
                    Personalized to your goals
                  </span>
                </div>

                <div
                  style={{
                    marginTop: 14,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  <button
                    onClick={openCalendly}
                    style={{
                      borderRadius: 999,
                      padding: "10px 16px",
                      fontWeight: 800,
                      border: "none",
                      cursor: "pointer",
                      background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                      color: TEXT_MAIN,
                      fontSize: 13,
                      boxShadow: "0 12px 30px rgba(199,155,75,0.25)",
                    }}
                  >
                    Book this product
                  </button>

                  <button
                    onClick={openCalendly}
                    style={{
                      borderRadius: 999,
                      padding: "10px 16px",
                      border: "1px solid rgba(17,24,39,0.12)",
                      background: SURFACE,
                      color: TEXT_MAIN,
                      fontWeight: 700,
                      cursor: "pointer",
                      fontSize: 13,
                    }}
                  >
                    Talk to an advisor
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: list + grid */}
          <div
            style={{
              flex: "1 1 260px",
              minWidth: 260,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* product list panel */}
            <div
              style={{
                borderRadius: 20,
                padding: 16,
                background: SURFACE,
                border: "1px solid rgba(17,24,39,0.08)",
                boxShadow: "0 10px 24px rgba(17,24,39,0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 8,
                  gap: 8,
                }}
              >
                <h4
                  style={{
                    margin: 0,
                    fontSize: 15,
                    fontWeight: 800,
                    color: TEXT_MAIN,
                  }}
                >
                  Explore products
                </h4>
                <span
                  style={{
                    fontSize: 11,
                    padding: "4px 8px",
                    borderRadius: 999,
                    background: "rgba(19,122,108,0.06)",
                    color: TEXT_MAIN,
                    fontWeight: 600,
                  }}
                >
                  {products.length} options
                </span>
              </div>

              <p
                style={{
                  margin: "0 0 10px",
                  fontSize: 12,
                  color: TEXT_MUTED,
                }}
              >
                Tap any product to preview it on the left.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  maxHeight: 270,
                  overflowY: "auto",
                }}
              >
                {products.map((p, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={p.title}
                      ref={(el) => (cardRefs.current[i] = el)}
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: 8,
                        borderRadius: 12,
                        background: isActive
                          ? "rgba(247,216,139,0.2)"
                          : "transparent",
                        border: isActive
                          ? `1px solid rgba(201,148,59,0.7)`
                          : "1px solid rgba(148,163,184,0.3)",
                        cursor: "pointer",
                        textAlign: "left",
                        outline: "none",
                      }}
                    >
                      <img
                        src={p.image}
                        alt={`${p.title} thumbnail`}
                        onError={handleImgError}
                        style={{
                          width: 52,
                          height: 40,
                          objectFit: "cover",
                          borderRadius: 8,
                          flexShrink: 0,
                        }}
                      />

                      <div style={{ flex: "1 1 auto" }}>
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: TEXT_MAIN,
                          }}
                        >
                          {p.title}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: TEXT_MUTED,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {p.description}
                        </div>
                      </div>

                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          padding: "5px 8px",
                          borderRadius: 999,
                          background: isActive
                            ? `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`
                            : "rgba(19,122,108,0.06)",
                          color: TEXT_MAIN,
                        }}
                      >
                        {isActive ? "Active" : "View"}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div style={{ marginTop: 14 }}>
                <button
                  onClick={openCalendly}
                  style={{
                    width: "100%",
                    borderRadius: 999,
                    padding: "10px 12px",
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                    color: TEXT_MAIN,
                    fontSize: 13,
                    boxShadow: "0 10px 26px rgba(199,155,75,0.24)",
                  }}
                >
                  Book a 15-min call
                </button>
              </div>
            </div>

            {/* compact reassurance card */}
            <div
              style={{
                borderRadius: 18,
                padding: 14,
                background: SURFACE,
                border: "1px solid rgba(17,24,39,0.08)",
                boxShadow: "0 8px 22px rgba(17,24,39,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  color: TEXT_MAIN,
                  marginBottom: 4,
                }}
              >
                Not sure where to start?
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: TEXT_MUTED,
                  marginBottom: 8,
                }}
              >
                We’ll walk you through which product fits your timeline, risk,
                and goals — step by step.
              </div>

              <button
                onClick={openCalendly}
                style={{
                  borderRadius: 999,
                  padding: "8px 12px",
                  background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                  color: TEXT_MAIN,
                  fontWeight: 800,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12,
                }}
              >
                Book a 15-min call
              </button>
            </div>
          </div>
        </div>

        {/* bottom CTA */}
        <div style={{ marginTop: 28 }}>
          <div
            style={{
              borderRadius: 22,
              padding: 20,
              background: SURFACE,
              border: "1px solid rgba(17,24,39,0.08)",
              boxShadow: "0 10px 30px rgba(17,24,39,0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: TEXT_MAIN,
                  }}
                >
                  Want help choosing the right mix?
                </div>
                <div
                  style={{
                    marginTop: 6,
                    color: TEXT_MUTED,
                    fontSize: 13,
                    maxWidth: 520,
                  }}
                >
                  In a short, structured call, we’ll map which products actually
                  fit your situation — no pressure, just clarity.
                </div>
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <button
                  onClick={openCalendly}
                  style={{
                    borderRadius: 999,
                    padding: "10px 16px",
                    background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                    color: TEXT_MAIN,
                    fontWeight: 800,
                    border: "none",
                    cursor: "pointer",
                    fontSize: 13,
                  }}
                >
                  Book a 15-min call
                </button>

                <button
                  onClick={() =>
                    window?.scrollTo?.({ top: 0, behavior: "smooth" })
                  }
                  style={{
                    borderRadius: 999,
                    padding: "10px 16px",
                    border: "1px solid rgba(17,24,39,0.16)",
                    background: SURFACE,
                    color: TEAL,
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: 13,
                  }}
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
