import type { Metadata } from "next";
import {
  CalendarDays,
  Cookie,
  Database,
  FilePenLine,
  Handshake,
  LockKeyhole,
  Mail,
  MapPin,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Trash2,
  UserRound,
} from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Privacy Policy | Lerk Foods",
  description:
    "Privacy Policy explaining how Lerk Foods collects, uses, protects, shares, and retains personal information submitted through the website and service enquiries.",
};

const personalInfo = [
  { label: "Name", Icon: UserRound },
  { label: "Phone Number", Icon: Phone },
  { label: "Email Address", Icon: Mail },
  { label: "Company Name", Icon: Handshake },
  { label: "Event Details", Icon: FilePenLine },
  { label: "Event Location", Icon: MapPin },
  { label: "Event Date", Icon: CalendarDays },
  { label: "Information voluntarily submitted through enquiry forms", Icon: Database },
];

const technicalInfo = [
  "IP Address",
  "Browser Type",
  "Device Information",
  "Website Usage Data",
  "Cookies and Analytics Data",
];

const uses = [
  "Respond to enquiries",
  "Provide quotations",
  "Deliver catering services",
  "Improve website performance",
  "Communicate regarding bookings",
  "Enhance customer experience",
  "Comply with legal obligations",
];

const sharing = [
  "Authorized service providers",
  "Event partners involved in service delivery",
  "Legal authorities where required by law",
];

