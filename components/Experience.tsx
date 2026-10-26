import { ArrowUpRight } from "lucide-react";
import data, { RESUME_LINK } from "@/src/lib/constants";

function years(tenure: string) {
  const [start, end] = tenure.match(/\d{4}/g) ?? [];
  if (/present/i.test(tenure)) return `${start} – Now`;
  return end === start ? start : `${start} – ${end}`;
}

export default function Experience() {
  return (
    <section className="hero-in mt-16 [--i:2]">
      <h2 className="mb-4 text-muted">Work</h2>
      <ul className="-mx-3">
        {data.experience.companies.map((c) => (
          <li key={c.name}>
            <details className="group rounded-lg open:bg-surface">
              <summary className="flex cursor-pointer list-none items-baseline gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-surface [&::-webkit-details-marker]:hidden">
                <span className="flex min-w-0 flex-col sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="shrink-0 font-medium">{c.name}</span>
                  <span className="text-sm text-muted sm:truncate sm:text-[15px]">{c.role}</span>
                </span>
                <span className="leader" aria-hidden />
                <span className="shrink-0 font-mono text-xs tabular-nums text-muted">{years(c.tenure)}</span>
              </summary>
              <div className="px-3 pb-4 pt-1">
                <ul className="list-disc space-y-2 pl-4 text-sm text-muted marker:text-line">
                  {c.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2 text-xs">
                  <span className="font-mono text-muted">{c.stack.join(" · ")}</span>
                  <a
                    href={c.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-event="experience_link_clicked"
                    data-company={c.name}
                    className="inline-flex items-center gap-0.5 font-medium hover:text-brand"
                  >
                    {c.websiteLink.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                    <ArrowUpRight size={14} strokeWidth={1.5} className="arrow" />
                  </a>
                </div>
              </div>
            </details>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted">
        {data.education.degree}, {data.education.school.split(",")[0]}. {data.awards.join(". ")}.{" "}
        <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" data-event="resume_clicked" className="link">
          Full résumé
        </a>
      </p>
    </section>
  );
}
