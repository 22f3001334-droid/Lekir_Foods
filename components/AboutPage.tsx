"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SiteFooter from "@/components/SiteFooter";

const enter = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const soft = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const cascade = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const tx = { duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] };

// ── NAV ───────────────────────────────────────────────────────────────────────
function AboutNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#f4d28a]/20 bg-[#0f1015]/96 text-[#fff4cf] shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
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
        <nav className="hidden items-center gap-7 text-[0.72rem] font-semibold uppercase tracking-[0.18em] lg:flex">
          {[
            { label: "Home",     href: "/"                  },
            { label: "Services", href: "/#services"         },
            { label: "Menus",    href: "/#menus"            },
          ].map(({ label, href }) => (
            <Link key={label} href={href} className="text-[#fff4cf]/78 transition hover:text-[#f4d28a]">
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact#plan-event"
          className="hidden border border-[#f4d28a]/55 px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#f4d28a] transition hover:bg-[#f4d28a]/10 lg:block"
        >
          Plan Your Event
        </Link>
      </div>
    </header>
  );
}

// ── SECTION 1 · EDITORIAL INTRO ───────────────────────────────────────────────
function EditorialIntro() {
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
          <motion.div variants={enter} transition={tx} className="flex items-start">
            <h1 className="font-logo text-[clamp(4.5rem,10vw,9.5rem)] font-light leading-[0.9] tracking-[-0.01em] text-[#1C0A0F]">
              About
              <br />
              Lerk
            </h1>
          </motion.div>

          {/* Right – tagline + two-column body */}
          <motion.div variants={cascade} className="flex flex-col justify-end pb-2">
            <motion.p
              variants={enter}
              transition={tx}
              className="mb-8 font-logo text-[1.3rem] italic leading-[1.5] text-[#1C0A0F]/80 md:text-[1.45rem]"
            >
              A commitment to craft, flavour,
              and the art of occasion.
            </motion.p>

            <motion.div
              variants={cascade}
              className="grid gap-7 text-[0.84rem] leading-[1.95] text-[#3A1F14]/75 md:grid-cols-2"
            >
              <motion.div variants={enter} transition={tx} className="space-y-5">
                <p>
                  Lerk Foods was built on a single conviction — that the act of
                  feeding people well is among the most meaningful things a kitchen
                  can do. Every event we serve, every plate we set, every table we
                  dress is guided by this belief.
                </p>
                <p>
                  We operate from the heart of Kans One Hotel in Pallavaram,
                  Chennai — a position that gives us both the infrastructure of a
                  professional kitchen and the warmth of genuine hospitality.
                  Our catering spans weddings, corporate events, birthdays,
                  and private gatherings — each approached with the same rigour
                  and care.
                </p>
              </motion.div>
              <motion.div variants={enter} transition={tx} className="space-y-5">
                <p>
                  From intimate ceremonies to large-scale banquets, Lerk brings
                  together culinary precision, hotel-level kitchen systems, and a
                  deep respect for the occasions we serve. We are not defined by
                  the volume of events we take on — but by the quality of each one.
                </p>
                <p>
                  The team behind Lerk was assembled around a shared set of
                  values: excellence without compromise, consistency without
                  rigidity, and hospitality that feels personal even at scale.
                  That is the standard every service is held to.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── SECTION 2 · FULL-BLEED MOODBOARD ─────────────────────────────────────────
function FullBleedImage() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={soft}
      transition={{ duration: 1.1 }}
      className="relative h-[52vw] min-h-[320px] max-h-[680px] w-full overflow-hidden"
    >
      <Image
        src="/images/quality.png"
        alt="Lerk Foods craft and quality"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
    </motion.div>
  );
}

