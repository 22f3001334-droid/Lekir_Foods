"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const enter = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const cascade = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const tx = { duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

const tilePattern = [
  "feature",
  "standard",
  "wide",
  "standard",
  "tall",
  "standard",
  "large",
  "wide",
  "standard",
  "standard",
  "tall",
  "wide",
] as const;

type TileSize = (typeof tilePattern)[number];

const tileClasses: Record<TileSize, string> = {
  feature: "col-span-2 row-span-2 md:col-span-3 md:row-span-2",
  large: "col-span-2 row-span-2",
  tall: "col-span-1 row-span-2",
  wide: "col-span-2 row-span-1",
  standard: "col-span-1 row-span-1",
};

const galleryImages = Array.from({ length: 45 }, (_, index) => {
  const imageNumber = String(index + 1).padStart(2, "0");

  return {
    src: `/images/gallery/selected/gallery-selected-${imageNumber}.webp`,
    alt: `Lerk Foods catered event gallery image ${index + 1}`,
    size: tilePattern[index % tilePattern.length],
  };
});

function GalleryIntro() {
  return (
    <section className="bg-[#F5F0E8] px-8 pb-16 pt-16 md:pb-20 md:pt-24">
      <div className="mx-auto max-w-[1180px]">
        <motion.div initial="hidden" animate="visible" variants={cascade}>
          <motion.p
            variants={enter}
            transition={tx}
            className="mb-3 text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-[#5B0E2D]"
          >
            Our Work
          </motion.p>
          <motion.h1
            variants={enter}
            transition={tx}
            className="font-logo text-[clamp(3.2rem,8vw,7.5rem)] font-light leading-[0.92] tracking-[-0.01em] text-[#1C0A0F]"
          >
            The <span className="italic text-[#5B0E2D]">Gallery</span>
          </motion.h1>
          <motion.p
            variants={enter}
            transition={tx}
            className="mt-6 max-w-xl text-[0.95rem] leading-[1.9] text-[#3A1F14]/75"
          >
            A look at the weddings, banquets, and gatherings we&apos;ve had the
            privilege of catering across Chennai.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryGrid() {
  return (
    <section className="bg-black px-4 py-6 sm:px-6 md:px-8 md:py-8">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={cascade}
          className="grid grid-flow-dense auto-rows-[8.5rem] grid-cols-2 gap-3 sm:auto-rows-[10rem] md:grid-cols-4 md:gap-4 lg:grid-cols-6 lg:auto-rows-[11.5rem]"
        >
          {galleryImages.map((img) => (
            <motion.div
              key={img.src}
              variants={enter}
              transition={tx}
              className={`relative overflow-hidden rounded-[8px] bg-white/5 ${tileClasses[img.size]}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 18vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/10 ring-1 ring-inset ring-white/10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function GalleryCTA() {
  return (
    <section className="bg-[#5B0E2D] px-8 py-20 md:py-28">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cascade}
          className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <motion.p
              variants={enter}
              transition={tx}
              className="mb-4 text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-[#C9A84C]/70"
            >
              Get In Touch
            </motion.p>
            <motion.h2
              variants={enter}
              transition={tx}
              className="font-logo text-[clamp(2.6rem,6vw,5.8rem)] font-light leading-[0.92] text-[#F5F0E8]"
            >
              Let&apos;s Cook
              <br />
              <span className="italic text-[#C9A84C]">Something Together.</span>
            </motion.h2>
          </div>

          <motion.div variants={enter} transition={tx} className="lg:pb-2">
            <Link
              href="/contact#plan-event"
              className="block border border-[#F5F0E8]/40 px-10 py-4 text-center text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#F5F0E8] transition-all duration-300 hover:bg-[#F5F0E8] hover:text-[#5B0E2D] lg:whitespace-nowrap"
            >
              Plan Your Event
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function GalleryPage() {
  return (
    <>
      <SiteNav />
      <main className="text-[#1C0A0F]">
        <GalleryIntro />
        <GalleryGrid />
        <GalleryCTA />
      </main>
      <SiteFooter />
    </>
  );
}
