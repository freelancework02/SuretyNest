// Blog.VariantB.Updated.jsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Components/Firebase/firebase";
import { useNavigate } from "react-router-dom";

// SuretyNest brand palette (from logo)
const BRAND_NAVY = "#022548";
const BRAND_TEAL = "#0B6970";
const GOLD_START = "#E5C569";
const GOLD_END = "#AF8F3C";
const SURFACE = "#FFFFFF";
const SOFT_BG = "#F5F7FA";

const goldGradient = `linear-gradient(135deg, ${GOLD_START}, ${GOLD_END})`;

export default function BlogVariantBUpdated() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState(["All"]);
  const [activeTag, setActiveTag] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const q = await getDocs(collection(db, "blogs"));
        const items = q.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // Sort by createdAt if available, else by id (descending -> newest first)
        items.sort((a, b) => {
          const aDate = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const bDate = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return bDate - aDate || String(b.id).localeCompare(String(a.id));
        });
        setBlogs(items);

        const t = new Set(["All"]);
        items.forEach((it) => {
          if (it.tag) t.add(String(it.tag));
          if (Array.isArray(it.tags)) it.tags.forEach((x) => t.add(String(x)));
        });
        setTags(Array.from(t));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    loadBlogs();
  }, []);

  const featured = blogs.length ? blogs[0] : null;
  const list = blogs.slice(1);

  const filtered =
    activeTag === "All"
      ? list
      : list.filter((b) => {
          if (!b) return false;
          if (b.tag && b.tag === activeTag) return true;
          if (Array.isArray(b.tags) && b.tags.includes(activeTag)) return true;
          return false;
        });

  const excerpt = (text = "", n = 140) =>
    String(text).length > n ? String(text).slice(0, n).trim() + "…" : text;

  return (
    <section
      className="mt-20 md:mt-16"
      style={{
        background:
          "radial-gradient(circle at top, #faf5e8 0, #f3f6fb 40%, #f5f7fa 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
          <div>
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.2em] mb-3"
              style={{
                background: "#FDF5E5",
                color: BRAND_TEAL,
                border: `1px solid ${GOLD_END}33`,
              }}
            >
              SURETYNEST • INSIGHTS
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
              style={{ color: BRAND_NAVY }}
            >
              SuretyNest Insights
            </h2>
            <p
              className="mt-2 text-sm md:text-base max-w-xl leading-relaxed"
              style={{ color: "#4B5563" }}
            >
              Perspective, strategy, and practical ideas to help you move
              smarter with your finances.
            </p>
          </div>

          {/* tags / filters */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <span
              className="text-[11px] uppercase tracking-[0.18em] font-semibold"
              style={{ color: BRAND_NAVY }}
            >
              FILTER BY TOPIC
            </span>
            <div className="flex gap-2 flex-wrap items-center justify-end">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTag(t)}
                  className="text-xs md:text-sm px-3 md:px-4 py-1.5 rounded-full font-medium transition-all focus:outline-none"
                  style={
                    activeTag === t
                      ? {
                          background: goldGradient,
                          color: BRAND_NAVY,
                          boxShadow: "0 8px 24px rgba(175,143,60,0.45)",
                        }
                      : {
                          border: `1px solid ${BRAND_TEAL}30`,
                          color: BRAND_TEAL,
                          background: SURFACE,
                        }
                  }
                  aria-pressed={activeTag === t}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* loading state */}
        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-72 rounded-2xl bg-gray-200/80 animate-pulse"
              />
            ))}
          </div>
        )}

        {/* featured hero */}
        {!loading && featured && (
          <article className="mb-10 rounded-[28px] overflow-hidden border bg-white/80 backdrop-blur shadow-[0_20px_45px_rgba(2,37,72,0.20)] border-[rgba(2,37,72,0.06)]">
            <div className="relative grid grid-cols-1 lg:grid-cols-12">
              {/* Image */}
              <div className="lg:col-span-7 relative h-[360px] md:h-[460px] overflow-hidden">
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />

                <div className="absolute left-5 bottom-5 right-5 md:left-8 md:right-8">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.18em]"
                      style={{ background: goldGradient, color: BRAND_NAVY }}
                    >
                      LATEST
                    </span>
                    <div className="text-xs text-white/90">
                      {featured.date || ""}
                    </div>
                  </div>

                  <h3 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight drop-shadow">
                    {featured.title}
                  </h3>
                  <p className="mt-2 text-white/90 max-w-2xl text-sm md:text-base">
                    {excerpt(
                      featured.summary ||
                        featured.content ||
                        featured.description,
                      220
                    )}
                  </p>

                  <div className="mt-4 flex gap-3 flex-wrap">
                    <button
                      onClick={() =>
                        navigate(`/blog/${featured.id}`, {
                          state: { blog: featured },
                        })
                      }
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm md:text-base"
                      style={{
                        background: goldGradient,
                        color: BRAND_NAVY,
                        boxShadow: "0 14px 32px rgba(229,197,105,0.55)",
                      }}
                    >
                      Read Article
                    </button>

                    <button
                      onClick={() =>
                        window.open(
                          featured.meetingLink || "#",
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border text-xs md:text-sm font-medium"
                      style={{
                        borderColor: "rgba(255,255,255,0.35)",
                        color: "white",
                        background: "transparent",
                      }}
                      aria-disabled={!featured.meetingLink}
                    >
                      {featured.meetingLink ? "Book a call" : "No meeting link"}
                    </button>
                  </div>
                </div>
              </div>

              {/* metadata + excerpt column */}
              <aside
                className="lg:col-span-5 p-6 md:p-8"
                style={{
                  background:
                    "linear-gradient(145deg, #FFFFFF 0%, #F5F7FA 40%, #FDF5E5 100%)",
                }}
              >
                <div className="flex flex-col h-full">
                  <div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: BRAND_TEAL }}
                    >
                      {featured.tag ||
                        featured.category ||
                        "Featured insight"}
                    </div>
                    <h4
                      className="mt-3 text-lg md:text-xl font-bold"
                      style={{ color: BRAND_NAVY }}
                    >
                      Key takeaway
                    </h4>
                    <div
                      className="mt-2 text-sm md:text-base text-black/75 leading-relaxed"
                      style={{ color: "#374151" }}
                    >
                      {excerpt(
                        featured.summary ||
                          featured.content ||
                          featured.description,
                        260
                      )}
                    </div>
                  </div>

                  <div className="mt-auto pt-5 border-t border-[rgba(2,37,72,0.06)]">
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-xs md:text-sm text-black/60">
                        {featured.author || "SuretyNest Team"}
                      </div>
                      <div className="text-xs md:text-sm text-black/60">
                        {featured.readTime ||
                          featured.minutes ||
                          "Approx. 4 min read"}
                      </div>
                    </div>

                    <div className="mt-4 flex gap-3 flex-wrap">
                      <button
                        onClick={() =>
                          navigate(`/blog/${featured.id}`, {
                            state: { blog: featured },
                          })
                        }
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm"
                        style={{
                          background: BRAND_NAVY,
                          color: SURFACE,
                          boxShadow: "0 12px 28px rgba(2,37,72,0.35)",
                        }}
                      >
                        Continue reading
                      </button>

                      <button
                        onClick={() =>
                          window.open(
                            featured.meetingLink || "#",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="px-4 py-3 rounded-xl border text-xs md:text-sm font-medium"
                        style={{
                          borderColor: "rgba(8,42,72,0.16)",
                          color: BRAND_NAVY,
                          backgroundColor: SURFACE,
                        }}
                      >
                        Talk to an expert
                      </button>
                    </div>

                    <div className="mt-4 text-xs text-black/55">
                      Published: {featured.date || "—"}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </article>
        )}

        {/* grid intro */}
        {!loading && (
          <div className="mb-4 md:mb-6">
            <h4
              className="text-xl md:text-2xl font-semibold"
              style={{ color: BRAND_NAVY }}
            >
              Recent Articles
            </h4>
            <p className="text-sm text-black/60">
              Browse the latest thinking from the SuretyNest team.
            </p>
          </div>
        )}

        {/* cards grid */}
        {!loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {filtered.map((blog) => (
              <article
                key={blog.id}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border hover:border-[rgba(175,143,60,0.6)] shadow-sm hover:shadow-[0_18px_34px_rgba(2,37,72,0.16)] transform transition hover:-translate-y-1"
                style={{
                  borderColor: "rgba(8,42,72,0.06)",
                  minHeight: 360,
                }}
                aria-labelledby={`blog-${blog.id}-title`}
              >
                {/* image top */}
                <div className="relative h-44 overflow-hidden">
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,37,72,0.45)] via-transparent to-transparent" />
                  <div
                    className="absolute left-3 top-3 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide"
                    style={{ background: goldGradient, color: BRAND_NAVY }}
                  >
                    {blog.tag || blog.category || "Article"}
                  </div>
                </div>

                {/* content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      id={`blog-${blog.id}-title`}
                      className="text-lg font-semibold mb-2 leading-snug"
                      style={{ color: BRAND_NAVY }}
                    >
                      {blog.title}
                    </h3>
                    <p className="text-sm text-black/70 mb-4 line-clamp-3">
                      {excerpt(
                        blog.summary || blog.content || blog.description,
                        140
                      )}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[11px] text-black/60">
                      {blog.date || ""}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          navigate(`/blog/${blog.id}`, { state: { blog } })
                        }
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs md:text-sm font-semibold"
                        style={{
                          background: BRAND_NAVY,
                          color: SURFACE,
                        }}
                      >
                        Read more
                      </button>

                      <a
                        href={blog.meetingLink || "#"}
                        onClick={(e) => {
                          if (!blog.meetingLink) e.preventDefault();
                        }}
                        className="text-xs md:text-sm underline"
                        style={{ color: BRAND_TEAL }}
                      >
                        {blog.meetingLink ? "Book call" : "No link"}
                      </a>
                    </div>
                  </div>
                </div>

                {/* bottom accent */}
                <div
                  className="h-1 w-full"
                  style={{ background: goldGradient }}
                />
              </article>
            ))}

            {/* no posts message */}
            {filtered.length === 0 && !loading && (
              <div className="col-span-full p-8 rounded-2xl border text-center text-black/60 bg-white/70">
                No articles found for &quot;{activeTag}&quot;.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
