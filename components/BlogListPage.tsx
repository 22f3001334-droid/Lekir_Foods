"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { posts } from "@/lib/blog-data";
import SiteFooter from "@/components/SiteFooter";

const tx = { duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

const enter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cascade = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ── NAV ───────────────────────────────────────────────────────────────────────
function BlogNav() {
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
          {[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: "Menus", href: "/#menus" },
            { label: "Blog", href: "/blog" },
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
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function BlogHero() {
  return (
    <section className="bg-[#F5F0E8] px-8 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cascade}
          className="grid gap-12 lg:grid-cols-[0.52fr_1fr] lg:gap-20"
        >
          {/* Left – oversized heading */}
          <motion.div variants={enter} transition={tx} className="flex flex-col items-start">
            <p className="mb-5 text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-[#5B0E2D]">
              Our Writing
            </p>
            <h1 className="font-logo text-[clamp(4.5rem,10vw,9.5rem)] font-light leading-[0.9] tracking-[-0.01em] text-[#1C0A0F]">
              Journal
            </h1>
          </motion.div>

          {/* Right – subtitle */}
          <motion.div variants={enter} transition={tx} className="flex items-end pb-2">
            <p className="font-logo text-[1.3rem] italic leading-[1.5] text-[#1C0A0F]/80 md:text-[1.45rem]">
              Perspectives on hospitality, food, and the art of occasion.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── BLOG GRID ─────────────────────────────────────────────────────────────────
function BlogGrid() {
  return (
    <section className="bg-[#F5F0E8] px-8 pb-28 pt-4">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cascade}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.div
              key={post.slug}
              variants={enter}
              transition={tx}
              className="group flex flex-col border border-[#1C0A0F]/8 bg-white transition-all duration-300 hover:border-[#5B0E2D]/30"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col flex-1">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-3 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#5B0E2D]">
                    {post.category}
                  </p>

                  <h2 className="mb-3 font-logo text-[1.4rem] font-light leading-[1.25] text-[#1C0A0F]">
                    {post.title}
                  </h2>

                  <p className="mb-5 flex-1 text-[0.78rem] leading-[1.85] text-[#1C0A0F]/60">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between text-[0.68rem] text-[#1C0A0F]/45">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="mt-4 border-t border-[#1C0A0F]/8 pt-4">
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#5B0E2D] transition hover:text-[#330013]">
                      Read Article →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function BlogListPage() {
  return (
    <main className="text-[#1C0A0F]">
      <BlogNav />
      <BlogHero />
      <BlogGrid />
      <SiteFooter />
    </main>
  );
}
