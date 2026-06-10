import Link from "next/link";
import { Box } from "lucide-react";
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
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Link
            href="#accueil"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Box className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span>
              LBR <span className="text-primary">Solutions</span>
            </span>
          </Link>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
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
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary/40 hover:text-primary"
              >
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} LBR Solutions. Tous droits réservés.</p>
          <p>Modélisation &amp; impression 3D sur mesure.</p>
        </div>
      </div>
    </footer>
  );
}
