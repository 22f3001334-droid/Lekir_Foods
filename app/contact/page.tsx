import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact Lerk Foods | Plan Your Event",
  description:
    "Plan your catering event with Lerk Foods. Share your event details and our team will get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── NAV ──────────────────────────────────────────────────────── */}
      <header
        id="plan-event"
        className="sticky top-0 z-50 border-b border-champagne/10 bg-midnight/95 backdrop-blur-xl"
      >
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
              { label: "Home",     href: "/"          },
              { label: "About",    href: "/about"     },
              { label: "Services", href: "/#services" },
              { label: "Menus",    href: "/#menus"    },
              { label: "Blog",     href: "/blog"      },
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

      {/* ── CONTACT FORM ─────────────────────────────────────────────── */}
      <ContactSection />

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <SiteFooter />
    </>
  );
}
