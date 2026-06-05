import type { Metadata } from "next";
import { BarChart3, Cookie, LockKeyhole, Settings2, ShieldCheck, SlidersHorizontal } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Cookie Policy | Lerk Foods",
  description:
    "Cookie Policy explaining how Lerk Foods uses cookies and similar technologies for website functionality, analytics, preferences, security, and customer experience.",
};

const usageCards = [
  { title: "Website Functionality", Icon: ShieldCheck },
  { title: "Performance Improvement", Icon: BarChart3 },
  { title: "User Preferences", Icon: Settings2 },
  { title: "Traffic Analysis", Icon: SlidersHorizontal },
  { title: "Website Security", Icon: LockKeyhole },
  { title: "Customer Experience", Icon: Cookie },
];

const cookieTypes = [
  {
    title: "Essential Cookies",
    body: "These cookies are necessary for the operation of the website and cannot be disabled through our systems.",
    examples: ["Security functions", "Form submissions", "Session management"],
  },
  {
    title: "Analytics Cookies",
    body: "These cookies help us understand how visitors interact with our website. Analytics information is aggregated and does not directly identify individual users.",
    examples: ["Pages visited", "Time spent on pages", "Device type", "Browser information", "Traffic sources"],
  },
  {
    title: "Functional Cookies",
    body: "These cookies remember preferences that make repeat visits smoother and more relevant.",
    examples: ["Language settings", "Device preferences", "Previously entered form information"],
  },
  {
    title: "Third-Party Cookies",
    body: "We may use trusted third-party services. These providers may place cookies on your device according to their own privacy policies.",
    examples: ["Google Analytics", "Google Tag Manager", "Meta (Facebook) Pixel", "Other website performance and marketing tools"],
  },
];

const browserControls = ["View stored cookies", "Delete cookies", "Block cookies", "Configure cookie preferences"];

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-midnight text-white">
      <SiteNav />

      <section className="relative overflow-hidden border-b border-champagne/12 bg-burgundy px-6 py-20 md:px-10 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(244,210,138,0.14),transparent_32rem)]" />
        <div className="relative mx-auto max-w-[1180px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-champagne">
            Website Policy
          </p>
          <h1 className="luxury-heading text-5xl text-[#fff6d8] md:text-7xl">
            Cookie Policy
          </h1>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-champagne/80">
            Last Updated: June 2026
          </p>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/72">
            <p>
              This Cookie Policy explains how Lerk Foods uses cookies and similar technologies when
              you visit our website.
            </p>
            <p>
              By continuing to browse our website, you agree to the use of cookies in accordance
              with this policy.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-champagne/18 bg-graphite/42 p-6 md:p-8">
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-full border border-champagne/35 text-champagne">
                  <Cookie size={22} />
                </div>
                <h2 className="font-heading text-3xl text-[#fff2c8]">What Are Cookies?</h2>
                <p className="mt-5 text-sm leading-7 text-white/66">
                  Cookies are small text files stored on your device when you visit a website. They
                  help websites function properly, improve user experience, and provide information
                  about website performance.
                </p>
              </div>
            </aside>

            <div>
              <section>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-champagne/82">
                  How We Use Cookies
                </p>
                <h2 className="font-heading text-4xl text-[#fff2c8] md:text-5xl">
                  Clear purposes, better browsing.
                </h2>
                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  {usageCards.map(({ title, Icon }) => (
                    <div key={title} className="border border-champagne/16 bg-graphite/40 p-5">
                      <Icon className="mb-4 text-champagne" size={22} />
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/76">
                        {title}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-16 border-t border-champagne/16 pt-12">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-champagne/82">
                  Types of Cookies We Use
                </p>
                <div className="grid gap-6">
                  {cookieTypes.map((type) => (
                    <article key={type.title} className="border border-champagne/16 bg-midnight/60 p-6 md:p-7">
                      <h3 className="font-heading text-3xl text-[#fff2c8]">{type.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-white/68 md:text-base md:leading-8">
                        {type.body}
                      </p>
                      <ul className="mt-5 grid gap-3 text-sm leading-7 text-white/72 sm:grid-cols-2">
                        {type.examples.map((example) => (
                          <li key={example} className="flex gap-3">
                            <span className="mt-2 size-1.5 shrink-0 bg-champagne" aria-hidden="true" />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              <section className="mt-16 grid gap-6 border-t border-champagne/16 pt-12 lg:grid-cols-2">
                <article className="border border-champagne/16 bg-burgundy/50 p-6 md:p-7">
                  <h2 className="font-heading text-3xl text-[#fff2c8]">Managing Cookies</h2>
                  <p className="mt-4 text-sm leading-7 text-white/68">
                    Most web browsers allow users to manage cookie behavior directly from browser
                    settings.
                  </p>
                  <ul className="mt-5 grid gap-3 text-sm leading-7 text-white/72">
                    {browserControls.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 bg-champagne" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm leading-7 text-white/62">
                    Please note that disabling certain cookies may affect website functionality.
                  </p>
                </article>

                <article className="border border-champagne/16 bg-graphite/44 p-6 md:p-7">
                  <h2 className="font-heading text-3xl text-[#fff2c8]">Updates & Contact</h2>
                  <p className="mt-4 text-sm leading-7 text-white/68">
                    Lerk Foods may update this Cookie Policy from time to time to reflect
                    operational, legal, or regulatory changes. Any updates will be posted on this
                    page with the revised effective date.
                  </p>
                  <p className="mt-5 text-sm leading-7 text-white/68">
                    If you have any questions regarding this Cookie Policy, please contact Lerk
                    Foods through the contact information available on our website.
                  </p>
                </article>
              </section>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
