export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
};

export const posts: Post[] = [
  {
    slug: "why-great-food-alone-is-not-enough",
    title:
      "Why Great Food Alone Is Not Enough: Creating Memorable Hospitality Experiences with Lerk Foods",
    excerpt:
      "In today's competitive hospitality landscape, serving delicious food is only part of the equation. Guests remember how an experience made them feel — and that feeling is what defines truly exceptional catering.",
    date: "May 29, 2026",
    category: "Hospitality",
    image: "/images/event_experience.png",
    readTime: "6 min read",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
