import Link from "next/link";
import { posts } from "@/src/lib/posts";

export default function Writing() {
  return (
    <section className="hero-in mt-16 [--i:3]">
      <h2 className="mb-4 text-muted">Writing</h2>
      <ul className="-mx-3">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              data-event="blog_post_clicked"
              data-post={p.slug}
              className="block rounded-lg px-3 py-2 transition-colors hover:bg-surface"
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