const rights = [
  { title: "Access", body: "Request access to your personal information.", Icon: Database },
  { title: "Correction", body: "Request correction of inaccurate information.", Icon: FilePenLine },
  { title: "Deletion", body: "Request deletion of personal information where legally permitted.", Icon: Trash2 },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-midnight text-white">
      <SiteNav />

      <section className="relative overflow-hidden border-b border-champagne/12 bg-burgundy px-6 py-20 md:px-10 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(244,210,138,0.14),transparent_34rem)]" />
        <div className="relative mx-auto max-w-[1180px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-champagne">
            Website Policy
          </p>
          <h1 className="luxury-heading text-5xl text-[#fff6d8] md:text-7xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-champagne/80">
            Last Updated: June 2026
          </p>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/72">
            <p>
              Lerk Foods values your privacy and is committed to protecting your personal
              information.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, and safeguard your information when
              you visit our website or contact us regarding our services.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-champagne/18 bg-graphite/42 p-6 md:p-8">
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-full border border-champagne/35 text-champagne">
                  <ShieldCheck size={22} />
                </div>
                <h2 className="font-heading text-3xl text-[#fff2c8]">Our Commitment</h2>
                <p className="mt-5 text-sm leading-7 text-white/66">
                  We collect only the information needed to respond to enquiries, prepare
                  quotations, deliver catering services, and improve the website experience.
                </p>
                <div className="mt-7 border-t border-champagne/14 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-champagne/84">
                    Contact
                  </p>
                  <a
                    href="mailto:lerkfoods@gmail.com"
                    className="mt-3 block text-sm text-white/72 transition hover:text-champagne"
                  >
                    lerkfoods@gmail.com
                  </a>
                </div>
              </div>
            </aside>

            <div>
              <section>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-champagne/82">
                  1. Information We Collect
                </p>
                <h2 className="font-heading text-4xl text-[#fff2c8] md:text-5xl">
                  Information shared with intention.
                </h2>

                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  {personalInfo.map(({ label, Icon }) => (
                    <div key={label} className="border border-champagne/16 bg-graphite/40 p-5">
                      <Icon className="mb-4 text-champagne" size={22} />
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/76">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <article className="mt-8 border border-champagne/16 bg-midnight/60 p-6 md:p-7">
                  <div className="flex items-center gap-3">
                    <MonitorSmartphone className="text-champagne" size={22} />
                    <h3 className="font-heading text-3xl text-[#fff2c8]">Technical Information</h3>
                  </div>
                  <ul className="mt-5 grid gap-3 text-sm leading-7 text-white/72 sm:grid-cols-2">
                    {technicalInfo.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 bg-champagne" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </section>

              <section className="mt-16 border-t border-champagne/16 pt-12">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-champagne/82">
                  2. How We Use Your Information
                </p>
                <div className="grid gap-3 text-sm leading-7 text-white/72 md:grid-cols-2">
                  {uses.map((item) => (
                    <div key={item} className="flex gap-3 border border-champagne/14 bg-graphite/34 p-4">
                      <span className="mt-2 size-1.5 shrink-0 bg-champagne" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-16 grid gap-6 border-t border-champagne/16 pt-12 lg:grid-cols-2">
                <article className="border border-champagne/16 bg-burgundy/50 p-6 md:p-7">
                  <LockKeyhole className="mb-5 text-champagne" size={24} />
                  <h2 className="font-heading text-3xl text-[#fff2c8]">3. Data Protection</h2>
                  <p className="mt-4 text-sm leading-7 text-white/68">
                    We implement reasonable security measures to protect your personal information
                    from unauthorized access, misuse, or disclosure.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/62">
                    However, no internet transmission can be guaranteed to be completely secure.
                  </p>
                </article>

                <article className="border border-champagne/16 bg-graphite/44 p-6 md:p-7">
                  <Handshake className="mb-5 text-champagne" size={24} />
                  <h2 className="font-heading text-3xl text-[#fff2c8]">4. Information Sharing</h2>
                  <p className="mt-4 text-sm leading-7 text-white/68">
                    We do not sell, rent, or trade your personal information. Information may be
                    shared only with:
                  </p>
                  <ul className="mt-5 grid gap-3 text-sm leading-7 text-white/72">
                    {sharing.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 bg-champagne" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </section>

              <section className="mt-16 grid gap-6 border-t border-champagne/16 pt-12 lg:grid-cols-2">
                <article className="border border-champagne/16 bg-midnight/60 p-6 md:p-7">
                  <Cookie className="mb-5 text-champagne" size={24} />
                  <h2 className="font-heading text-3xl text-[#fff2c8]">5. Cookies</h2>
                  <p className="mt-4 text-sm leading-7 text-white/68">
                    Our website may use cookies and analytics tools to improve user experience and
                    understand visitor behavior. You may choose to disable cookies through your
                    browser settings.
                  </p>
                </article>

                <article className="border border-champagne/16 bg-midnight/60 p-6 md:p-7">
                  <Database className="mb-5 text-champagne" size={24} />
                  <h2 className="font-heading text-3xl text-[#fff2c8]">6. Data Retention</h2>
                  <p className="mt-4 text-sm leading-7 text-white/68">
                    We retain information only for as long as necessary to fulfill business,
                    operational, legal, and contractual obligations.
                  </p>
                </article>
              </section>

              <section className="mt-16 border-t border-champagne/16 pt-12">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-champagne/82">
                  7. Your Rights
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  {rights.map(({ title, body, Icon }) => (
                    <article key={title} className="border border-champagne/16 bg-graphite/40 p-5">
                      <Icon className="mb-4 text-champagne" size={22} />
                      <h3 className="font-heading text-2xl text-[#fff2c8]">{title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/66">{body}</p>
                    </article>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-7 text-white/68">
                  Requests can be submitted through our contact page.
                </p>
              </section>

              <section className="mt-16 border-t border-champagne/16 pt-12">
                <div className="grid gap-6 lg:grid-cols-2">
                  <article className="border border-champagne/16 bg-burgundy/50 p-6 md:p-7">
                    <h2 className="font-heading text-3xl text-[#fff2c8]">
                      8. Updates to this Policy
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-white/68">
                      We may update this Privacy Policy periodically. Changes will be posted on this
                      page with the revised effective date.
                    </p>
                  </article>

                  <article className="border border-champagne/16 bg-graphite/44 p-6 md:p-7">
                    <h2 className="font-heading text-3xl text-[#fff2c8]">9. Contact Us</h2>
                    <p className="mt-4 text-sm leading-7 text-white/68">
                      If you have any questions regarding this Privacy Policy or how your
                      information is handled, please contact Lerk Foods through the details provided
                      on our website.
                    </p>
                  </article>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
