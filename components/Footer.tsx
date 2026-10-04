import { Github, Linkedin, Twitter } from "lucide-react";
import data from "@/src/lib/constants";

const socials = [
  { href: data.social.github, label: "GitHub", Icon: Github },
  { href: data.social.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: data.social.twitter, label: "Twitter", Icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-8 text-sm text-muted sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {data.name}
        </p>
        <div className="flex gap-5">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors hover:text-foreground"
            >
              <Icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
