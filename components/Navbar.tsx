"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { RESUME_LINK } from "@/src/lib/constants";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-bar fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="font-medium tracking-tight">
          Yash Garg
        </a>

        <div className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="underline-grow text-muted transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <ResumeButton />
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-5 border-t border-line px-4 py-6 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg">
              {l.label}
            </a>
          ))}
          <ResumeButton />
        </div>
      )}
    </header>
  );
}

function ResumeButton() {
  return (
    <a
      href={RESUME_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="self-start rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-px active:scale-[0.98]"
    >
      Resume
    </a>
  );
}
