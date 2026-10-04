import { ArrowUpRight, Plus } from "lucide-react";
import data from "@/src/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="reveal lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <h2 className="text-4xl font-semibold tracking-tighter md:text-5xl">Experience</h2>
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
            <p>
              <span className="block font-medium text-foreground">{data.education.degree}</span>
              {data.education.school}, {data.education.years}
            </p>
            {data.awards.map((a) => (
              <p key={a} className="font-medium text-foreground">
                {a}
              </p>
            ))}
          </div>
        </div>

        <div className="border-t border-line lg:col-span-8">
          {data.experience.companies.map((c, i) => (
            <details key={c.name} open={i === 0} className="reveal group border-b border-line">
              <summary className="flex cursor-pointer list-none flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 [&::-webkit-details-marker]:hidden">
                <span className="company">
                  <span className="block text-2xl font-medium tracking-tight">{c.name}</span>
                  {c.role && <span className="mt-1 block text-sm text-muted">{c.role}</span>}
                </span>
                <span className="flex items-center gap-4 font-mono text-sm text-muted">
                  {c.tenure}
                  <Plus size={18} strokeWidth={1.5} className="shrink-0 transition-transform group-open:rotate-45" />
                </span>
              </summary>
              <ul className="max-w-[65ch] list-disc space-y-3 pb-6 pl-5 leading-relaxed text-muted marker:text-brand">
                {c.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a
                href={c.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-8 inline-flex items-center gap-1 text-sm font-medium hover:text-brand"
              >
                {c.websiteLink.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                <ArrowUpRight size={16} strokeWidth={1.5} className="arrow" />
              </a>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
