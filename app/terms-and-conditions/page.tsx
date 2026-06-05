import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Terms & Conditions | Lerk Foods",
  description:
    "Terms and conditions governing use of the Lerk Foods website, catering enquiries, bookings, payments, cancellations, and hospitality services.",
};

type ContentBlock = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: ContentBlock[];
};

const termsSections: ContentBlock[] = [
  {
    title: "1. About Lerk Foods",
    paragraphs: [
      "Lerk Foods is a catering and hospitality service provider offering outdoor catering, banquet dining, wedding catering, corporate catering, event catering, and related hospitality services.",
    ],
  },
  {
    title: "2. Use of Website",
    paragraphs: ["You agree to use this website only for lawful purposes.", "You must not:"],
    bullets: [
      "Use the website for unlawful or fraudulent activities.",
      "Attempt unauthorized access to systems, servers, or databases.",
      "Upload malicious software or harmful content.",
      "Misrepresent your identity.",
      "Copy, reproduce, distribute, or exploit website content without written permission.",
    ],
  },
  {
    title: "3. Service Enquiries",
    paragraphs: [
      "Submitting an enquiry through our website does not constitute a confirmed booking.",
      "All services remain subject to:",
    ],
    bullets: [
      "Availability",
      "Venue suitability",
      "Event requirements",
      "Final quotation approval",
      "Advance payment",
      "Written confirmation from Lerk Foods",
      "Lerk Foods reserves the right to decline any booking request at its sole discretion.",
    ],
  },
  {
    title: "4. Quotations & Pricing",
    paragraphs: [
      "All quotations are valid only for the period specified in the quotation document.",
      "Pricing may vary depending on:",
    ],
    bullets: [
      "Guest count",
      "Menu selection",
      "Venue location",
      "Event duration",
      "Service requirements",
      "Staffing requirements",
      "Equipment requirements",
      "Prices remain subject to change until a booking has been formally confirmed.",
      "Lerk Foods reserves the right to revise pricing due to fluctuations in raw material costs, LPG prices, fuel costs, taxation changes, supply shortages, or other operational expenses.",
    ],
  },
  {
    title: "5. Booking Confirmation",
    paragraphs: ["A booking is considered confirmed only upon:"],
    bullets: [
      "Acceptance of the quotation",
      "Receipt of the required advance payment",
      "Written confirmation from Lerk Foods",
      "Failure to make payments within agreed timelines may result in cancellation of the booking.",
    ],
  },
  {
    title: "6. Banquet Catering Terms & Conditions",
    paragraphs: [
      "The following provisions apply specifically to banquet, buffet, corporate, wedding, and event catering services provided by Lerk Foods.",
    ],
    subsections: [
      {
        title: "6.1 Order Confirmation & Payment Schedule",
        paragraphs: ["All orders must be placed at least 48 hours before the event.", "Payment schedule:"],
        bullets: [
          "50% advance payment to confirm booking",
          "25% payable 24 hours before the event",
          "Remaining 25% payable immediately upon completion of service or delivery",
          "Bookings are confirmed only upon receipt of the advance payment.",
          "A dedicated Lerk Foods representative may be assigned to coordinate event requirements from booking confirmation until completion.",
          "Lerk Foods shall not be responsible for incidents, disputes, injuries, or damages arising from the conduct of guests attending the event.",
        ],
      },
      {
        title: "6.2 Minimum Order Requirement",
        paragraphs: ["A minimum order of 20 guests (pax) is required for catering services."],
      },
      {
        title: "6.3 Final Guest Count",
        paragraphs: [
          "The final guest count must be confirmed between 24 and 48 hours prior to the event.",
          "Billing will be based on the final confirmed guest count.",
          "If actual attendance is lower than the confirmed number, charges will still apply based on the confirmed guest count.",
          "Additional guests may incur additional charges and are subject to operational availability.",
        ],
      },
      {
        title: "6.4 Cancellation Policy",
        paragraphs: ["All cancellations must be made in writing.", "Catering-specific cancellation charges:"],
        bullets: [
          "Cancellation more than 48 hours before the event: 25% of the total booking value will be charged.",
          "Cancellation within 24 hours before the event: 50% of the total booking value will be charged.",
          "Same-day cancellation: 100% of the total booking value remains payable and is non-refundable.",
          "Refunds, where applicable, shall be processed within a reasonable period.",
        ],
      },
      {
        title: "6.5 Menu Changes & Customisation",
        paragraphs: [
          "Menus shall be considered final once approved.",
          "Menu modifications within 24 hours of the event may not be accepted.",
          "Special menus, premium ingredients, dietary accommodations, or custom requests may incur additional charges.",
          "Lerk Foods reserves the right to substitute unavailable ingredients with suitable alternatives while maintaining quality standards.",
        ],
      },
      {
        title: "6.6 Standard Service Inclusions",
        paragraphs: ["Unless otherwise stated in the quotation, standard catering services include:"],
        bullets: ["Food preparation", "Standard packing", "Buffet setup (where agreed)", "Basic food presentation"],
      },
      {
        title: "6.7 Services Not Included",
        paragraphs: [
          "The following are not included unless specifically mentioned in the quotation and may attract additional charges:",
        ],
        bullets: [
          "Service staff",
          "Live cooking stations",
          "Crockery",
          "Cutlery",
          "Glassware",
          "Decorative elements",
          "Transportation",
          "Logistics",
          "Fuel surcharges",
          "Equipment rental",
        ],
      },
      {
        title: "6.8 Transportation & Logistics",
        paragraphs: [
          "Transportation charges are calculated based on distance, venue accessibility, and operational requirements.",
          "Additional charges may apply for:",
        ],
        bullets: [
          "Long-distance travel",
          "Remote locations",
          "Multiple delivery locations",
          "Late-night events",
          "Large-scale events",
        ],
      },
      {
        title: "6.9 Service Duration",
        paragraphs: [
          "Standard buffet service is provisioned for approximately 3 to 4 hours unless otherwise agreed.",
          "Additional service hours will be billed separately.",
        ],
      },
      {
        title: "6.10 Equipment & Damages",
        paragraphs: [
          "The client shall be responsible for any loss, theft, misuse, or damage to catering equipment, serving utensils, crockery, cutlery, decor items, furniture, or glassware supplied by Lerk Foods.",
          "Replacement or repair costs may be charged accordingly.",
          "A refundable security deposit may be collected where applicable.",
        ],
      },
      {
        title: "6.11 Food Safety & Responsibility",
        paragraphs: [
          "Lerk Foods guarantees food quality and safety at the time of preparation, delivery, and service.",
          "Responsibility transfers to the client upon completion of delivery or service.",
          "Lerk Foods shall not be liable for issues arising from:",
        ],
        bullets: [
          "Improper storage",
          "Delayed consumption",
          "Reheating",
          "Mishandling by guests",
          "Transportation by unauthorized persons",
        ],
      },
      {
        title: "6.12 Leftover Food Policy",
        paragraphs: [
          "Any surplus food remaining after the event may be retained by the client at their own discretion and responsibility.",
          "Once food has been handed over to the client, Lerk Foods assumes no responsibility for storage, transportation, reheating, or subsequent consumption.",
        ],
      },
      {
        title: "6.13 Food Allergy & Dietary Disclaimer",
        paragraphs: [
          "Food is prepared in shared facilities where allergens may be present.",
          "We cannot guarantee complete absence of allergens including:",
        ],
        bullets: [
          "Dairy",
          "Eggs",
          "Nuts",
          "Peanuts",
          "Soy",
          "Wheat",
          "Gluten",
          "Seafood",
          "Shellfish",
          "Clients must inform Lerk Foods of any dietary restrictions or allergies before the event.",
          "Lerk Foods shall not be liable for allergic reactions arising from undisclosed dietary requirements or unavoidable cross-contamination.",
        ],
      },
      {
        title: "6.14 Payment Methods & Taxes",
        paragraphs: ["Accepted payment methods include:"],
        bullets: [
          "UPI",
          "Bank Transfer",
          "Cash",
          "Other approved methods",
          "GST and all applicable government taxes shall be charged in addition to the quoted amount unless otherwise stated.",
        ],
      },
    ],
  },
  {
    title: "7. Client Responsibilities",
    paragraphs: ["Clients are responsible for:"],
    bullets: [
      "Providing accurate event information",
      "Ensuring venue accessibility",
      "Informing Lerk Foods of venue restrictions",
      "Obtaining necessary permits or permissions",
      "Communicating food allergies and dietary requirements",
      "Additional costs arising from inaccurate information may be charged separately.",
    ],
  },
  {
    title: "8. Photography & Marketing Usage",
    paragraphs: [
      "Lerk Foods may photograph or record portions of events for portfolio, website, social media, promotional, and marketing purposes unless the client requests otherwise in writing before the event.",
      "Reasonable privacy and confidentiality requests will be respected.",
    ],
  },
  {
    title: "9. Intellectual Property",
    paragraphs: ["All content on this website, including:"],
    bullets: [
      "Logos",
      "Branding",
      "Graphics",
      "Images",
      "Videos",
      "Text",
      "Designs",
      "Marketing materials",
      "is the property of Lerk Foods or its licensors and is protected by applicable intellectual property laws.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    paragraphs: ["To the fullest extent permitted by law, Lerk Foods shall not be liable for:"],
    bullets: [
      "Website interruptions",
      "Technical failures",
      "Loss of data",
      "Indirect damages",
      "Consequential losses",
      "Loss of profits",
      "Event disruptions beyond our reasonable control",
      "Total liability shall not exceed the amount paid by the client for the affected services.",
    ],
  },
  {
    title: "11. Force Majeure",
    paragraphs: [
      "Lerk Foods shall not be liable for delays or inability to perform services due to circumstances beyond reasonable control, including:",
    ],
    bullets: [
      "Natural disasters",
      "Extreme weather",
      "Government restrictions",
      "Public health emergencies",
      "Traffic disruptions",
      "Labor disputes",
      "Fuel shortages",
      "Supply chain disruptions",
      "Utility failures",
      "Civil disturbances",
      "In such circumstances, the client remains liable for costs already incurred and, where applicable, agreed event charges.",
    ],
  },
  {
    title: "12. Third-Party Services",
    paragraphs: [
      "Lerk Foods shall not be responsible for the acts, omissions, delays, or performance of third-party vendors, venues, decorators, entertainers, equipment providers, or service partners unless expressly agreed otherwise in writing.",
    ],
  },
  {
    title: "13. Privacy",
    paragraphs: ["Your use of this website is also governed by our Privacy Policy and Cookie Policy."],
  },
  {
    title: "14. Changes to Terms",
    paragraphs: [
      "Lerk Foods reserves the right to update or modify these Terms & Conditions at any time.",
      "Updated versions become effective immediately upon publication on the website.",
    ],
  },
  {
    title: "15. Governing Law",
    paragraphs: [
      "These Terms & Conditions shall be governed and interpreted in accordance with the laws of India.",
      "Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu, India.",
    ],
  },
  {
    title: "16. Contact Information",
    paragraphs: [
      "Lerk Foods",
      "Premium Catering & Hospitality Services",
      "Address: 8/100, Acharya Tulsi Road, Pallavaram, Chennai, Tamil Nadu - 600043",
      "Phone: +91 93636 11265",
      "Email: lerkfoods@gmail.com",
      "We will make reasonable efforts to respond to all enquiries in a timely manner.",
    ],
  },
];

function LegalSection({ section, nested = false }: { section: ContentBlock; nested?: boolean }) {
  return (
    <section className={nested ? "mt-8" : "border-t border-champagne/16 py-9 first:border-t-0 first:pt-0"}>
      <h2
        className={
          nested
            ? "font-heading text-2xl text-[#fff2c8]"
            : "font-heading text-3xl text-[#fff2c8] md:text-4xl"
        }
      >
        {section.title}
      </h2>
      {section.paragraphs ? (
        <div className="mt-5 grid gap-4 text-sm leading-7 text-white/72 md:text-base md:leading-8">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}
      {section.bullets ? (
        <ul className="mt-5 grid gap-3 text-sm leading-7 text-white/72 md:text-base">
          {section.bullets.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 bg-champagne" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {section.subsections ? (
        <div className="mt-8">
          {section.subsections.map((subsection) => (
            <LegalSection key={subsection.title} section={subsection} nested />
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-midnight text-white">
      <SiteNav />
      <section className="relative overflow-hidden border-b border-champagne/12 bg-burgundy px-6 py-20 md:px-10 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,210,138,0.12),transparent_34rem)]" />
        <div className="relative mx-auto max-w-[1180px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-champagne">
            Legal
          </p>
          <h1 className="luxury-heading text-5xl text-[#fff6d8] md:text-7xl">
            Terms & Conditions
          </h1>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-champagne/80">
            Last Updated: June 2026
          </p>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/72">
            <p>
              Welcome to Lerk Foods. These Terms & Conditions govern your use of our website and
              services. By accessing this website, submitting enquiries, or engaging our catering
              and hospitality services, you agree to comply with and be bound by these Terms &
              Conditions.
            </p>
            <p>
              If you do not agree with any part of these Terms, please discontinue use of our
              website and services.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[920px]">
          {termsSections.map((section) => (
            <LegalSection key={section.title} section={section} />
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
