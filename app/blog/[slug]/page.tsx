import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost } from "@/lib/blog-data";
import BlogPostPage from "@/components/BlogPostPage";

export function generateStaticParams() {
  return [{ slug: "why-great-food-alone-is-not-enough" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return <BlogPostPage slug={slug} />;
}
