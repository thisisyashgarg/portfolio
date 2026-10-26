import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import data from "@/src/lib/constants";

export default function Projects() {
  return (
    <section className="hero-in mt-16 [--i:3]">
      <h2 className="mb-4 text-muted">Projects</h2>
      <ul className="-mx-3">
        {data.projects.map((p) => (
          <li key={p.title}>
            <a
              href={p.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              data-event="project_link_clicked"
              data-project={p.title}
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-surface"
            >
              <Image src={p.logo} alt="" width={28} height={28} className="size-7 shrink-0 rounded-md ring-1 ring-line" />
              <span className="shrink-0 font-medium">{p.title}</span>
              <span className="truncate text-muted">{p.blurb}</span>
              <ArrowUpRight size={16} strokeWidth={1.5} className="arrow ml-auto shrink-0 text-muted group-hover:text-foreground" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
