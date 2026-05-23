import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lerk Foods | Luxury Catering in Chennai",
  description:
    "Lerk Foods delivers premium outdoor catering, corporate catering, banquet dining, and curated menus from Kans One Hotel in Pallavaram, Chennai.",
  keywords: [
    "Lerk Foods",
    "luxury catering Chennai",
    "outdoor catering Chennai",
    "wedding catering Chennai",
    "corporate catering Chennai",
    "Kans One Hotel Pallavaram",
  ],
  openGraph: {
    title: "Lerk Foods | Luxury Catering in Chennai",
    description:
      "Premium catering, banquet dining, and curated menus from Kans One Hotel, Pallavaram.",
    type: "website",
    locale: "en_IN",
    url: "https://www.lerkfoods.com",
    siteName: "Lerk Foods",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
