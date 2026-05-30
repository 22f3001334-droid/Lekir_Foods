import Image from "next/image";
import { Globe, Mail, MapPin } from "lucide-react";
import { footerDetails } from "@/lib/site-data";

function InstagramIcon() {
  return (
    <svg className="size-[18px]" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="size-[18px]" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <path d="M12.2 6.5h1.6V3.9c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.05v2.28H4.86v2.91H7.5v7.1h3.24v-7.1h2.56l.41-2.91h-2.97V8.1c0-.84.23-1.6 1.46-1.6Z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg className="size-[18px]" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M21.35 11.1h-9.18v2.98h5.27c-.23 1.45-1.59 4.25-5.27 4.25-3.17 0-5.76-2.62-5.76-5.86s2.59-5.86 5.76-5.86c1.8 0 3.01.77 3.7 1.43l2.52-2.43c-1.62-1.51-3.72-2.41-6.22-2.41-5.02 0-9.07 4.15-9.07 9.27s4.05 9.27 9.07 9.27c5.23 0 8.7-3.68 8.7-8.86 0-.6-.07-1.05-.15-1.78Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="size-[18px]" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12.04 2.5A9.43 9.43 0 0 0 2.6 11.9c0 1.66.43 3.28 1.25 4.7l-1.33 4.9 5.02-1.31a9.4 9.4 0 0 0 4.5 1.14h.01a9.43 9.43 0 0 0-.01-18.83Zm0 17.25h-.01a7.82 7.82 0 0 1-3.98-1.09l-.29-.17-2.98.78.79-2.9-.19-.3a7.76 7.76 0 1 1 6.66 3.68Zm4.29-5.82c-.23-.12-1.38-.68-1.59-.76-.21-.08-.36-.12-.52.12-.15.23-.6.76-.74.91-.14.16-.27.18-.5.06-.23-.12-.98-.36-1.87-1.15-.69-.62-1.15-1.38-1.29-1.61-.13-.23-.01-.36.1-.47.1-.1.23-.27.35-.4.12-.14.15-.23.23-.39.08-.16.04-.29-.02-.4-.06-.12-.52-1.25-.71-1.71-.19-.45-.38-.39-.52-.4h-.44c-.15 0-.4.06-.61.29-.21.23-.8.78-.8 1.9s.82 2.2.94 2.36c.12.15 1.62 2.47 3.93 3.46.55.24.98.38 1.31.49.55.17 1.05.15 1.45.09.44-.07 1.38-.56 1.57-1.1.19-.54.19-1.01.13-1.1-.06-.1-.21-.16-.44-.27Z" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-midnight py-12 text-white">
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
            { href: "https://www.instagram.com/lerkfoods", label: "Lerk Foods Instagram", Icon: InstagramIcon },
            { href: "https://www.facebook.com/lerkfoods", label: "Lerk Foods Facebook", Icon: FacebookIcon },
            { href: "https://www.google.com/maps/dir//Lerk+Foods,+Acharya+Tulsi+Rd,+Pallavaram,+Chennai,+Tamil+Nadu+600043/@13.0475255,80.2086732,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a525f84d7432dc5:0x7bbbcb0087e808c9!2m2!1d80.1501576!2d12.9711005?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D", label: "Lerk Foods Google profile", Icon: GoogleIcon },
            { href: "https://wa.me/919363611265", label: "WhatsApp Lerk Foods", Icon: WhatsAppIcon },
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
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
