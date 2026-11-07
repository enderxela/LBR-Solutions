"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Réalisations" },
  { href: "#processus", label: "Processus" },
  { href: "#estimateur", label: "Devis instantané" },
  { href: "#a-propos", label: "À propos" },
  { href: "#avis", label: "Avis" },
  { href: "#dev-web", label: "Autres projets" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[var(--z-sticky-nav)] border-b border-[var(--color-rule)] bg-paper-2">
      <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-6 xl:px-16">
        <Link
          href="#accueil"
          className="flex items-baseline gap-1.5 font-display text-xl text-ink"
          onClick={() => setOpen(false)}
        >
          <span className="text-accent">LBR</span>
          <span className="text-[0.95rem] text-muted">Solutions</span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm text-ink-2 transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link href="#contact" className="btn">
            Demander un devis
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-[var(--radius-pill)] border border-[var(--color-rule)] p-2 text-ink xl:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[var(--color-rule)] bg-paper-2 px-6 py-4 xl:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm text-ink-2 transition-colors hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#contact" className="btn mt-2 w-full" onClick={() => setOpen(false)}>
                Demander un devis
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
