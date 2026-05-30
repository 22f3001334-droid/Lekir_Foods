"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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

// ── HERO IMAGE ────────────────────────────────────────────────────────────────
function PostHero() {
  return (
    <div className="relative h-[62vh] min-h-[400px] w-full overflow-hidden">
      <Image
        src="/images/event_experience.png"
        alt="Creating Memorable Hospitality Experiences"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0205]/80 via-[#0D0205]/30 to-transparent" />

      {/* Category + title overlay */}
      <div className="absolute bottom-0 left-0 px-8 pb-10 md:px-16 md:pb-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cascade}
        >
          <motion.p
            variants={enter}
            transition={tx}
            className="mb-3 text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-champagne/80"
          >
            Hospitality
          </motion.p>
          <motion.h1
            variants={enter}
            transition={tx}
            className="max-w-[760px] font-logo text-[clamp(1.8rem,4vw,3.4rem)] font-light leading-[1.15] text-[#F5F0E8]"
          >
            Why Great Food Alone Is Not Enough: Creating Memorable Hospitality Experiences with Lerk Foods
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}

// ── ARTICLE META ─────────────────────────────────────────────────────────────
function ArticleMeta() {
  return (
    <div className="bg-[#F5F0E8] px-8 py-8">
      <div className="mx-auto max-w-[720px]">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-[#1C0A0F]/10" />
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[#3A1F14]/50">
            May 29, 2026 &nbsp;·&nbsp; 6 min read
          </p>
          <div className="h-px flex-1 bg-[#1C0A0F]/10" />
        </div>
      </div>
    </div>
  );
}

// ── SECTION HEADING ───────────────────────────────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-logo mt-14 mb-5 border-b border-[#5B0E2D]/15 pb-4 text-[1.9rem] font-light text-[#1C0A0F]">
      {children}
    </h2>
  );
}

// ── NUMBERED ITEM ────────────────────────────────────────────────────────────
function NumberedItem({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <span className="mr-6 font-logo text-[3rem] font-light leading-none text-[#5B0E2D]/20">
        {n}
      </span>
      <div>
        <p className="mb-2 text-[0.9rem] font-semibold text-[#1C0A0F]">{title}</p>
        <p className="text-[0.9rem] leading-[2] text-[#3A1F14]/78">{children}</p>
      </div>
    </div>
  );
}

// ── ARTICLE BODY ─────────────────────────────────────────────────────────────
function ArticleBody() {
  return (
    <article className="bg-[#F5F0E8] px-6 pb-20">
      <div className="mx-auto max-w-[720px]">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={tx}
          className="mb-10"
        >
          <Link
            href="/blog"
            className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#5B0E2D] transition hover:text-[#330013]"
          >
            ← All Articles
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={cascade}
          className="text-[0.9rem] leading-[2] text-[#3A1F14]/78"
        >
          {/* Intro italic lead */}
          <motion.p
            variants={enter}
            transition={tx}
            className="mb-6 font-logo text-[1.3rem] italic leading-[1.7] text-[#3A1F14]/78"
          >
            In today&apos;s competitive hospitality landscape, serving delicious food is only part
            of the equation. Whether it&apos;s a corporate gathering, wedding celebration, social
            event, or private function, guests remember how an experience made them feel. At Lerk
            Foods, we believe exceptional hospitality begins long before the first plate is served
            and continues long after the final guest leaves.
          </motion.p>

          <motion.p variants={enter} transition={tx} className="mb-6">
            Guests today expect more than just quality meals. They seek seamless service,
            consistency, presentation, and meaningful interactions. A successful event requires a
            perfect balance of food quality, operational excellence, and guest experience.
          </motion.p>

          {/* Section 1 */}
          <motion.div variants={enter} transition={tx}>
            <SectionHeading>The Modern Expectation of Catering Services</SectionHeading>
            <p className="mb-5">
              The hospitality industry has transformed dramatically over the past decade. Clients
              and guests are increasingly discerning — they come with refined expectations shaped by
              global dining experiences, social media, and a culture that places high value on
              memorable moments. For catering professionals, this means that excellence in food
              preparation, while essential, is no longer sufficient on its own.
            </p>
            <p className="mb-5">
              Professional catering today encompasses everything from the initial consultation and
              menu design to on-site logistics, service choreography, and post-event follow-up. Each
              touchpoint contributes to the overall perception of quality. A perfectly prepared dish
              that arrives late or is presented without care undermines the effort invested in the
              kitchen. Conversely, impeccable service can elevate even a simple menu into an
              experience guests remember warmly.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div variants={enter} transition={tx}>
            <SectionHeading>What Makes a Hospitality Experience Truly Exceptional?</SectionHeading>
            <p className="mb-8">
              Drawing from years of delivering premium catering across weddings, corporate events,
              and private celebrations in Chennai, Lerk Foods has identified four pillars that
              consistently define outstanding hospitality experiences.
            </p>
            <div className="space-y-8">
              <NumberedItem n="1" title="Seamless Service Flow">
                The coordination between kitchen staff, service personnel, and event managers
                determines whether an event runs smoothly or becomes a logistical challenge. Lerk
                Foods invests in structured service protocols that ensure every guest receives
                timely, attentive care — from the moment they arrive to the final serving of
                dessert.
              </NumberedItem>
              <NumberedItem n="2" title="Consistent Food Quality at Scale">
                Maintaining flavour and presentation consistency across large guest counts is one
                of the most technically demanding aspects of professional catering. Standardised
                recipes, controlled batch cooking, and experienced kitchen management are the
                foundations upon which Lerk Foods builds its reputation for reliability.
              </NumberedItem>
              <NumberedItem n="3" title="Thoughtful Presentation">
                Visual appeal communicates care and intention before a single bite is taken.
                Premium buffet styling, refined plating, and attention to table aesthetics signal
                to guests that their experience has been considered in full. Presentation is not
                decoration — it is a form of hospitality.
              </NumberedItem>
              <NumberedItem n="4" title="Personalisation and Flexibility">
                Every event is unique, and truly exceptional catering recognises this. Whether
                adapting menus to dietary requirements, adjusting service styles to match the tone
                of an occasion, or accommodating last-minute changes with composure, the capacity
                to personalise is what separates good caterers from great ones.
              </NumberedItem>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div variants={enter} transition={tx}>
            <SectionHeading>Why Businesses Choose Professional Catering Partners</SectionHeading>
            <p className="mb-5">
              For corporate clients, the decision to work with a professional catering partner
              extends beyond food. It is a strategic choice that reflects on the company&apos;s
              brand, values, and commitment to excellence. A well-catered corporate event
              communicates professionalism and creates an environment conducive to productive
              conversation and relationship-building.
            </p>
            <p className="mb-5">
              Lerk Foods serves as a trusted partner for businesses across Chennai — from small
              team meetings requiring gourmet coffee-break setups to large-scale conferences
              demanding coordinated banquet service. The ability to deliver consistently, adapt to
              varying requirements, and manage the complexity of large-scale operations makes
              professional catering partnerships an investment in the success of every event.
            </p>
          </motion.div>

          {/* Section 4 */}
          <motion.div variants={enter} transition={tx}>
            <SectionHeading>The Lerk Foods Difference</SectionHeading>
            <p className="mb-5">
              Operating from the professional kitchen facilities at Kans One Hotel in Pallavaram,
              Chennai, Lerk Foods combines the culinary rigour of hotel-grade food production with
              the personal warmth of dedicated hospitality. This unique position allows the team
              to bring hotel-standard execution to outdoor catering, private events, and community
              gatherings throughout the city.
            </p>
            <p className="mb-5">
              The Lerk Foods approach is built on a commitment to craft that goes beyond the plate.
              From ingredient selection and recipe standardisation to service training and event
              logistics, every aspect of the operation is designed to support one goal: creating
              an experience that guests remember. This is not simply a professional standard — it
              is the founding conviction of the brand, and it informs every event the team takes on.
            </p>
          </motion.div>

          {/* Section 5 */}
          <motion.div variants={enter} transition={tx}>
            <SectionHeading>Looking Ahead</SectionHeading>
            <p className="mb-5">
              As the hospitality industry continues to evolve, the expectation gap between good and
              exceptional catering will only widen. Clients who have experienced truly elevated
              service will continue to raise their standards — and the catering partners who thrive
              will be those who build systems, develop people, and cultivate cultures of excellence
              that can sustain quality over time and at scale.
            </p>
            <p className="mb-5">
              For Lerk Foods, the path forward is grounded in the same principles that have defined
              the brand since its founding: a relentless focus on food quality, a commitment to
              operational excellence, and a deep belief that exceptional hospitality is not about
              what is served on the plate — it is about how every guest feels when they leave the
              table.
            </p>
          </motion.div>

          {/* Keywords */}
          <motion.p
            variants={enter}
            transition={tx}
            className="mt-14 text-[0.72rem] italic text-[#3A1F14]/40"
          >
            <span className="not-italic font-semibold">Keywords:</span>{" "}
            catering services Chennai, hospitality experience, corporate catering, wedding catering,
            luxury outdoor catering, Lerk Foods, event catering Chennai, Kans One Hotel, premium
            catering, memorable events
          </motion.p>
        </motion.div>
      </div>
    </article>
  );
}

// ── CTA SECTION ───────────────────────────────────────────────────────────────
function PostCTA() {
  return (
    <section className="bg-[#5B0E2D] px-8 py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cascade}
        >
          <motion.h2
            variants={enter}
            transition={tx}
            className="mb-10 font-logo text-[clamp(2.2rem,5vw,4.5rem)] font-light leading-[1.1] text-[#F5F0E8]"
          >
            Ready to Create an Experience
            <br />
            <span className="italic text-[#C9A84C]">Worth Remembering?</span>
          </motion.h2>
          <motion.div variants={enter} transition={tx}>
            <Link
              href="/contact#plan-event"
              className="inline-block border border-[#F5F0E8]/40 px-10 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#F5F0E8] transition-all duration-300 hover:bg-[#F5F0E8] hover:text-[#5B0E2D]"
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
export default function BlogPostPage({ slug: _slug }: { slug: string }) {
  return (
    <main className="text-[#1C0A0F]">
      <BlogNav />
      <PostHero />
      <ArticleMeta />
      <ArticleBody />
      <PostCTA />
      <SiteFooter />
    </main>
  );
}
