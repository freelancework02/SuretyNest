// ContactSection.GoldDeep.jsx (SuretyNest themed)
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, Phone, Calendar, ShieldCheck } from "lucide-react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Logo from "../../assets/Logo/logobg.png";

// SuretyNest palette
const GOLD_START = "#f7d88b";
const GOLD_END = "#c9943b";
const NAVY = "#0c274a";
const TEAL = "#137a6c";
const SURFACE = "#ffffff";

const WHATSAPP_GREEN = "#25D366";
const WHATSAPP_DARK = "#128C7E";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",

    message: "",
    company: "", // honeypot
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name (at least 2 characters).";
    }
    const email = String(formData.email || "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    if (!emailOk) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone || formData.phone.length < 8) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.message || formData.message.trim().length < 12) {
      newErrors.message = "Tell us a bit more (at least 12 characters).";
    }
    if (formData.company && formData.company.trim().length > 0) {
      newErrors.company = "Spam detected.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      msg: formData.message,
    };

    try {
      const response = await fetch("https://suretynest.com/api/contact/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("🎉 Thanks — your message has been sent.");
        setFormData({ name: "", email: "", phone: "", message: "", company: "" });
        setErrors({});
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      toast.error("❌ Could not send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openCalendly = () => {
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
      aria-labelledby="contact-heading"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top, #f5f5f7 0%, #ffffff 45%, #f5f6f9 100%)",
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} />

      {/* subtle top highlight band */}
      <div
        aria-hidden
        className="w-full"
        style={{
          height: 120,
          background:
            "linear-gradient(90deg, rgba(254, 254, 254, 0.18), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16 lg:pb-20 -mt-24">
        {/* header row with logo + copy */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
          <div className="flex items-start gap-4">
            {/* logo block */}
            {/* <div className="flex flex-col items-center">
              <div
                className="h-16 w-16 rounded-3xl flex items-center justify-center shadow-xl mb-2"
                style={{
                  background: `linear-gradient(135deg, ${GOLD_START}, ${GOLD_END})`,
                }}
              >
                <img
                  src={Logo}
                  alt="SuretyNest logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <span
                className="text-[11px] uppercase tracking-[0.24em] font-semibold"
                style={{ color: NAVY }}
              >
                SuretyNest
              </span>
              <span
                className="text-[11px] tracking-[0.18em] uppercase"
                style={{ color: TEAL }}
              >
                Financial Solutions
              </span>
            </div> */}

            <div className="ml-1">
              <div className="inline-flex items-center gap-2 mb-2">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full shadow-sm"
                  style={{
                    background: `linear-gradient(120deg, ${GOLD_START}, ${GOLD_END})`,
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 17h4v4H3v-4zM10 10h4v11h-4V10zM17 4h4v17h-4V4z"
                      fill={NAVY}
                    />
                  </svg>
                </span>
                <span
                  className="text-xs uppercase tracking-[0.2em] font-semibold"
                  style={{ color: NAVY }}
                >
                  Contact & Support
                </span>
              </div>

              <h2
                id="contact-heading"
                className="text-3xl md:text-4xl font-extrabold"
                style={{ color: NAVY }}
              >
                Let’s talk about your{" "}
                <span
                  style={{
                    background: `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  financial nest.
                </span>
              </h2>

              <p
                className="mt-3 text-base max-w-xl"
                style={{ color: "rgba(15,49,68,0.8)" }}
              >
                Whether you prefer a short call, a detailed email, or a quick
                WhatsApp message, we’ll help you get clear on your next step.
              </p>
            </div>
          </div>

          {/* reassurance pill */}
          <div className="ml-auto flex items-center gap-3">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium shadow-sm text-sm"
              style={{
                background: SURFACE,
                border: "1px solid rgba(12,39,74,0.08)",
                color: NAVY,
              }}
            >
              <ShieldCheck size={16} style={{ color: TEAL }} />
              Typically respond within 24 hours
            </div>
          </div>
        </div>

        {/* main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: contact info / actions card with navy background */}
          <aside className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* navy base */}
              <div
                className="p-6 md:p-7"
                style={{
                  background: `radial-gradient(circle at top left, rgba(247,216,139,0.25), transparent 55%), ${NAVY}`,
                }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  Ways to reach SuretyNest
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: "rgba(226,232,240,0.9)" }}
                >
                  Choose what’s easiest for you — we’ll guide you from there.
                </p>

                {/* email / phone */}
                <div className="space-y-3 text-sm text-white/90 mb-5">
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <a
                      href="mailto:Contact@suretynest.com"
                      className="hover:underline"
                    >
                      Contact@suretynest.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <a href="tel:+15089696999" className="hover:underline">
                      +1 (508) 969-6999
                    </a>
                  </div>
                </div>

                {/* actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <a
                    href="mailto:Contact@suretynest.com"
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-white hover:bg-white/16 transition"
                    aria-label="Email us"
                  >
                    <Mail size={16} />
                    Email
                  </a>

                  <button
                    onClick={openCalendly}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 bg-white text-sm font-semibold"
                    aria-label="Book a call"
                    style={{ color: NAVY }}
                  >
                    <Calendar size={16} />
                    Book a Call
                  </button>
                </div>

                <a
                  href="https://api.whatsapp.com/send?phone=15089696999&text=Hello!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 rounded-xl px-4 py-3 font-semibold text-white transition"
                  style={{
                    background: `linear-gradient(135deg, ${WHATSAPP_GREEN}, ${WHATSAPP_DARK})`,
                    boxShadow: "0 10px 26px rgba(37,211,102,0.45)",
                  }}
                >
                  <FaWhatsapp className="w-5 h-5 text-white" />
                  Message us on WhatsApp
                </a>

                {/* hours strip */}
                <div className="mt-5 rounded-2xl bg-white/5 border border-white/15 p-4 text-xs text-white/85">
                  <div className="font-semibold mb-1">
                    SuretyNest Financial Solutions
                  </div>
                  <div>Mon – Fri: 6:00 pm – 9:00 pm</div>
                  <div>Sat & Sun: Available throughout the day</div>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT: form card */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div
              className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border"
              style={{ borderColor: "rgba(12,39,74,0.08)" }}
            >
              <h3
                className="text-xl md:text-2xl font-bold text-center mb-1"
                style={{ color: NAVY }}
              >
                Send us a message
              </h3>
              <p
                className="text-center text-sm md:text-base mb-6"
                style={{ color: "rgba(15,49,68,0.75)" }}
              >
                Share a bit about your situation and we’ll reply with clear,
                practical next steps.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
                aria-describedby="form-errors"
              >
                {/* honeypot */}
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: NAVY }}
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    className={`w-full p-3 rounded-lg border outline-none focus:ring-2 transition ${errors.name
                      ? "border-red-300 focus:ring-red-400"
                      : "border-gray-200 focus:ring-teal-500/40"
                      }`}
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="text-red-600 text-sm mt-1"
                      role="alert"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: NAVY }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className={`w-full p-3 rounded-lg border outline-none focus:ring-2 transition ${errors.email
                      ? "border-red-300 focus:ring-red-400"
                      : "border-gray-200 focus:ring-teal-500/40"
                      }`}
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="text-red-600 text-sm mt-1"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: NAVY }}
                  >
                    Phone Number
                  </label>

                  <PhoneInput
                    country={"in"}
                    onlyCountries={["us", "in", "ca"]}
                    value={formData.phone}
                    onChange={(value) =>
                      setFormData((s) => ({ ...s, phone: value }))
                    }
                    inputProps={{
                      name: "phone",
                      required: true,
                    }}
                    inputClass="!w-full !p-3 !rounded-lg !border !border-gray-200 focus:!ring-2 focus:!ring-teal-500/40 !outline-none"
                  />

                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: NAVY }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help?"
                    className={`w-full p-3 rounded-lg min-h-[140px] border outline-none focus:ring-2 resize-y transition ${errors.message
                      ? "border-red-300 focus:ring-red-400"
                      : "border-gray-200 focus:ring-teal-500/40"
                      }`}
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="text-red-600 text-sm mt-1"
                      role="alert"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${isSubmitting ? "bg-gray-300 cursor-not-allowed" : ""
                    }`}
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  style={{
                    background: isSubmitting
                      ? undefined
                      : `linear-gradient(90deg, ${GOLD_START}, ${GOLD_END})`,
                    color: NAVY,
                    boxShadow: isSubmitting
                      ? "none"
                      : "0 14px 36px rgba(201,148,59,0.28)",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/60 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <p
                  id="form-errors"
                  className="text-xs text-center"
                  style={{ color: "rgba(15,49,68,0.7)" }}
                  aria-live="polite"
                >
                  We respect your privacy. Your details stay with SuretyNest.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* footer note */}
        <div
          className="mt-12 text-center text-sm"
          style={{ color: "rgba(15,49,68,0.7)" }}
        >
          © {new Date().getFullYear()} SuretyNest Financial Solutions. All
          rights reserved.
        </div>
      </div>
    </section>
  );
}
