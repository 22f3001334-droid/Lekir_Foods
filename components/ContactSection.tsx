"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";

const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ?? "";

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
  "w-full rounded-none border border-[#C9A84C]/22 bg-[#16151d] px-5 py-4 text-[0.88rem] text-white/80 placeholder:text-white/30 transition focus:border-[#C9A84C]/60 focus:outline-none disabled:opacity-50";

type ToastType = "success" | "error";

interface Toast {
  type: ToastType;
  message: string;
}

function ToastBanner({ toast, onDismiss }: { toast: Toast; onDismiss: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 5000);
    return () => clearTimeout(t);
  }, [onDismiss]);

  const isSuccess = toast.type === "success";

  return (
    <div
      role="alert"
      className={`fixed bottom-6 left-1/2 z-50 flex w-[calc(100%-3rem)] max-w-md -translate-x-1/2 items-start gap-3 px-5 py-4 shadow-xl transition-all duration-300 ${
        isSuccess
          ? "border border-[#C9A84C]/30 bg-[#16151d]"
          : "border border-red-500/30 bg-[#1a0f0f]"
      }`}
    >
      {isSuccess ? (
        <CheckCircle size={18} className="mt-0.5 shrink-0 text-[#C9A84C]" />
      ) : (
        <AlertCircle size={18} className="mt-0.5 shrink-0 text-red-400" />
      )}
      <p className={`text-[0.82rem] leading-[1.6] ${isSuccess ? "text-white/80" : "text-red-300"}`}>
        {toast.message}
      </p>
    </div>
  );
}

const emptyForm = { name: "", email: "", phone: "", eventType: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Partial<typeof emptyForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);

  function set(field: keyof typeof emptyForm) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
    };
  }

  function validate(): boolean {
    const next: Partial<typeof emptyForm> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.eventType) next.eventType = "Please select an event type.";
    if (!form.message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setToast(null);

    try {
      const body = new URLSearchParams({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        eventType: form.eventType,
        message: form.message.trim(),
      });

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      setForm(emptyForm);
      setErrors({});
      setToast({
        type: "success",
        message: "Message sent! Our team will get back to you within 24 hours.",
      });
    } catch {
      setToast({
        type: "error",
        message: "Something went wrong. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {toast && <ToastBanner toast={toast} onDismiss={() => setToast(null)} />}

      <section className="bg-midnight px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24">

          {/* ── LEFT: heading + contact info ────────────────────────── */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h1 className="font-logo text-[clamp(3rem,6vw,5.5rem)] font-light leading-[1.0] text-white">
              Contact Us
            </h1>

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

          {/* ── RIGHT: form ─────────────────────────────────────────── */}
          <form onSubmit={handleSubmit} noValidate className="space-y-4">

            {/* Name */}
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={set("name")}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.name}
                  className={`${inputBase} ${errors.name ? "border-red-500/60" : ""}`}
                />
                <User size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C9A84C]/50" />
              </div>
              {errors.name && <p className="mt-1 text-[0.72rem] text-red-400">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email *"
                  value={form.email}
                  onChange={set("email")}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.email}
                  className={`${inputBase} ${errors.email ? "border-red-500/60" : ""}`}
                />
                <Mail size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C9A84C]/50" />
              </div>
              {errors.email && <p className="mt-1 text-[0.72rem] text-red-400">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                placeholder="Your Phone (Optional)"
                value={form.phone}
                onChange={set("phone")}
                disabled={isSubmitting}
                className={inputBase}
              />
              <Phone size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C9A84C]/50" />
            </div>

            {/* Event Type */}
            <div>
              <div className="relative">
                <select
                  value={form.eventType}
                  onChange={set("eventType")}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.eventType}
                  className={`${inputBase} cursor-pointer appearance-none ${
                    form.eventType ? "text-white/80" : "text-white/30"
                  } ${errors.eventType ? "border-red-500/60" : ""}`}
                >
                  <option value="" disabled>Event Type *</option>
                  {eventTypes.map((t) => (
                    <option key={t} value={t} className="bg-[#16151d] text-white">{t}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C9A84C]/50" />
              </div>
              {errors.eventType && <p className="mt-1 text-[0.72rem] text-red-400">{errors.eventType}</p>}
            </div>

            {/* Message */}
            <div>
              <div className="relative">
                <textarea
                  placeholder="Your Message *"
                  rows={5}
                  value={form.message}
                  onChange={set("message")}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.message}
                  className={`${inputBase} resize-none ${errors.message ? "border-red-500/60" : ""}`}
                />
                <MessageSquare size={16} className="pointer-events-none absolute bottom-4 right-4 text-[#C9A84C]/50" />
              </div>
              {errors.message && <p className="mt-1 text-[0.72rem] text-red-400">{errors.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-3 gold-gradient-bg py-4 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-midnight transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </>
              )}
            </button>

            <p className="flex items-center justify-center gap-2 pt-1 text-[0.68rem] text-white/35">
              <ShieldCheck size={13} />
              We typically respond within 24 hours.
            </p>
          </form>

        </div>
      </section>
    </>
  );
}
