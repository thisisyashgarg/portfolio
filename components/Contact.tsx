"use client";

import { useState } from "react";
import posthog from "posthog-js";
import data from "@/src/lib/constants";

const socials = [
  { href: data.social.github, label: "GitHub" },
  { href: data.social.linkedin, label: "LinkedIn" },
  { href: data.social.twitter, label: "Twitter" },
  { href: data.social.medium, label: "Medium" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    posthog.capture("email_copied");
    navigator.clipboard.writeText(data.social.email).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      () => (location.href = `mailto:${data.social.email}`),
    );
  }

  return (
    <footer className="hero-in mt-16 [--i:4]">
      <h2 className="mb-4 text-muted">Contact</h2>
      <p className="text-muted">
        Reach me by{" "}
        <button onClick={copyEmail} className="link">
          <span aria-live="polite">{copied ? "copied!" : "email"}</span>
        </button>
        {socials.map((s, i) => (
          <span key={s.label}>
            {i === socials.length - 1 ? ", or " : ", "}
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              data-event="social_clicked"
              data-network={s.label}
              className="link"
            >
              {s.label}
            </a>
          </span>
        ))}
        .
      </p>
    </footer>
  );
}
