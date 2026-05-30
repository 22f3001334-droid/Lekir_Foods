import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Share2 } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";

const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdFnIcgHxjwAEBOyby-hPJq34duQGE-3bBqT1DIbFm6wa9bnQ/viewform?embedded=true";

export const metadata: Metadata = {
  title: "Contact Lerk Foods | Plan Your Event",
  description:
    "Plan your catering event with Lerk Foods. Share your event details and our team will get back to you.",
};

export default function ContactPage() {
  return (
    <main id="plan-event" className="text-[#1C0A0F]">

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-champagne/10 bg-midnight/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 max-w-[1180px] items-center justify-between gap-6 px-6">
          <Link href="/" aria-label="Lerk Foods home">
            <Image
              src="/images/lerk-gold-2.png"
              alt="Lerk Foods"
              width={128}
              height={128}
              className="h-24 w-24 object-contain"
              priority
            />
          </Link>
          <nav className="hidden items-center gap-7 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/68 lg:flex">
            {[
              { label: "Home",     href: "/"                  },
              { label: "About",    href: "/about"             },
              { label: "Services", href: "/#services"         },
              { label: "Menus",    href: "/#menus"            },
              { label: "Blog",     href: "/blog"              },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className="transition hover:text-champagne">
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact#plan-event"
            className="hidden border border-champagne/38 px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-champagne transition hover:bg-champagne/10 lg:block"
          >
            Plan Your Event
          </Link>
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[62vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Lerk Foods luxury catering experience"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1015]/55 via-[#0f1015]/30 to-[#0f1015]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-champagne/80">
            Get In Touch
          </p>
          <h1 className="font-logo text-[clamp(3rem,7vw,6.5rem)] font-light leading-[1.05] text-[#F5F0E8]">
            Hello.
          </h1>
          <p className="mt-3 font-logo text-[clamp(1.4rem,3.5vw,3rem)] font-light italic leading-[1.2] text-[#F5F0E8]/85">
            Let&apos;s plan your next event together.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ──────────────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[1fr_2.2fr] lg:gap-20">

          {/* Left – contact details */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="mb-6 flex h-11 w-11 items-center justify-center border border-[#5B0E2D]/30">
              <Mail size={20} className="text-[#5B0E2D]" />
            </div>

            <h2 className="mb-5 font-logo text-[1.7rem] font-light leading-[1.25] text-[#1C0A0F]">
              For event bookings
              <br />
              and catering enquiries:
            </h2>

            <div className="space-y-4">
              <a
                href="mailto:lerkfoods@gmail.com"
                className="flex items-center gap-3 text-[0.88rem] font-semibold text-[#5B0E2D] underline decoration-[#5B0E2D]/30 underline-offset-4 transition hover:decoration-[#5B0E2D]"
              >
                lerkfoods@gmail.com
              </a>

              <a
                href="tel:+919363611265"
                className="flex items-center gap-3 text-[0.82rem] text-[#3A1F14]/60 transition hover:text-[#5B0E2D]"
              >
                <Phone size={14} className="shrink-0" />
                +91 93636 11265
              </a>

              <a
                href="https://www.instagram.com/lerkfoods"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[0.82rem] text-[#3A1F14]/60 transition hover:text-[#5B0E2D]"
              >
                <Share2 size={14} className="shrink-0" />
                @lerkfoods
              </a>
            </div>

            <div className="mt-8 h-px bg-[#1C0A0F]/10" />
            <p className="mt-6 text-[0.78rem] leading-[1.8] text-[#3A1F14]/50">
              Or fill out the enquiry form and our team will get back to you
              with catering support tailored to your occasion.
            </p>
          </div>

          {/* Right – embedded form */}
          <div>
            <h3 className="mb-1 font-logo text-[1.9rem] font-light text-[#1C0A0F]">
              Plan Your Event
            </h3>
            <div className="mb-6 h-px bg-[#5B0E2D]/20" />

            <div className="overflow-hidden border border-[#1C0A0F]/8 bg-white">
              <iframe
                title="Lerk Foods Event Enquiry Form"
                src={formUrl}
                className="block min-h-[760px] w-full md:min-h-[1100px]"
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>
          </div>

        </div>
      </section>

      <SiteFooter />

    </main>
  );
}
