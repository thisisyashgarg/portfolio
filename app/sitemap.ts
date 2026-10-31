import type { MetadataRoute } from "next";
import { posts } from "@/src/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://thisisyashgarg.com", changeFrequency: "monthly", priority: 1 },
    ...posts.map((p) => ({ url: `https://thisisyashgarg.com/blog/${p.slug}`, lastModified: p.date })),
  ];
}
