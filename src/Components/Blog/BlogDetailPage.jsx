// BlogDetail.VariantA.Updated.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Contactus/Contactus";

/**
 * Blog Detail — SuretyNest Variant A
 *
 * Brand palette:
 *   BRAND_NAVY  = #022548
 *   BRAND_TEAL  = #0B6970
 *   GOLD_START  = #E5C569
 *   GOLD_END    = #AF8F3C
 */

const BRAND_NAVY = "#022548";
const BRAND_TEAL = "#0B6970";
const GOLD_START = "#E5C569";
const GOLD_END = "#AF8F3C";
const SURFACE = "#ffffff";

const GOLD_GRADIENT = `linear-gradient(135deg, ${GOLD_START}, ${GOLD_END})`;
const NAVY_GRADIENT = `linear-gradient(135deg, ${BRAND_NAVY}, ${BRAND_TEAL})`;

export default function BlogDetailVariantA() {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="h-20 md:h-24 lg:h-28" />
        <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: BRAND_NAVY }}
          >
            Blog not found
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-6 py-2 rounded-full font-semibold"
            style={{
              background: NAVY_GRADIENT,
              color: SURFACE,
              boxShadow: "0 8px 28px rgba(2,37,72,0.32)",
            }}
          >
            Go Back
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedContent = blog.content
    ? blog.content
        .split("\n")
        .map((line, index, arr) => {
          const isBullet = line.trim().match(/^[-*•]\s/);
          const isNumbered = line.trim().match(/^\d+\.\s/);
          if (
            (isBullet || isNumbered) &&
            index > 0 &&
            arr[index - 1].trim() !== ""
          )
            return `\n${line}`;
          return line;
        })
        .join("\n")
    : "";

  const publishedDate = new Date(
    blog.publishedAt || blog.date || Date.now()
  ).toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "radial-gradient(circle at top, #faf5e8 0, #f3f6fb 40%, #f5f7fa 100%)",
      }}
    >
      <Navbar />
      {/* spacer to avoid navbar overlap */}
      <div className="h-20 md:h-24 lg:h-28" />

      {/* HERO */}
      <header className="relative w-full overflow-hidden">
        <div
          className="w-full"
          style={{
            height: "min(58vw, 640px)",
            maxHeight: "760px",
            position: "relative",
          }}
        >
          {/* hero image */}
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(.65)" }}
            loading="lazy"
          />

          {/* SuretyNest overlay */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(2,37,72,0.85) 0%, rgba(11,105,112,0.7) 45%, rgba(0,0,0,0.3) 100%), radial-gradient(700px 260px at 10% 15%, rgba(229,197,105,0.25), transparent 55%)",
            }}
          />
        </div>

        {/* Floating info card */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 -mt-20 md:-mt-24 relative z-20">
          <div
            className="bg-white/95 backdrop-blur rounded-2xl p-6 md:p-8 shadow-[0_20px_45px_rgba(2,37,72,0.35)] border flex flex-col md:flex-row items-start gap-6"
            style={{
              borderColor: "rgba(2,37,72,0.10)",
            }}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.16em]"
                  style={{
                    background: GOLD_GRADIENT,
                    color: BRAND_NAVY,
                    boxShadow: "0 8px 20px rgba(175,143,60,0.45)",
                  }}
                >
                  <span>{publishedDate}</span>
                </span>

                <div
                  className="text-xs md:text-sm"
                  style={{ color: "rgba(2,37,72,0.75)" }}
                >
                  {blog.author || "SuretyNest Team"}
                </div>
              </div>

              <h1
                className="text-lg md:text-2xl lg:text-3xl font-extrabold leading-snug"
                style={{ color: BRAND_NAVY }}
                title={blog.title}
              >
                {blog.title}
              </h1>

              <p
                className="mt-3 text-sm md:text-base max-w-3xl"
                style={{ color: "rgba(2,37,72,0.80)" }}
              >
                {blog.summary ||
                  "An in-depth article curated by our experts to help you navigate financial decisions with clarity and confidence."}
              </p>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto flex flex-col gap-3 items-stretch">
              <button
                onClick={() => navigate("/blog")}
                className="rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                  background: NAVY_GRADIENT,
                  color: SURFACE,
                  boxShadow: "0 10px 30px rgba(2,37,72,0.45)",
                }}
              >
                Back to Blogs
              </button>

              <button
                onClick={() =>
                  window.open(
                    blog.meetingLink || "#",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="rounded-full px-4 py-2 text-sm font-medium border"
                style={{
                  borderColor: "rgba(2,37,72,0.12)",
                  color: BRAND_NAVY,
                  background: SURFACE,
                  opacity: blog.meetingLink ? 1 : 0.6,
                }}
                aria-disabled={!blog.meetingLink}
              >
                {blog.meetingLink ? "Book a Call" : "No meeting link"}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <article className="max-w-none text-[rgba(2,37,72,0.9)]">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left column image */}
            <div className="lg:w-1/3 w-full rounded-2xl overflow-hidden shadow-[0_12px_34px_rgba(2,37,72,0.16)] bg-white border border-[rgba(2,37,72,0.06)]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
                style={{ minHeight: 220 }}
                loading="lazy"
              />
            </div>

            {/* Right column text */}
            <div className="lg:w-2/3 w-full space-y-5 text-sm md:text-base">
              {formattedContent.split("\n").map((line, idx) => {
                const trimmed = line.trim();
                if (!trimmed) return null;
                const isList =
                  trimmed.match(/^[-*•]\s/) || trimmed.match(/^\d+\.\s/);

                if (isList) {
                  return (
                    <p
                      key={idx}
                      className="pl-5"
                      style={{ marginTop: 0, lineHeight: "1.8" }}
                      dangerouslySetInnerHTML={{
                        __html: trimmed.replace(/^[-*•]\s/, "• "),
                      }}
                    />
                  );
                }

                return (
                  <p
                    key={idx}
                    style={{ lineHeight: "1.8", marginTop: "0.6rem" }}
                  >
                    {line}
                  </p>
                );
              })}

              {/* Inline CTA strip */}
              <div
                className="mt-6 rounded-2xl p-6 border bg-white/90 backdrop-blur"
                style={{ borderColor: "rgba(2,37,72,0.10)" }}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-left">
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ color: BRAND_NAVY }}
                    >
                      Want a tailored walkthrough?
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "rgba(2,37,72,0.75)" }}
                    >
                      Book a short session and we&apos;ll walk through specific
                      steps for your situation.
                    </p>
                  </div>

                  <div className="flex gap-3 flex-wrap justify-center md:justify-end">
                    <button
                      onClick={() =>
                        window.open(
                          blog.meetingLink ||
                            "https://calendly.com/contact-suretynest/30min",
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm"
                      style={{
                        background: GOLD_GRADIENT,
                        color: BRAND_NAVY,
                        boxShadow: "0 12px 36px rgba(175,143,60,0.45)",
                      }}
                    >
                      Book a Call
                    </button>

                    <button
                      onClick={() =>
                        window.open(
                          blog.meetingLink ||
                            "https://calendly.com/contact-suretynest/30min",
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-full border font-medium text-sm"
                      style={{
                        borderColor: "rgba(2,37,72,0.12)",
                        color: BRAND_NAVY,
                        background: SURFACE,
                      }}
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* small secondary CTA */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/blog")}
              className="rounded-full px-6 py-3 font-semibold text-sm md:text-base"
              style={{
                background: GOLD_GRADIENT,
                color: BRAND_NAVY,
                boxShadow: "0 10px 30px rgba(175,143,60,0.45)",
              }}
            >
              Browse all blogs
            </button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
