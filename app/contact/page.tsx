import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Share2, Mail, Phone } from "lucide-react";

const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdFnIcgHxjwAEBOyby-hPJq34duQGE-3bBqT1DIbFm6wa9bnQ/viewform?embedded=true";

export const metadata: Metadata = {
  title: "Contact Lerk Foods | Plan Your Event",
  description:
    "Plan your catering event with Lerk Foods. Share your event details through the embedded enquiry form.",
};

export default function ContactPage() {
  return (
    <main
      id="plan-event"
      className="contact-page-fade min-h-screen bg-[#5B0E2D] px-4 py-8 text-[#fff4cf] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between gap-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f4d28a] transition hover:text-[#fff9bc]"
          >
            <ArrowLeft size={16} />
            Home
          </Link>
          <span className="font-heading text-2xl text-[#fff9bc]">Lerk Foods</span>
        </header>

        <section className="pb-10 pt-12 text-center md:pb-14 md:pt-16">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#f4d28a]">
            Plan Your Event
          </p>
          <h1 className="luxury-heading mx-auto max-w-4xl text-5xl text-[#fff9bc] md:text-7xl">
            Let&apos;s Create an Experience
            <span className="gold-gradient-text mt-2 block">Your Guests Will Remember.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
            Tell us about your event, guest count, venue, and menu preferences. Our team will get back to you with catering support tailored to the occasion.
          </p>
        </section>

        <section className="mx-auto max-w-[900px] rounded-[24px] bg-[#fffaf0] p-3 shadow-[0_28px_90px_rgba(20,0,8,0.34)] sm:p-5 md:p-7">
          <div className="overflow-hidden rounded-[20px] border border-[#e0ba66]/30 bg-white">
            <iframe
              title="Lerk Foods Event Enquiry Form"
              src={formUrl}
              className="block h-[82vh] min-h-[760px] w-full md:h-[1100px]"
              loading="lazy"
            >
              Loading...
            </iframe>
          </div>
        </section>

        <section className="mx-auto grid max-w-[900px] gap-4 py-10 md:grid-cols-3 md:py-12">
          <a
            href="mailto:hello@lerkfoods.com"
            className="rounded-[20px] border border-[#f4d28a]/24 bg-[#2b0716]/50 p-5 text-center shadow-[0_18px_50px_rgba(20,0,8,0.22)] transition hover:border-[#f4d28a]/50 hover:bg-[#2b0716]/70"
          >
            <Mail className="mx-auto mb-3 text-[#f4d28a]" size={22} />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f4d28a]">Email</p>
            <p className="mt-2 text-sm text-white/78">hello@lerkfoods.com</p>
          </a>
          <a
            href="tel:+919363611265"
            className="rounded-[20px] border border-[#f4d28a]/24 bg-[#2b0716]/50 p-5 text-center shadow-[0_18px_50px_rgba(20,0,8,0.22)] transition hover:border-[#f4d28a]/50 hover:bg-[#2b0716]/70"
          >
            <Phone className="mx-auto mb-3 text-[#f4d28a]" size={22} />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f4d28a]">Phone</p>
            <p className="mt-2 text-sm text-white/78">+91 93636 11265</p>
          </a>
          <a
            href="https://www.instagram.com/lerkfoods"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[20px] border border-[#f4d28a]/24 bg-[#2b0716]/50 p-5 text-center shadow-[0_18px_50px_rgba(20,0,8,0.22)] transition hover:border-[#f4d28a]/50 hover:bg-[#2b0716]/70"
          >
            <Share2 className="mx-auto mb-3 text-[#f4d28a]" size={22} />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f4d28a]">Instagram</p>
            <p className="mt-2 text-sm text-white/78">@lerkfoods</p>
          </a>
        </section>
      </div>
    </main>
  );
}
