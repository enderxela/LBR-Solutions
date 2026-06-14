"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles } from "lucide-react";
import { FlyingPrinterIcon } from "@/components/HeroIcons";

const Printer3D = dynamic(() => import("@/components/Printer3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <FlyingPrinterIcon className="h-12 w-12 animate-pulse text-accent" strokeWidth={1.5} />
    </div>
  ),
});

const STATS = [
  { value: "50+", label: "projets réalisés" },
  { value: "0,05 mm", label: "précision d'impression" },
  { value: "24h", label: "pour un devis" },
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden border-b border-border bg-grid bg-radial-fade"
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Modélisation 3D &amp; impression 3D sur mesure
          </div>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Donnez vie à vos idées,{" "}
            <span className="text-primary">couche après couche</span>
          </h1>

          <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-muted">
            LBR Solutions accompagne particuliers et entreprises de la
            conception 3D jusqu&apos;à la pièce finie : prototypes,
            pièces sur mesure, figurines et solutions industrielles
            imprimées avec précision.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Voir nos réalisations
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
            >
              Demander un devis
            </Link>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs text-muted sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden h-[420px] items-center justify-center md:flex">
          <div className="absolute inset-0 -z-10 m-auto h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="h-[420px] w-[420px]">
            <Printer3D />
          </div>
        </div>
      </div>
    </section>
  );
}
