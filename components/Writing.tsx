import { ArrowUpRight } from "lucide-react";
import { mediumPosts } from "@/src/lib/medium";

const date = (d: string) => new Date(`${d}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

export default async function Writing() {
  const posts = await mediumPosts();
  if (!posts.length) return null;
  return (
    <section className="hero-in mt-16 [--i:3]">
      <h2 className="mb-4 text-muted">Writing</h2>
      <ul className="-mx-3">
        {posts.map((p) => (
          <li key={p.url}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              data-event="blog_post_clicked"
              data-post={p.url.split("/").pop()}
              className="group flex items-baseline gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-surface"
            >
              <span className="min-w-0 flex-1">{p.title}</span>
              <span className="shrink-0 text-sm text-muted">{date(p.date)}</span>
              <ArrowUpRight size={16} strokeWidth={1.5} className="arrow shrink-0 self-center text-muted group-hover:text-foreground" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
