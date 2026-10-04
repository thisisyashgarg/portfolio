import { ArrowUpRight } from "lucide-react";
import data from "@/src/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 md:pb-32 lg:px-8">
      <div className="reveal rounded-xl bg-surface px-6 py-16 md:px-16 md:py-24">
        <h2 className="max-w-[14ch] text-4xl font-semibold leading-[1.05] tracking-tighter md:text-6xl">
          Let&apos;s work together.
        </h2>
        <a
          href={`mailto:${data.social.email}`}
          className="mt-10 inline-flex items-center gap-2 break-all text-xl font-medium text-brand md:text-3xl"
        >
          <span className="underline-grow pb-1">{data.social.email}</span>
          <ArrowUpRight className="arrow shrink-0" size={28} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
