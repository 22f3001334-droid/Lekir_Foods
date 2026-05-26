"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Cake,
  ChefHat,
  ChevronDown,
  Clock3,
  Gem,
  Globe,
  Hotel,
  Mail,
  Map,
  MapPin,
  Menu,
  Navigation,
  PartyPopper,
  Phone,
  Quote,
  Send,
  ShieldCheck,
  Share2,
  Sparkles,
  Star,
  Utensils,
  Users,
  X,
} from "lucide-react";
import {
  faqs,
  featureSections,
  footerDetails,
  images,
  locationAreas,
  navLinks,
  serviceCards,
  testimonials,
  trustCards,
  type IconName,
} from "@/lib/site-data";

const iconMap = {
  award: Award,
  briefcase: BriefcaseBusiness,
  cake: Cake,
  chef: ChefHat,
  clock: Clock3,
  gem: Gem,
  hotel: Hotel,
  map: Map,
  party: PartyPopper,
  shield: ShieldCheck,
  sparkles: Sparkles,
  utensils: Utensils,
  users: Users,
} satisfies Record<IconName, typeof Award>;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

function IconBadge({ icon }: { icon: IconName }) {
  const Icon = iconMap[icon];

  return (
    <span className="gold-gradient-bg inline-flex size-11 items-center justify-center rounded-full text-midnight shadow-gold">
      <Icon size={20} strokeWidth={1.8} />
    </span>
  );
}