// ── SECTION 3 · STORY ─────────────────────────────────────────────────────────
function StorySection() {
  return (
    <section className="bg-[#F5F0E8] px-8 py-20 md:py-28">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cascade}
          className="grid gap-14 lg:grid-cols-[0.8fr_1fr] lg:gap-20"
        >
          {/* Left – image */}
          <motion.div
            variants={soft}
            transition={{ duration: 1.1 }}
            className="relative min-h-[480px] overflow-hidden lg:min-h-[640px]"
          >
            <Image
              src="/images/kitchen_discipline.jpg"
              alt="Lerk Foods kitchen discipline and craft"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </motion.div>

          {/* Right – long-form text */}
          <motion.div
            variants={cascade}
            className="flex flex-col justify-start pt-2"
          >
            <motion.p
              variants={enter}
              transition={tx}
              className="mb-5 text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-[#5B0E2D]"
            >
              Our Kitchen
            </motion.p>

            <motion.h2
              variants={enter}
              transition={tx}
              className="mb-10 font-logo text-[clamp(2.2rem,4vw,4rem)] font-light leading-[0.95] text-[#1C0A0F]"
            >
              A Kitchen Built
              <br />
              <span className="italic text-[#5B0E2D]">on Conviction</span>
            </motion.h2>

            <motion.div
              variants={cascade}
              className="space-y-5 text-[0.84rem] leading-[1.95] text-[#3A1F14]/75"
            >
              {[
                "Lerk Foods grew from a conviction that Chennai deserved something different — a catering experience that combined culinary precision with hotel-grade execution, without compromising on warmth or flavour.",
                "The kitchen at Lerk is built on discipline. Recipes are standardised. Ingredients are sourced with intention. Every batch is prepared to hold quality across large guest counts — but behind the systems is something harder to define: a genuine care for the guest that runs through everything we do.",
                "Our team brings together chefs trained in consistency, service staff trained in presence, and a management layer that treats every event as if it were the only one on the calendar. That attention compounds — over hundreds of events, it becomes a reputation.",
                "The vision was never simply to serve food. It was to make every occasion we touch feel curated, considered, and worth remembering. That is what Lerk was built for — and what it continues to deliver, event after event, across Chennai.",
              ].map((para) => (
                <motion.p key={para.slice(0, 22)} variants={enter} transition={tx}>
                  {para}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── SECTION 4 · PHILOSOPHY ────────────────────────────────────────────────────
const cards = [
  {
    n: "01",
    title: "Craft",
    body: "Every dish served has been tested, refined, and standardised. Not because we believe in repetition — but because we believe in reliability. Our kitchen discipline ensures the first plate and the five hundredth taste exactly the same.",
  },
  {
    n: "02",
    title: "Heritage",
    body: "Our menus are rooted in the culinary traditions of South India, elevated through technique and presented through a contemporary lens. Heritage is not limitation — it is the foundation from which we build.",
  },
  {
    n: "03",
    title: "Experience",
    body: "We measure success not in covers served but in conversations we overhear — guests pausing to appreciate a dish, a host exhaling with relief, a celebration that becomes a memory. That is the Lerk experience.",
  },
];

function PhilosophySection() {
  return (
    <section className="bg-[#0f1015] px-8 py-20 md:py-28">
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cascade}
        >
          <motion.p
            variants={enter}
            transition={tx}
            className="mb-3 text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-[#C9A84C]"
          >
            Brand Philosophy
          </motion.p>
          <motion.h2
            variants={enter}
            transition={tx}
            className="mb-16 font-logo text-[clamp(2.4rem,5vw,5rem)] font-light leading-[0.92] text-[#F5F0E8]"
          >
            The values we
            <br />
            <span className="italic text-[#C9A84C]">cook by.</span>
          </motion.h2>

          <motion.div
            variants={cascade}
            className="grid border-t border-[#C9A84C]/34 md:grid-cols-3 md:divide-x md:divide-[#C9A84C]/28"
          >
            {cards.map((c) => (
              <motion.div
                key={c.title}
                variants={enter}
                transition={tx}
                whileHover={{ backgroundColor: "rgba(91,14,45,0.15)" }}
                className="group py-10 transition-colors duration-500 md:px-10 md:py-0 md:pt-10 md:first:pl-0 md:last:pr-0"
              >
                <p className="mb-7 font-logo text-[3.8rem] font-light leading-none text-[#C9A84C]/50 transition-colors duration-500 group-hover:text-[#C9A84C]/75">
                  {c.n}
                </p>
                <h3 className="mb-4 font-logo text-[2rem] font-light italic text-[#F5F0E8]">
                  {c.title}
                </h3>
                <p className="text-[0.95rem] font-medium leading-8 text-[#F5F0E8] transition-colors duration-500 group-hover:text-white">
                  {c.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── SECTION 5 · SIGNATURE STATEMENT ──────────────────────────────────────────
function SignatureStatement() {
  return (
    <section className="bg-[#F5F0E8] px-8 py-24 md:py-40">
      <div className="mx-auto max-w-[1180px] text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={cascade}
        >
          <motion.div
            variants={soft}
            transition={{ duration: 1 }}
            className="mx-auto mb-12 h-px w-16 bg-[#5B0E2D]/30"
          />
          <motion.p
            variants={enter}
            transition={tx}
            className="font-logo text-[clamp(2.8rem,8vw,7.5rem)] font-light italic leading-[1.1] text-[#1C0A0F]"
          >
            &ldquo;Food is not
            <br />
            simply prepared.
            <br />
            <span className="text-[#5B0E2D]">It is remembered.&rdquo;</span>
          </motion.p>
          <motion.div
            variants={soft}
            transition={{ duration: 1 }}
            className="mx-auto mt-12 h-px w-16 bg-[#5B0E2D]/30"
          />
        </motion.div>
      </div>
    </section>
  );
}

// ── SECTION 6 · CTA ───────────────────────────────────────────────────────────
function AboutCTA() {
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

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <main className="text-[#1C0A0F]">
      <AboutNav />
      <EditorialIntro />
      <FullBleedImage />
      <StorySection />
      <PhilosophySection />
      <SignatureStatement />
      <AboutCTA />
      <SiteFooter />
    </main>
  );
}
