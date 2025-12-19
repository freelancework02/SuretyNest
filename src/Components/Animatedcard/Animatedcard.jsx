import React from "react";
import {
  Presentation,
  FileText,
  ShieldCheck,
  Briefcase,
  Calculator,
  CheckCircle,
  TrendingUp,
  Users,
} from "lucide-react";
import Logo from "../../assets/Logo/logobg.png";

// ---------------- Theme tokens based on SuretyNest logo ----------------
const THEME = {
  goldLight: "#f7d88b",
  goldDark: "#c9943b",
  navy: "#0c274a",
  teal: "#137a6c",
  text: "#0f3144",
  surface: "#ffffff",
  subtleBorder: "rgba(12,39,74,0.08)",
  bgSoft: "#f5f6f8",
};

// ---------- Shared Data (text unchanged) ----------
const cards = [
  {
    title: "We Help You Plan For Future Needs",
    description:
      "Enjoy today while preparing for tomorrow. Gain clarity on your finances and build a roadmap toward a secure future.",
    Icon: Presentation,
  },
  {
    title: "Educate People On Securing Their Future",
    description:
      "We break down financial concepts into simple, actionable insights so you can make informed wealth decisions.",
    Icon: FileText,
  },
  {
    title: "Protect Your Assets & Loved Ones",
    description:
      "Minimize taxes, reduce risks, and create protections that secure your assets for the next generation.",
    Icon: ShieldCheck,
  },
  {
    title: "Build & Diversify Your Income",
    description:
      "Explore structured and strategic income streams tailored to your goals and lifestyle aspirations.",
    Icon: Briefcase,
  },
];

