function WhatsAppIcon() {
  return (
    <svg className="size-7" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12.04 2.5A9.43 9.43 0 0 0 2.6 11.9c0 1.66.43 3.28 1.25 4.7l-1.33 4.9 5.02-1.31a9.4 9.4 0 0 0 4.5 1.14h.01a9.43 9.43 0 0 0-.01-18.83Zm0 17.25h-.01a7.82 7.82 0 0 1-3.98-1.09l-.29-.17-2.98.78.79-2.9-.19-.3a7.76 7.76 0 1 1 6.66 3.68Zm4.29-5.82c-.23-.12-1.38-.68-1.59-.76-.21-.08-.36-.12-.52.12-.15.23-.6.76-.74.91-.14.16-.27.18-.5.06-.23-.12-.98-.36-1.87-1.15-.69-.62-1.15-1.38-1.29-1.61-.13-.23-.01-.36.1-.47.1-.1.23-.27.35-.4.12-.14.15-.23.23-.39.08-.16.04-.29-.02-.4-.06-.12-.52-1.25-.71-1.71-.19-.45-.38-.39-.52-.4h-.44c-.15 0-.4.06-.61.29-.21.23-.8.78-.8 1.9s.82 2.2.94 2.36c.12.15 1.62 2.47 3.93 3.46.55.24.98.38 1.31.49.55.17 1.05.15 1.45.09.44-.07 1.38-.56 1.57-1.1.19-.54.19-1.01.13-1.1-.06-.1-.21-.16-.44-.27Z" />
    </svg>
  );
}

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="http://wa.me/919363611265"
      aria-label="Chat with Lerk Foods on WhatsApp"
      title="Chat with Lerk Foods on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[60] inline-flex size-14 items-center justify-center rounded-full border border-white/10 bg-black text-white shadow-[0_12px_34px_rgba(0,0,0,0.38)] transition hover:-translate-y-0.5 hover:bg-[#101010] focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-midnight sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon />
    </a>
  );
}
