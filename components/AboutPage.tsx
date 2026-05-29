"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

// ── NAV ───────────────────────────────────────────────────────────────────────
function AboutNav() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Menus", href: "/#menus" },
    { label: "Contact", href: "/contact#plan-event" },
  ];

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
      </div>
    </header>
  );
}

// ── SECTION 1 · HERO EDITORIAL ────────────────────────────────────────────────
function HeroEditorial() {
  return (
    <section className="bg-[#F7F1EA] px-6 py-24 md:py-32 lg:py-44">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-14 h-px bg-[#5B0E2D]/18" />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-28">
          {/* Left – heading */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col justify-end"
          >
            <motion.p
              variants={fadeUp}
              className="mb-7 text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#5B0E2D]"
            >
              Our Story
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-logo text-[clamp(5.5rem,12vw,11.5rem)] font-semibold leading-[0.86] tracking-[-0.02em] text-[#1C0A0F]"
            >
              About
              <br />
              <span className="italic text-[#5B0E2D]">Lekir</span>
            </motion.h1>
            <motion.div
              variants={fadeIn}
              className="mt-12 h-px w-14 bg-[#C9A84C]"
            />
          </motion.div>

          {/* Right – editorial text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col justify-center pt-6 lg:pt-20"
          >
            <motion.p
              variants={fadeUp}
              className="mb-8 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#5B0E2D]/60"
            >
              Chennai &nbsp;·&nbsp; Kans One Hotel, Pallavaram
            </motion.p>

            <motion.div
              variants={stagger}
              className="space-y-6 text-[1.05rem] leading-[1.95] text-[#2C1B0E]/75"
            >
              <motion.p variants={fadeUp}>
                Lekir Foods was built around a single, enduring belief — that the
                act of feeding people well is among the most meaningful things a
                kitchen can do. Every event we serve, every plate we set, every
                table we dress is guided by this conviction.
              </motion.p>
              <motion.p variants={fadeUp}>
                We operate from the heart of Kans One Hotel in Pallavaram,
                Chennai — a position that gives us both the infrastructure of a
                professional kitchen and the warmth of genuine hospitality. Our
                catering spans weddings, corporate events, birthdays, and private
                gatherings — each approached with the same rigour and care.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="font-logo text-[1.45rem] italic leading-[1.6] text-[#5B0E2D]"
              >
                "Lekir is not defined by the volume of events we serve. It is
                defined by the quality of each one."
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-20 h-px bg-[#5B0E2D]/10" />
      </div>
    </section>
  );
}

// ── SECTION 2 · CINEMATIC BAND ────────────────────────────────────────────────
function CinematicBand() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeIn}
      className="relative h-[58vh] min-h-[380px] w-full overflow-hidden md:h-[75vh]"
    >
      <Image
        src="/images/event_experience.png"
        alt="Lekir Foods event experience"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C0A0F]/50 via-[#1C0A0F]/20 to-[#1C0A0F]/60" />
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2, ease }}
          className="font-logo text-[clamp(1.6rem,4.5vw,3.8rem)] font-medium italic tracking-wide text-[#F7F1EA]/92"
        >
          Every celebration deserves to be elevated.
        </motion.p>
      </div>
    </motion.div>
  );
}

// ── SECTION 2B · MOODBOARD ────────────────────────────────────────────────────
const moodImages = [
  { src: "/images/wedding.png",              alt: "Wedding catering",        h: "h-[440px]", nudge: "lg:translate-y-0"   },
  { src: "/images/quality.png",              alt: "Food quality",            h: "h-[360px]", nudge: "lg:translate-y-10"  },
  { src: "/images/menus.png",                alt: "Curated menus",           h: "h-[510px]", nudge: "lg:-translate-y-4"  },
  { src: "/images/plated.png",               alt: "Plated presentation",     h: "h-[380px]", nudge: "lg:translate-y-14"  },
  { src: "/images/premium_presentation.png", alt: "Premium presentation",    h: "h-[460px]", nudge: "lg:translate-y-2"   },
];

function Moodboard() {
  return (
    <section className="overflow-hidden bg-[#EDE6DC] py-20 md:py-28">
      <div className="mx-auto mb-14 max-w-[1180px] px-6">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#5B0E2D]"
        >
          The Craft
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="font-logo text-[clamp(2.8rem,6vw,5.8rem)] font-semibold leading-[0.9] text-[#1C0A0F]"
        >
          Curated to the
          <br />
          <span className="italic text-[#5B0E2D]">last detail.</span>
        </motion.h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="flex gap-3 overflow-x-auto px-6 pb-4 scrollbar-none md:gap-4 lg:overflow-visible lg:px-12"
      >
        {moodImages.map((img) => (
          <motion.div
            key={img.src}
            variants={fadeUp}
            className={`relative shrink-0 overflow-hidden ${img.h} ${img.nudge} w-[230px] sm:w-[270px] lg:w-0 lg:flex-1`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 1024px) 270px, 22vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.06]"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// ── SECTION 3 · FOUNDER STORY ─────────────────────────────────────────────────
function FounderStory() {
  return (
    <section className="bg-[#F7F1EA] px-6 py-24 md:py-36">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.08fr] lg:gap-24">

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeIn}
            className="relative min-h-[520px] overflow-hidden lg:min-h-[720px]"
          >
            <Image
              src="/images/dining.png"
              alt="Lekir Foods dining experience"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A0F]/35 via-transparent" />
            {/* floating label */}
            <div className="absolute bottom-8 left-8 border border-[#F7F1EA]/30 bg-[#1C0A0F]/70 px-5 py-3 backdrop-blur-sm">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
                Kans One Hotel · Pallavaram
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="flex flex-col justify-center"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#5B0E2D]"
            >
              Our Kitchen
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-logo text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.93] text-[#1C0A0F]"
            >
              A Kitchen Built
              <br />
              <span className="italic text-[#5B0E2D]">on Conviction</span>
            </motion.h2>

            <motion.div
              variants={stagger}
              className="mt-10 space-y-5 text-[1rem] leading-[1.92] text-[#2C1B0E]/72"
            >
              {[
                "Lekir Foods grew from a conviction that Chennai deserved something different — a catering experience that combined culinary precision with hotel-grade execution, without compromising on warmth or flavour.",
                "Our team was assembled around a shared set of values: excellence without compromise, consistency without rigidity, and hospitality that feels personal even at scale.",
                "The kitchen at Lekir is built on discipline. Recipes are standardised. Ingredients are sourced with intention. Every batch is prepared to hold quality across large guest counts — but behind the systems is something harder to define: a genuine care for the guest that runs through everything we do.",
              ].map((para) => (
                <motion.p key={para.slice(0, 24)} variants={fadeUp}>
                  {para}
                </motion.p>
              ))}
            </motion.div>

            <motion.blockquote
              variants={fadeUp}
              className="mt-10 border-l-2 border-[#5B0E2D] pl-6"
            >
              <p className="font-logo text-[1.55rem] italic leading-[1.5] text-[#5B0E2D]">
                "It is to make every occasion we touch feel curated, considered,
                and extraordinary."
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 4 · BRAND PHILOSOPHY ──────────────────────────────────────────────
const philosophyCards = [
  {
    number: "01",
    title: "Craft",
    body: "Every dish we serve has been tested, refined, and standardised. Not because we believe in repetition — but because we believe in reliability. Our kitchen discipline ensures the first plate and the five hundredth taste the same.",
  },
  {
    number: "02",
    title: "Heritage",
    body: "Our menus are rooted in the culinary traditions of South India, elevated through technique and presented through a contemporary lens. Heritage is not limitation — it is the foundation from which we build.",
  },
  {
    number: "03",
    title: "Experience",
    body: "We measure success not in covers served but in conversations we overhear — guests pausing to appreciate a dish, a host exhaling with relief, a celebration that becomes a memory. That is the Lekir experience.",
  },
];

function PhilosophySection() {
  return (
    <section className="bg-[#120409] px-6 py-24 md:py-36">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mb-18"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#C9A84C]"
          >
            Brand Philosophy
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-logo text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[0.9] text-[#F7F1EA]"
          >
            The values we
            <br />
            <span className="italic text-[#C9A84C]">cook by.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
          className="mt-16 grid md:grid-cols-3 md:divide-x md:divide-[#C9A84C]/12"
        >
          {philosophyCards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              whileHover={{ backgroundColor: "rgba(91,14,45,0.18)" }}
              className="group px-0 py-10 transition-colors duration-500 md:px-12 md:py-0 md:first:pl-0 md:last:pr-0"
            >
              <p className="mb-8 font-logo text-[4.5rem] font-semibold leading-none text-[#C9A84C]/22 transition-colors duration-500 group-hover:text-[#C9A84C]/50">
                {card.number}
              </p>
              <h3 className="mb-5 font-logo text-[2.4rem] font-semibold italic text-[#F7F1EA]">
                {card.title}
              </h3>
              <p className="text-[0.93rem] leading-[1.9] text-[#F7F1EA]/50 transition-colors duration-500 group-hover:text-[#F7F1EA]/70">
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── SECTION 5 · SIGNATURE STATEMENT ──────────────────────────────────────────
function SignatureStatement() {
  return (
    <section className="bg-[#F7F1EA] px-6 py-28 md:py-44">
      <div className="mx-auto max-w-[1180px] text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={stagger}
        >
          <motion.div
            variants={fadeIn}
            className="mx-auto mb-14 h-px w-20 bg-[#5B0E2D]/28"
          />
          <motion.p
            variants={fadeUp}
            className="font-logo text-[clamp(3rem,8.5vw,8rem)] font-medium italic leading-[1.08] tracking-[-0.01em] text-[#1C0A0F]"
          >
            "Food is not
            <br />
            simply prepared.
            <br />
            <span className="text-[#5B0E2D]">It is remembered."</span>
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="mx-auto mt-14 h-px w-20 bg-[#5B0E2D]/28"
          />
        </motion.div>
      </div>
    </section>
  );
}

// ── SECTION 6 · CTA ───────────────────────────────────────────────────────────
function AboutCTA() {
  return (
    <section className="bg-[#5B0E2D] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#C9A84C]/80"
            >
              Get In Touch
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-logo text-[clamp(2.8rem,6.5vw,6rem)] font-semibold leading-[0.92] text-[#F7F1EA]"
            >
              Let&apos;s Cook
              <br />
              <span className="italic text-[#C9A84C]">Something Together.</span>
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} className="lg:pb-3">
            <Link
              href="/contact#plan-event"
              className="block border border-[#F7F1EA]/45 px-10 py-5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#F7F1EA] transition-all duration-300 hover:bg-[#F7F1EA] hover:text-[#5B0E2D] lg:whitespace-nowrap"
            >
              Plan Your Event
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── MINI FOOTER ───────────────────────────────────────────────────────────────
function AboutFooter() {
  return (
    <footer className="bg-[#0D0205] px-6 py-8">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-4 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/28 sm:flex-row">
        <p>© {new Date().getFullYear()} Lerk Foods · Kans One Hotel, Pallavaram, Chennai</p>
        <Link href="/" className="transition hover:text-champagne">
          ← Back to Home
        </Link>
      </div>
    </footer>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main>
      <AboutNav />
      <HeroEditorial />
      <CinematicBand />
      <Moodboard />
      <FounderStory />
      <PhilosophySection />
      <SignatureStatement />
      <AboutCTA />
      <AboutFooter />
    </main>
  );
}
