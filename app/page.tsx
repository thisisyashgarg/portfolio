import Image from "next/image";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import data, { PROFILE_PIC } from "@/src/lib/constants";

export default function Home() {
  return (
    <main className="mx-auto max-w-xl px-4 py-16 text-[15px] leading-relaxed sm:px-6 sm:py-28">
      <header className="hero-in flex items-center gap-4">
        <Image
          src={PROFILE_PIC}
          alt={`Portrait of ${data.name}`}
          width={48}
          height={48}
          priority
          className="size-12 rounded-full bg-surface object-cover ring-1 ring-line"
        />
        <div>
          <h1 className="font-medium">{data.name}</h1>
          <p className="text-muted">
            Lead Engineer at{" "}
            <a href="https://clinsight.ai/" target="_blank" rel="noopener noreferrer" className="link">
              Clinsight AI
            </a>
          </p>
        </div>
      </header>

      <section className="hero-in mt-12 space-y-4 text-muted [--i:1]">
        {data.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </section>

      <Experience />
      <Projects />
      <Writing />
      <Contact />
    </main>
  );
}