function GoldButton({
  children,
  href,
  variant = "solid",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "solid" | "outline";
}) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-none px-6 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300 sm:w-auto ${
        variant === "solid"
          ? "gold-gradient-bg text-midnight shadow-gold hover:brightness-110"
          : "border border-champagne/55 text-champagne hover:bg-champagne/10"
      }`}
    >
      {children}
      <ArrowRight size={16} className="transition group-hover:translate-x-1" />
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  body,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-champagne/80">
        {eyebrow}
      </p>
      <h2 className="luxury-heading text-4xl text-[#fff4cf] md:text-6xl">
        {title.split("\n").map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>
      {body ? <p className="mt-6 text-base leading-8 text-white/68">{body}</p> : null}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-champagne/10 bg-midnight/35 backdrop-blur-xl">
      <div className="container-shell flex min-h-20 items-center justify-between gap-6">
        <a href="#home" className="font-logo text-3xl font-semibold text-[#fff3c4]">
          Lerk <span className="gold-gradient-text">Foods</span>
        </a>

        <nav className="hidden items-center gap-7 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/68 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition hover:text-champagne ${
                index === 0 ? "text-champagne" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="border border-champagne/55 px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-champagne transition hover:bg-champagne/10"
          >
            Plan Your Event
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="gold-border inline-flex size-11 items-center justify-center text-champagne lg:hidden"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-champagne/10 bg-midnight/96 lg:hidden"
          >
            <div className="container-shell grid gap-1 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-2 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/72"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="gold-gradient-bg mt-3 px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-midnight"
                onClick={() => setOpen(false)}
              >
                Plan Your Event
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      {/* Background Image - mobile/tablet only */}
      <div className="absolute inset-0 block lg:hidden">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-midnight/90" />
      </div>

      <div className="cinematic-overlay hidden lg:block pointer-events-none opacity-40" />
      <div className="absolute right-[5%] top-28 hidden size-72 ornament-ring opacity-60 lg:block" />
      <div className="absolute right-[13%] top-48 hidden size-40 ornament-ring opacity-60 lg:block" />
      <div className="absolute bottom-12 left-[8%] h-px w-72 bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />

      <div className="container-shell relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1.03fr_0.97fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.34em] text-champagne"
          >
            <Sparkles size={16} />
            Luxury Catering in Chennai
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="luxury-heading text-5xl text-[#fff6d8] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Crafted for Taste,
            <span className="gold-gradient-text mt-2 block">Designed for Experience.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            Lerk Foods delivers premium outdoor catering, corporate catering, and banquet dining
            from Kans One Hotel, combining refined flavours, structured execution, and consistent
            quality across every event.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-sm leading-7 text-white/58 md:text-base">
            From weddings and birthdays to corporate events and festive gatherings, we focus on one
            thing above everything else - food that people remember.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <GoldButton href="#contact">Plan Your Event</GoldButton>
            <GoldButton href="#menus" variant="outline">
              View Menus
            </GoldButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="image-vignette group relative hidden min-h-[32rem] overflow-hidden border border-champagne/24 lg:block"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
            autoPlay
            muted
            loop
            playsInline
            poster={images.hero.src}
            aria-label="Lerk Foods luxury catering banner video"
          >
            <source src="/videos/banner-lerk.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-6 border border-champagne/20 pointer-events-none z-10" />
          <div className="absolute right-0 top-0 h-40 w-40 border-r border-t border-champagne/50 pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 h-40 w-40 border-b border-l border-champagne/50 pointer-events-none z-10" />
        </motion.div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={stagger}
      className="section-padding bg-burgundy"
    >
      <div className="container-shell">
        <SectionHeader
          eyebrow="Why People Choose Lerk"
          title={"Why Lerk Foods is Trusted\nfor Catering in Chennai"}
        />
        <motion.div
          variants={stagger}
          className="mt-12 grid divide-y divide-champagne/14 border-y border-champagne/18 md:grid-cols-5 md:divide-x md:divide-y-0"
        >
          {trustCards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.article key={card.title} variants={fadeUp} className="p-6 text-center">
                <Icon className="mx-auto mb-5 text-champagne" size={26} strokeWidth={1.6} />
                <h3 className="font-heading text-xl text-[#fff1c5]">{card.title}</h3>
                <p className="mt-3 text-xs leading-6 text-white/62">{card.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

function OccasionCards() {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="section-padding bg-midnight"
    >
      <div className="container-shell">
        <SectionHeader eyebrow="Occasions" title={"Catering Services\nfor Every Occasion"} />
        <motion.div variants={stagger} className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((card) => (
            <motion.article
              key={card.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="royal-card group overflow-hidden"
            >
              <div className="image-vignette relative h-60 overflow-hidden">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.08]"
                />
                <div className="absolute left-5 top-5 z-10">
                  <IconBadge icon={card.icon} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl text-[#fff2c8]">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/63">{card.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function DiningSection() {
  const section = featureSections[0];

  return (
    <FeatureSection
      section={section}
      className="premium-section bg-midnight"
      imageSide="right"
      beforeDivider
      afterDivider
    />
  );
}

function QualitySection() {
  const section = featureSections[1];

  return (
    <FeatureSection
      section={section}
      className="premium-section bg-graphite"
      imageSide="left"
      badge={section.badge}
    />
  );
}

function MenuSection() {
  const section = featureSections[2];

  return (
    <motion.section
      id="menus"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={stagger}
      className="premium-section section-padding bg-ruby"
    >
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <SectionHeader
            eyebrow={section.eyebrow}
            title={section.title}
            body={section.body}
            align="left"
          />
          <BulletList items={section.bullets} />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <GoldButton href="#contact">{section.cta}</GoldButton>
          </div>
        </div>

        <motion.div variants={fadeUp} className="image-vignette group relative min-h-[34rem] overflow-hidden border border-champagne/24">
          <Image
            src={section.image.src}
            alt={section.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-champagne">
            <IconBadge icon={section.icon} />
            Menu Planning
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function FeatureSection({
  section,
  className,
  imageSide,
  badge,
  beforeDivider = false,
  afterDivider = false,
}: {
  section: (typeof featureSections)[number];
  className: string;
  imageSide: "left" | "right";
  badge?: string;
  beforeDivider?: boolean;
  afterDivider?: boolean;
}) {
  const image = (
    <motion.div variants={fadeUp} className="relative">
      <div className="image-vignette group relative min-h-[32rem] overflow-hidden border border-champagne/24">
        <Image
          src={section.image.src}
          alt={section.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      {badge ? (
        <div className="absolute -bottom-8 left-6 flex size-36 items-center justify-center rounded-full border border-champagne/45 bg-midnight/94 p-6 text-center text-[0.65rem] font-bold uppercase leading-5 tracking-[0.2em] text-champagne shadow-gold">
          {badge}
        </div>
      ) : null}
    </motion.div>
  );

  const content = (
    <div>
      <div className="mb-7">
        <IconBadge icon={section.icon} />
      </div>
      <SectionHeader
        eyebrow={section.eyebrow}
        title={section.title}
        body={section.body}
        align="left"
      />
      <BulletList items={section.bullets} />
      {section.cta ? (
        <div className="mt-8">
          <GoldButton href="#contact" variant="outline">
            {section.cta}
          </GoldButton>
        </div>
      ) : null}
    </div>
  );

  return (
    <motion.section
      id={section.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={stagger}
      className={`relative ${className}`}
    >
      {beforeDivider ? (
        <div className="container-shell h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
      ) : null}
      <div className="container-shell section-padding grid items-center gap-12 lg:grid-cols-2">
        {imageSide === "left" ? image : content}
        {imageSide === "left" ? content : image}
      </div>
      {afterDivider ? (
        <div className="container-shell h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
      ) : null}
    </motion.section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <motion.div variants={stagger} className="mt-8 grid gap-3">
      {items.map((item) => (
        <motion.div key={item} variants={fadeUp} className="flex gap-3 text-sm leading-7 text-white/70">
          <Star className="mt-1 shrink-0 fill-champagne/40 text-champagne" size={15} />
          <span>{item}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

function LocationSection() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.24 }}
      variants={stagger}
      className="premium-section section-padding bg-burgundy"
    >
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeader
            eyebrow="Chennai Reach"
            title={"Centrally Located\nCatering in Chennai"}
            body="Operating from Kans One Hotel in Pallavaram, Lerk Foods is well-positioned to serve:"
            align="left"
          />
          <motion.div variants={stagger} className="mt-8 flex flex-wrap gap-3">
            {locationAreas.map((area) => (
              <motion.span
                key={area}
                variants={fadeUp}
                className="border border-champagne/28 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/76"
              >
                {area}
              </motion.span>
            ))}
          </motion.div>
          <div className="mt-9">
            <GoldButton href="mailto:hello@lerkfoods.com">Contact Lerk Foods</GoldButton>
          </div>
        </div>

        <motion.div variants={fadeUp} className="relative min-h-[34rem] overflow-hidden border border-champagne/22 bg-midnight">
          <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(244,210,138,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(244,210,138,0.12)_1px,transparent_1px)] [background-size:42px_42px]" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 700 520" role="img" aria-label="Map-style route graphic for Lerk Foods in Pallavaram">
            <path d="M70 390 C180 330 185 170 315 210 S470 340 630 140" fill="none" stroke="#f4d28a" strokeWidth="2" strokeDasharray="8 10" opacity="0.78" />
            <path d="M95 120 C210 180 260 115 355 155 S500 250 610 230" fill="none" stroke="#d8b25f" strokeWidth="1.5" opacity="0.5" />
          </svg>
          {[
            ["Pallavaram", "left-[22%] top-[62%]"],
            ["Airport", "left-[66%] top-[28%]"],
            ["Chromepet", "left-[48%] top-[42%]"],
            ["South Chennai", "left-[72%] top-[66%]"],
          ].map(([label, position]) => (
            <div key={label} className={`absolute ${position} flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-champagne`}>
              <MapPin size={16} className="fill-champagne/30" />
              {label}
            </div>
          ))}
          <div className="absolute left-1/2 top-1/2 w-[min(21rem,calc(100%-3rem))] -translate-x-1/2 -translate-y-1/2 border border-champagne/38 bg-burgundy/92 p-8 text-center shadow-crimson">
            <Navigation className="mx-auto mb-5 text-champagne" size={34} />
            <p className="font-logo text-4xl font-semibold text-[#fff3c4]">LERK FOODS</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              Kans One Hotel
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
              Pallavaram
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
function SectionGutter() {
  return <div className="section-gutter" aria-hidden="true" />;
}

function Testimonials() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={stagger}
      className="section-padding bg-graphite"
    >
      <div className="container-shell">
        <SectionHeader eyebrow="Guest Words" title="Testimonials" />
        <motion.div variants={stagger} className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <motion.article key={item.name} variants={fadeUp} className="royal-card p-7">
              <Quote className="mb-6 text-champagne" size={34} strokeWidth={1.4} />
              <p className="text-base leading-8 text-white/74">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-7 border-t border-champagne/12 pt-5">
                <p className="font-heading text-2xl text-[#fff3c4]">{item.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-champagne/76">
                  {item.role}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <motion.section
      id="blog"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={stagger}
      className="section-padding bg-midnight"
    >
      <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          eyebrow="Questions"
          title="FAQ"
          body="Straight answers for catering, dining, menus, location, and event planning in Chennai."
          align="left"
        />
        <motion.div variants={stagger} className="grid gap-3">
          {faqs.map((faq, index) => {
            const open = active === index;
            return (
              <motion.article key={faq.question} variants={fadeUp} className="border border-champagne/16 bg-graphite/54">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setActive(open ? -1 : index)}
                  aria-expanded={open}
                >
                  <span className="font-heading text-xl text-[#fff2c8]">{faq.question}</span>
                  <ChevronDown
                    className={`shrink-0 text-champagne transition ${open ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                  className="overflow-hidden"
                  aria-hidden={!open}
                >
                  <p className="px-5 pb-5 text-sm leading-7 text-white/66">{faq.answer}</p>
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

function FooterCTA() {
  return (
    <section className="relative overflow-hidden bg-ruby py-20">
      <div className="absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne/16" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container-shell relative z-10 text-center"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-champagne/80">
          Begin the Plan
        </p>
        <h2 className="luxury-heading mx-auto max-w-4xl text-5xl text-[#fff4cf] md:text-7xl">
          Let&apos;s Create an Experience
          <span className="gold-gradient-text block">Your Guests Will Remember.</span>
        </h2>
        <motion.div
          animate={{ opacity: [0.72, 1, 0.72] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-9 inline-flex"
        >
          <GoldButton href="mailto:hello@lerkfoods.com">Plan Your Event</GoldButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-midnight py-12">
      <div className="container-shell grid gap-8 border-t border-champagne/16 pt-10 lg:grid-cols-[1fr_1.4fr_0.6fr]">
        <div>
          <p className="font-logo text-4xl font-semibold text-[#fff3c4]">
            Lerk <span className="gold-gradient-text">Foods</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/58">
            Luxury catering, curated menus, and hotel dining from Kans One Hotel, Pallavaram.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-white/68">
          <p className="flex gap-3">
            <MapPin className="mt-1 shrink-0 text-champagne" size={18} />
            {footerDetails.address}
          </p>
          <a href={`mailto:${footerDetails.email}`} className="flex gap-3 transition hover:text-champagne">
            <Mail className="mt-1 shrink-0 text-champagne" size={18} />
            {footerDetails.email}
          </a>
          <a href="https://www.lerkfoods.com" className="flex gap-3 transition hover:text-champagne">
            <Globe className="mt-1 shrink-0 text-champagne" size={18} />
            {footerDetails.website}
          </a>
        </div>
        <div className="flex gap-3 lg:justify-end">
          {[Share2, Send, Globe, Phone].map((Icon, index) => (
            <a
              key={index}
              href={index === 3 ? "tel:+910000000000" : "#home"}
              aria-label={index === 3 ? "Call Lerk Foods" : "Lerk Foods social profile"}
              className="gold-border inline-flex size-11 items-center justify-center text-champagne transition hover:bg-champagne/10"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-midnight">
      <Header />
      <Hero />
      <OccasionCards />
      <TrustStrip />
      <DiningSection />
      <SectionGutter />
      <QualitySection />
      <SectionGutter />
      <MenuSection />
      <SectionGutter />
      <LocationSection />
      <SectionGutter />
      <Testimonials />
      <FAQSection />
      <FooterCTA />
      <Footer />
    </main>
  );
}
