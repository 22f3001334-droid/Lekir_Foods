import type { Metadata } from "next";
import BlogListPage from "@/components/BlogListPage";

export const metadata: Metadata = {
  title: "Journal | Lerk Foods",
  description:
    "Perspectives on hospitality, food, and the art of occasion from Lerk Foods.",
};

export default function BlogPage() {
  return <BlogListPage />;
}
