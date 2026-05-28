"use client";

import { useEffect, useRef, useState } from "react";
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
    <header className="sticky top-0 z-50 border-b border-champagne/10 bg-midnight/92 backdrop-blur-xl">
      <div className="container-shell flex min-h-20 items-center justify-between gap-6">
        <a href="#home" className="inline-flex items-center" aria-label="Lerk Foods home">
          <Image
            src="/images/lerk-gold-2.png"
            alt="Lerk Foods"
            width={96}
            height={96}
            priority
            className="h-16 w-16 object-contain"
          />
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
    <section id="home" className="relative overflow-hidden bg-midnight">
      <video
        className="block h-auto w-full"
        autoPlay
        muted
        loop
        playsInline
        poster={images.hero.src}
        aria-label="Lerk Foods luxury catering banner video"
      >
        <source src="/videos/banner-lerk.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

function HeroIntro() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger}
      className="section-padding bg-midnight"
    >
      <div className="container-shell">
        <motion.div variants={fadeUp} className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.34em] text-champagne">
            <Sparkles size={16} />
            Luxury Catering in Chennai
          </p>
          <h1 className="luxury-heading text-5xl text-[#fff6d8] sm:text-6xl md:text-7xl lg:text-8xl">
            Crafted for Taste,
            <span className="gold-gradient-text mt-2 block">Designed for Experience.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            Lerk Foods delivers premium outdoor catering, corporate catering, and banquet dining
            from Kans One Hotel, combining refined flavours, structured execution, and consistent
            quality across every event.
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/58 md:text-base">
            From weddings and birthdays to corporate events and festive gatherings, we focus on one
            thing above everything else - food that people remember.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <GoldButton href="#contact">Plan Your Event</GoldButton>
            <GoldButton href="#menus" variant="outline">
              View Menus
            </GoldButton>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function TrustStrip() {
  const trackRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;

      const rect = trackRef.current.getBoundingClientRect();
      const totalScrollRange = rect.height - window.innerHeight;
      if (totalScrollRange <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollRange));
      const nextIndex = Math.min(trustCards.length - 1, Math.floor(progress * trustCards.length));
      setActiveIndex(nextIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.section ref={trackRef} className="relative h-[250vh] bg-burgundy md:h-[400vh]">
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden py-6 md:py-16">
        <div className="container-shell flex h-full w-full flex-col justify-between md:justify-center md:gap-10">
          <SectionHeader
            eyebrow="Why People Choose Lerk"
            title={"Why Lerk Foods is Trusted\nfor Catering in Chennai"}
          />

          <div className="mt-6 grid flex-grow items-center gap-8 md:mt-0 md:flex-grow-0 md:grid-cols-2 md:gap-16">
            <div className="relative h-48 w-full overflow-hidden border border-champagne/20 bg-midnight/40 p-1 shadow-2xl sm:h-64 md:h-[480px] md:p-2">
              <div className="relative h-full w-full overflow-hidden border border-champagne/10">
                {trustCards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      scale: activeIndex === index ? 1 : 1.05,
                    }}
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={card.image.src}
                      alt={card.image.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-midnight/40 via-transparent to-transparent" />
                  </motion.div>
                ))}

                <div className="absolute bottom-4 right-4 z-10 md:bottom-6 md:right-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      exit={{ scale: 0.8, opacity: 0, rotate: 15 }}
                      transition={{ duration: 0.35 }}
                      className="gold-gradient-bg inline-flex size-10 items-center justify-center rounded-full text-midnight shadow-gold md:size-14"
                    >
                      {(() => {
                        const Icon = iconMap[trustCards[activeIndex].icon];
                        return <Icon className="size-5 md:size-6" strokeWidth={1.8} />;
                      })()}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] w-full overflow-hidden border-l border-champagne/10 pl-6 md:pl-10">
              <div
                className="absolute left-6 right-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:left-10"
                style={{
                  transform: "translateY(" + (150 - activeIndex * 100) + "px)",
                  height: trustCards.length * 100 + "px",
                }}
              >
                {trustCards.map((card, index) => {
                  const Icon = iconMap[card.icon];
                  const isActive = activeIndex === index;

                  return (
                    <div
                      key={card.title}
                      className="flex h-[100px] flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{
                        opacity: isActive ? 1 : 0.25,
                        transform: isActive ? "scale(1.02) translateX(4px)" : "scale(0.96) translateX(0px)",
                      }}
                    >
                      <div className="mb-1 flex items-center gap-3">
                        <Icon className={isActive ? "text-champagne" : "text-white/40"} size={20} strokeWidth={1.8} />
                        <h3 className={isActive ? "font-heading text-lg text-[#fff1c5] transition-colors duration-500 md:text-xl" : "font-heading text-lg text-white/60 transition-colors duration-500 md:text-xl"}>
                          {card.title}
                        </h3>
                      </div>
                      <p className={isActive ? "max-w-md text-xs leading-5 text-white/86 transition-colors duration-500 md:text-sm" : "max-w-md text-xs leading-5 text-white/35 transition-colors duration-500 md:text-sm"}>
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="gold-gradient-bg pointer-events-none absolute left-0 top-[150px] h-[100px] w-[2px] rounded-full shadow-gold" />
            </div>
          </div>
        </div>
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
    <motion.section
      id={section.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={stagger}
      className="premium-section relative min-h-[46rem] overflow-hidden bg-midnight"
    >
      <Image
        src="/images/approach-food-quality.png"
        alt="Our approach to food quality at Lerk Foods"
        fill
        sizes="100vw"
        className="object-cover object-[72%_center]"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#020203] via-midnight/96 to-midnight/22" />
      <div className="absolute inset-y-0 left-0 z-[2] w-full bg-[#020203]/82 lg:w-[44%]" />
      <div className="absolute inset-0 z-[3] bg-gradient-to-t from-midnight/84 via-transparent to-midnight/40" />
      <div className="absolute inset-0 z-[3] bg-[radial-gradient(circle_at_center,transparent_34%,rgba(2,2,3,0.72)_100%)]" />

      <div className="container-shell section-padding relative z-10 grid min-h-[46rem] items-center gap-12 lg:grid-cols-[0.4fr_0.6fr]">
        <motion.div
          variants={fadeUp}
          className="rounded-[6px] border border-champagne/22 bg-midnight/74 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.58)] backdrop-blur-md md:p-8 lg:p-10"
        >
          <div className="mb-7">
            <IconBadge icon={section.icon} />
          </div>
          <SectionHeader
            eyebrow={section.eyebrow}
            title={section.title}
            body={section.body}
            align="left"
          />
          <motion.div variants={stagger} className="mt-9 grid gap-4">
            {section.bullets.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                whileHover={{ x: 6 }}
                className="group flex gap-3 rounded-[6px] border border-champagne/24 bg-[#08090d]/72 px-4 py-3 text-sm leading-7 text-white/82 shadow-[0_16px_44px_rgba(0,0,0,0.34)] backdrop-blur-sm transition-colors hover:border-champagne/45 hover:bg-midnight/86"
              >
                <Star className="mt-1 shrink-0 fill-champagne/45 text-champagne transition group-hover:scale-110" size={15} />
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </motion.section>
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
          <iframe
            title="Lerk Foods Google Map"
            src="https://www.google.com/maps?q=Lerk%20Foods%2C%20Acharya%20Tulsi%20Rd%2C%20Pallavaram%2C%20Chennai%2C%20Tamil%20Nadu%20600043&output=embed"
            className="absolute inset-0 h-full w-full grayscale-[0.2] invert-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/45 via-transparent to-midnight/20" />
          <a
            href="https://www.google.com/maps/dir//Lerk+Foods,+Acharya+Tulsi+Rd,+Pallavaram,+Chennai,+Tamil+Nadu+600043/@13.0475255,80.2086732,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a525f84d7432dc5:0x7bbbcb0087e808c9!2m2!1d80.1501576!2d12.9711005?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient-bg absolute bottom-5 left-5 z-10 inline-flex min-h-11 items-center justify-center px-5 text-xs font-bold uppercase tracking-[0.18em] text-midnight shadow-gold"
          >
            Open Google Map
          </a>
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
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const primaryFaqs = faqs.slice(0, 5);
  const moreFaqs = faqs.slice(5);

  const renderFaq = (faq: (typeof faqs)[number], index: number) => {
    const open = active === index;

    return (
      <motion.article
        key={faq.question}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.24 }}
        className="border border-champagne/16 bg-graphite/54"
      >
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 p-5 text-left"
          onClick={() => setActive(open ? -1 : index)}
          aria-expanded={open}
        >
          <span className="font-heading text-xl text-[#fff2c8]">{faq.question}</span>
          <ChevronDown
            className={open ? "shrink-0 rotate-180 text-champagne transition" : "shrink-0 text-champagne transition"}
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
  };

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
        <div>
          <motion.div variants={stagger} className="grid gap-3">
            {primaryFaqs.map((faq, index) => renderFaq(faq, index))}
          </motion.div>

          <AnimatePresence initial={false}>
            {showAllFaqs ? (
              <motion.div
                id="more-faqs"
                key="more-faqs"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.32, ease: "easeInOut" }}
                className="mt-6 overflow-hidden"
              >
                <div className="grid gap-3">
                  {moreFaqs.map((faq, index) => renderFaq(faq, index + primaryFaqs.length))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <motion.div variants={fadeUp} className="mt-8">
            <button
              type="button"
              aria-controls="more-faqs"
              aria-expanded={showAllFaqs}
              onClick={() => {
                setShowAllFaqs((current) => !current);
                setActive(-1);
              }}
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 border border-champagne/55 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-champagne transition duration-300 hover:bg-champagne/10 sm:w-auto"
            >
              {showAllFaqs ? "Show Less" : "Know More"}
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function FooterCTA() {
  return (
    <section className="relative min-h-[38rem] overflow-hidden bg-midnight md:min-h-[70vh]">
      <Image
        src={images.hero.src}
        alt="Luxury catering dining experience by Lerk Foods"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020203] via-midnight/88 to-midnight/58" />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/28 to-midnight/76" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/38 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-champagne/32 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container-shell relative z-10 flex min-h-[38rem] items-center justify-center py-24 text-center md:min-h-[70vh]"
      >
        <div className="max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-champagne/82">
            Begin the Plan
          </p>
          <h2 className="luxury-heading mx-auto text-5xl text-[#fff4cf] md:text-7xl lg:text-8xl">
            Let&apos;s Create an Experience
            <span className="gold-gradient-text mt-2 block">Your Guests Will Remember.</span>
          </h2>
          <motion.div
            animate={{ opacity: [0.78, 1, 0.78] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mt-10 inline-flex"
          >
            <GoldButton href="mailto:hello@lerkfoods.com">Plan Your Event</GoldButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-midnight py-12">
      <div className="container-shell grid gap-8 border-t border-champagne/16 pt-10 lg:grid-cols-[1fr_1.4fr_0.6fr]">
        <div>
          <Image
            src="/images/lerk-gold-2.png"
            alt="Lerk Foods"
            width={112}
            height={112}
            className="h-20 w-20 object-contain"
          />
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
          {[
            { href: "https://www.instagram.com/lerkfoods", label: "Lerk Foods Instagram", Icon: Share2 },
            { href: "https://www.facebook.com/lerkfoods", label: "Lerk Foods Facebook", Icon: Send },
            { href: "https://www.google.com/maps/dir//Lerk+Foods,+Acharya+Tulsi+Rd,+Pallavaram,+Chennai,+Tamil+Nadu+600043/@13.0475255,80.2086732,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a525f84d7432dc5:0x7bbbcb0087e808c9!2m2!1d80.1501576!2d12.9711005?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D", label: "Lerk Foods Google profile", Icon: Globe },
            { href: "https://wa.me/919363611265", label: "WhatsApp Lerk Foods", Icon: Phone },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              target="_blank"
              rel="noopener noreferrer"
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
    <main className="min-h-screen overflow-x-hidden bg-midnight">
      <Header />
      <Hero />
      <HeroIntro />
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
