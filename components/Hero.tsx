import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import data, { PROFILE_PIC, RESUME_LINK } from "@/src/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto grid min-h-[100dvh] max-w-7xl items-center gap-12 px-4 pt-24 pb-16 sm:px-6 lg:grid-cols-12 lg:px-8"
    >
      <div className="lg:col-span-7">
        <h1 className="hero-in text-5xl font-semibold leading-[1.02] tracking-tighter md:text-6xl lg:text-7xl">
          {data.name}
          <span className="block text-muted">Full stack developer.</span>
        </h1>
        <p className="hero-in mt-6 max-w-md text-lg leading-relaxed text-muted [--i:1]">
          I build web and mobile products for early-stage startups.
        </p>
        <div className="hero-in mt-10 flex flex-wrap gap-3 [--i:2]">
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background transition-transform hover:-translate-y-px active:scale-[0.98]"
          >
            Resume <ArrowUpRight size={18} strokeWidth={1.5} className="arrow" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium transition-colors hover:border-foreground active:scale-[0.98]"
          >
            View projects <ArrowDownRight size={18} strokeWidth={1.5} className="arrow arrow-down" />
          </a>
        </div>
      </div>

      <div className="hero-photo hero-in w-full max-w-xs [--i:1] sm:max-w-sm lg:col-span-5 lg:ml-auto">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface">
          <Image
            src={PROFILE_PIC}
            alt={`Portrait of ${data.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 384px, 320px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
