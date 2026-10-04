import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import data from "@/src/lib/constants";

type Project = (typeof data.projects)[number] & { websiteLabel?: string };

export default function Projects() {
  const projects: Project[] = data.projects;

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <h2 className="reveal text-4xl font-semibold tracking-tighter md:text-5xl">Projects</h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => {
          const featured = i === 0;
          // first spans 2 cols; when the rest is odd, the last spans too so the grid never leaves a gap
          const wide = featured || (i === projects.length - 1 && projects.length % 2 === 0);
          const shot = p.screenshots[0];

          return (
            <article
              key={p.title}
              className={`reveal group flex flex-col overflow-hidden rounded-xl border border-line transition-colors duration-500 hover:border-muted/50 ${
                shot ? "bg-card" : "bg-surface"
              } ${wide ? "md:col-span-2" : ""} ${featured && shot ? "md:flex-row" : ""}`}
            >
              {shot && (
                <div
                  className={`relative aspect-[16/10] overflow-hidden bg-surface ${
                    featured ? "md:aspect-auto md:min-h-[380px] md:w-3/5" : ""
                  }`}
                >
                  <Image
                    src={shot}
                    alt={`${p.title} screenshot`}
                    fill
                    sizes={featured ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                    className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>
              )}

              <div className={`flex flex-1 flex-col gap-4 p-6 md:p-8 ${featured ? "md:justify-end" : ""}`}>
                <h3 className={`font-medium tracking-tight ${featured ? "text-3xl" : "text-2xl"}`}>{p.title}</h3>
                <p className="max-w-[60ch] leading-relaxed text-muted">{p.description}</p>
                <p className="font-mono text-xs text-muted">{p.tags.join(" / ")}</p>
                <div className="mt-auto flex gap-6 pt-2 text-sm font-medium">
                  {p.websiteLink && <ProjectLink href={p.websiteLink} label={p.websiteLabel ?? "Live"} />}
                  {p.codeLink && <ProjectLink href={p.codeLink} label="Code" />}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ProjectLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 transition-colors hover:text-brand"
    >
      {label} <ArrowUpRight size={16} strokeWidth={1.5} className="arrow" />
    </a>
  );
}
