import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact Lerk Foods | Plan Your Event",
  description:
    "Plan your catering event with Lerk Foods. Share your event details and our team will get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <div id="plan-event">
        <SiteNav />
      </div>
      <ContactSection />
      <SiteFooter />
    </>
  );
}
