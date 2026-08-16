import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personal } from "@/lib/data";

const socials = [
  { icon: FiGithub, href: personal.github, label: "GitHub" },
  { icon: FiLinkedin, href: personal.linkedin, label: "LinkedIn" },
  { icon: FiMail, href: `mailto:${personal.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-center text-sm text-muted sm:text-left">
          © 2026 {personal.name.toUpperCase()}. All Rights Reserved.
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> · </span>
          Designed with <span className="text-accent">❤</span> using React.
        </p>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:text-cyan hover:shadow-glow-cyan"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
