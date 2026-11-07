import Link from "next/link";
import { InstagramIcon, LinkedInIcon } from "./SocialIcons";

const FOOTER_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Réalisations" },
  { href: "#processus", label: "Processus" },
  { href: "#a-propos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/lbr_solutions",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://www.linkedin.com/in/alexandre-lebrequier-935b4a203",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-rule)] py-16">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Link href="#accueil" className="flex items-baseline gap-1.5 font-display text-xl">
            <span className="text-accent">LBR</span>
            <span className="text-[0.95rem] text-muted">Solutions</span>
          </Link>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-2 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-rule)] text-ink-2 transition-colors hover:border-[var(--color-accent)] hover:text-accent"
              >
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--color-rule)] pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>LBR Solutions, Alexandre Lebrequier, France. {year}.</p>
          <p>Modélisation &amp; impression 3D sur mesure.</p>
        </div>
      </div>
    </footer>
  );
}
