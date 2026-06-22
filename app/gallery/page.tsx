import type { Metadata } from "next";
import GalleryPage from "@/components/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery | Lerk Foods",
  description:
    "A look at the weddings, banquets, and gatherings catered by Lerk Foods across Chennai.",
};

export default function Page() {
  return <GalleryPage />;
}
