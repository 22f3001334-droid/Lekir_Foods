"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";

const contactRows = [
  {
    label: "PHONE",
    value: "+91 93636 11265",
    href: "tel:+919363611265",
    Icon: Phone,
  },
  {
    label: "EMAIL",
    value: "lerkfoods@gmail.com",
    href: "mailto:lerkfoods@gmail.com",
    Icon: Mail,
  },
  {
    label: "LOCATION",
    value: "Kans One Hotel, 12 GST Road, Pallavaram, Chennai – 600043",
    href: null,
    Icon: MapPin,
  },
];

const eventTypes = [
  "Wedding",
  "Birthday",
  "Betrothal",
  "Conference",
  "Outdoor Catering",
  "Corporate Meeting",
  "In-Room Dining",
  "Other",
];

const inputBase =
  "w-full rounded-none border border-[#C9A84C]/22 bg-[#16151d] px-5 py-4 text-[0.88rem] text-white/80 placeholder:text-white/30 transition focus:border-[#C9A84C]/60 focus:outline-none";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function set(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Google Sheets integration — next step
    setSubmitted(true);
  }

  return (
    <section className="bg-midnight px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-[1100px] gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24">

        {/* ── LEFT: heading + contact info ─────────────────────────── */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h1 className="font-logo text-[clamp(3rem,6vw,5.5rem)] font-light leading-[1.0] text-white">
            Contact Us
          </h1>

          {/* gold star + rule */}
          <div className="mt-5 mb-7 flex items-center gap-3">
            <span className="text-[#C9A84C]">✦</span>
            <div className="h-px w-14 bg-[#C9A84C]/50" />
          </div>

          <p className="mb-10 text-[0.9rem] leading-[1.85] text-white/55">
            We&apos;d love to hear from you. Whether you have a question, need
            a quote, or want to plan your next event, our team is here to help.
          </p>

          <div className="space-y-0 divide-y divide-[#C9A84C]/12">
            {contactRows.map(({ label, value, href, Icon }) => (
              <div key={label} className="flex items-start gap-5 py-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C9A84C]/35">
                  <Icon size={18} className="text-[#C9A84C]" />
                </div>
                <div>
                  <p className="mb-1 text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-[#C9A84C]">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-[0.88rem] leading-[1.6] text-white/70 transition hover:text-white"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[0.88rem] leading-[1.6] text-white/70">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: form ──────────────────────────────────────────── */}
        <div>
          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A84C]/40">
                <ShieldCheck size={28} className="text-[#C9A84C]" />
              </div>
              <h2 className="mb-3 font-logo text-[2rem] font-light text-white">
                Message Received
              </h2>
              <p className="text-[0.88rem] leading-[1.8] text-white/50">
                Thank you for reaching out. Our team will get back to you
                within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={set("name")}
                  className={inputBase}
                />
                <User
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C9A84C]/50"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={set("email")}
                  className={inputBase}
                />
                <Mail
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C9A84C]/50"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Your Phone (Optional)"
                  value={form.phone}
                  onChange={set("phone")}
                  className={inputBase}
                />
                <Phone
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C9A84C]/50"
                />
              </div>

              {/* Event Type */}
              <div className="relative">
                <select
                  required
                  value={form.eventType}
                  onChange={set("eventType")}
                  className={`${inputBase} cursor-pointer appearance-none ${
                    form.eventType ? "text-white/80" : "text-white/30"
                  }`}
                >
                  <option value="" disabled>
                    Event Type
                  </option>
                  {eventTypes.map((t) => (
                    <option key={t} value={t} className="bg-[#16151d] text-white">
                      {t}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C9A84C]/50"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={set("message")}
                  className={`${inputBase} resize-none`}
                />
                <MessageSquare
                  size={16}
                  className="pointer-events-none absolute bottom-4 right-4 text-[#C9A84C]/50"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 gold-gradient-bg py-4 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-midnight transition hover:brightness-110"
              >
                Send Message
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </button>

              {/* Reassurance */}
              <p className="flex items-center justify-center gap-2 pt-1 text-[0.68rem] text-white/35">
                <ShieldCheck size={13} />
                We typically respond within 24 hours.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
