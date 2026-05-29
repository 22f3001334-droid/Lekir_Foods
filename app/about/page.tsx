import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About Lerk Foods | Premium Catering in Chennai",
  description:
    "The story, philosophy, and vision behind Lerk Foods — premium catering and dining from Kans One Hotel, Pallavaram, Chennai.",
};

export default function Page() {
  return <AboutPage />;
}
