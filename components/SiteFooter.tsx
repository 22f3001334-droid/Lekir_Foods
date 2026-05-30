import Image from "next/image";
import { Globe, Mail, MapPin, Phone, Send, Share2 } from "lucide-react";
import { footerDetails } from "@/lib/site-data";

export default function SiteFooter() {
  return (
    <footer className="bg-midnight py-12">
      <div className="container-shell grid gap-8 border-t border-champagne/16 pt-10 lg:grid-cols-[1fr_1.4fr_0.6fr]">
        <div>
          <Image
            src="/images/lerk-gold-2.png"
            alt="Lerk Foods"
            width={144}
            height={144}
            className="h-28 w-28 object-contain"
          />
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/58">
            Luxury catering, curated menus, and hotel dining from Lerk Foods.
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
