"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home",     href: "/"          },
  { label: "About",    href: "/about"     },
  { label: "Services", href: "/#services" },
  { label: "Menus",    href: "/#menus"    },
  { label: "Gallery",  href: "/gallery"   },
  { label: "Blog",     href: "/blog"      },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
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
          {links.map(({ label, href }) => (
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

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="inline-flex size-11 items-center justify-center border border-champagne/38 text-champagne lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-champagne/10 bg-midnight/96 lg:hidden"
          >
            <div className="mx-auto grid max-w-[1180px] gap-1 px-6 py-5">
              {links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="px-2 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/72 transition hover:text-champagne"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact#plan-event"
                className="mt-3 bg-champagne/10 px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-champagne"
                onClick={() => setOpen(false)}
              >
                Plan Your Event
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
