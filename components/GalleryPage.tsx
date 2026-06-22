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

const galleryImages = [
  { src: "/images/wedding.png", alt: "Wedding catering by Lerk Foods", tall: true },
  { src: "/images/plated.png", alt: "Plated fine dining presentation" },
  { src: "/images/corporate.png", alt: "Corporate event catering" },
  { src: "/images/birthday.png", alt: "Birthday celebration catering" },
  { src: "/images/betrothal.png", alt: "Betrothal ceremony catering", tall: true },
  { src: "/images/festive.png", alt: "Festive occasion spread" },
  { src: "/images/outdoor.png", alt: "Outdoor catered event" },
  { src: "/images/premium_presentation.png", alt: "Premium food presentation" },
  { src: "/images/dining.png", alt: "Elegant dining setup", tall: true },
  { src: "/images/conference.png", alt: "Conference catering setup" },
  { src: "/images/inroom.png", alt: "In-room dining service" },
  { src: "/images/meeting.png", alt: "Business meeting catering" },
];

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
    <section className="bg-[#F5F0E8] px-8 pb-24 md:pb-32">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={cascade}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6"
        >
          {galleryImages.map((img) => (
            <motion.div
              key={img.src}
              variants={enter}
              transition={tx}
              className={`relative overflow-hidden ${
                img.tall ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
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