// ---------- MAIN VARIANT (logo-matching layout + palette) ----------
export function HomeVariantA() {
  const t = THEME;

  const handleBook = (e) => {
    e.preventDefault();
    if (
      typeof window !== "undefined" &&
      window.Calendly?.initPopupWidget
    ) {
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
    <main
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: `radial-gradient(circle at top, #ffffff, ${t.bgSoft})`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top: Brand + Hero + Dark card */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left column: brand + headline + stats */}
          <div className="lg:col-span-7">
            {/* Brand row */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="h-12 w-12 rounded-2xl flex items-center justify-center shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${t.goldLight}, ${t.goldDark})`,
                }}
              >
                <img
                  src={Logo}
                  alt="SuretyNest logo"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <div
                  className="text-xs font-semibold tracking-[0.22em] uppercase"
                  style={{ color: t.navy }}
                >
                  SuretyNest
                </div>
                <div
                  className="text-[11px] tracking-[0.18em] uppercase"
                  style={{ color: t.teal }}
                >
                  Financial Solutions
                </div>
              </div>
            </div>

            {/* Heading */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
              style={{ color: t.text }}
            >
              Empowering you with{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${t.goldLight}, ${t.goldDark})`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                clarity, confidence,
              </span>
              <br className="hidden sm:block" />
              and a strong financial path forward.
            </h1>

            <p
              className="max-w-2xl text-base md:text-lg mb-6"
              style={{ color: "rgba(15,49,68,0.72)" }}
            >
              We simplify your path to financial security through strategic
              planning, smart protection, and guided wealth-building.
            </p>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-6">
              <div>
                <div
                  className="text-2xl font-bold"
                  style={{ color: t.navy }}
                >
                  1,200+
                </div>
                <div
                  className="text-xs uppercase tracking-wide"
                  style={{ color: "rgba(15,49,68,0.7)" }}
                >
                  Families guided
                </div>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div>
                <div
                  className="text-2xl font-bold"
                  style={{ color: t.navy }}
                >
                  12+ yrs
                </div>
                <div
                  className="text-xs uppercase tracking-wide"
                  style={{ color: "rgba(15,49,68,0.7)" }}
                >
                  Advisory experience
                </div>
              </div>
              <div className="h-10 w-px bg-slate-200 hidden md:block" />
              <div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: t.teal }}
                >
                  Protection • Planning • Growth
                </div>
                <div
                  className="text-xs"
                  style={{ color: "rgba(15,49,68,0.7)" }}
                >
                  All aligned with your real life.
                </div>
              </div>
            </div>
          </div>

          {/* Right column: deep navy card with checklist + CTA */}
          <div className="lg:col-span-5">
            <div
              className="rounded-3xl px-6 sm:px-8 py-7 sm:py-8 shadow-[0_22px_55px_rgba(0,0,0,0.25)] border"
              style={{
                background: `radial-gradient(circle at top left, rgba(247,216,139,0.15), transparent 60%), ${t.navy}`,
                borderColor: "rgba(15,23,42,0.55)",
              }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${t.goldLight}, ${t.goldDark})`,
                  }}
                />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-100">
                  What we’ll cover together
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                A focused 15-minute clarity session.
              </h2>
              <p className="text-sm sm:text-base text-slate-200 mb-5">
                Understand where you stand, what’s missing in your financial
                protection, and the immediate steps to move forward.
              </p>

              <ul className="space-y-3 text-sm text-slate-100 mb-6">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 mt-0.5 text-emerald-300" />
                  <span>Review of risk cover and existing policies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 mt-0.5 text-amber-300" />
                  <span>Goal-based investment direction and priorities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Calculator className="w-5 h-5 mt-0.5 text-sky-300" />
                  <span>Clear, written next steps tailored to your situation.</span>
                </li>
              </ul>

              <button
                onClick={handleBook}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-transform"
                style={{
                  background: `linear-gradient(135deg, ${t.goldLight}, ${t.goldDark})`,
                  color: t.navy,
                }}
              >
                <Calculator className="w-5 h-5 mr-2" />
                Book Your Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Cards section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div
                className="h-8 w-8 rounded-xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${t.goldLight}, ${t.goldDark})`,
                }}
              >
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span
                className="text-sm font-semibold uppercase tracking-[0.18em]"
                style={{ color: t.navy }}
              >
                How we support you
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, i) => (
              <article
                key={i}
                className="group relative flex flex-col rounded-2xl p-7 bg-white/95 border transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(12,39,74,0.15)]"
                style={{
                  borderColor: t.subtleBorder,
                }}
              >
                <div
                  className="w-14 h-14 mb-5 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${t.teal}, ${t.navy})`,
                  }}
                >
                  <card.Icon className="w-7 h-7 text-white" />
                </div>

                <h3
                  className="text-lg font-semibold mb-2 leading-snug"
                  style={{ color: t.text }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: "rgba(15,49,68,0.7)" }}
                >
                  {card.description}
                </p>

                <div
                  className="absolute -bottom-1 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, ${t.goldLight}, ${t.goldDark})`,
                  }}
                />
              </article>
            ))}
          </div>
        </section>

        {/* Feature strip */}
        <section
          className="rounded-2xl px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{
            background: `radial-gradient(600px 260px at 0% 0%, ${t.goldLight}20, transparent), ${t.surface}`,
            border: `1px solid ${t.subtleBorder}`,
            boxShadow: "0 10px 35px rgba(12,39,74,0.10)",
          }}
        >
          <div className="flex items-start md:items-center gap-4">
            <div
              className="p-3 rounded-2xl shadow"
              style={{
                background: `linear-gradient(135deg, ${t.goldLight}, ${t.goldDark})`,
              }}
            >
              <TrendingUp className="w-7 h-7 text-white" />
            </div>

            <div>
              <h2
                className="text-xl md:text-2xl font-bold mb-2"
                style={{ color: t.text }}
              >
                Let’s analyze your financial game plan.
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: "rgba(15,49,68,0.75)" }}
              >
                Get a personalized evaluation of your financial strategy and
                unlock insights that bring long-term clarity and confidence.
              </p>
            </div>
          </div>

          <button
            onClick={handleBook}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-transform text-sm sm:text-base"
            style={{
              background: `linear-gradient(135deg, ${t.teal}, ${t.navy})`,
              color: "#f9fafb",
            }}
          >
            <Calculator className="w-5 h-5 mr-2" />
            Book a Consultation
          </button>
        </section>

        {/* Mini feature row */}
        <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            {
              title: "Trusted Advisors",
              desc: "Decades of experience guiding individuals and families with honesty and precision.",
              icon: (
                <Users
                  className="w-8 h-8 mx-auto mb-3"
                  style={{ color: t.teal }}
                />
              ),
            },
            {
              title: "Tailored Solutions",
              desc: "Every plan is built uniquely around your long-term personal goals.",
              icon: (
                <CheckCircle
                  className="w-8 h-8 mx-auto mb-3"
                  style={{ color: t.goldDark }}
                />
              ),
            },
            {
              title: "Data-Driven Approach",
              desc: "We look at real numbers, real projections, and real-life variables.",
              icon: (
                <Presentation
                  className="w-8 h-8 mx-auto mb-3"
                  style={{ color: t.navy }}
                />
              ),
            },
            {
              title: "Transparent Guidance",
              desc: "No hidden agendas—just clear, actionable, and trustworthy advice.",
              icon: (
                <FileText
                  className="w-8 h-8 mx-auto mb-3"
                  style={{ color: t.goldLight }}
                />
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              style={{ borderColor: t.subtleBorder }}
            >
              {item.icon}
              <h3
                className="font-bold mb-2"
                style={{ color: t.text }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(15,49,68,0.75)" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

// default export keeps same name
export default HomeVariantA;
