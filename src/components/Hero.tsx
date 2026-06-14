import Link from "next/link";
import { ArrowRight, Cog, Layers, Sparkles } from "lucide-react";
import { FlyingPrinterIcon, WireframeCubeIcon } from "@/components/HeroIcons";

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

        <div className="relative hidden h-[420px] md:block">
          <div
            className="animate-float absolute left-6 top-4 flex h-40 w-40 rotate-[-8deg] items-center justify-center rounded-3xl border border-border bg-surface shadow-2xl shadow-black/40"
            style={{ "--rot": "-8deg" } as React.CSSProperties}
          >
            <WireframeCubeIcon className="h-16 w-16 text-primary" strokeWidth={1.5} />
          </div>

          <div
            className="animate-float absolute right-4 top-24 flex h-32 w-32 rotate-[6deg] items-center justify-center rounded-3xl border border-border bg-surface shadow-2xl shadow-black/40"
            style={{ "--rot": "6deg", animationDelay: "1.2s" } as React.CSSProperties}
          >
            <FlyingPrinterIcon className="h-12 w-12 text-accent" strokeWidth={1.5} />
          </div>

          <div
            className="animate-float absolute bottom-16 left-20 flex h-36 w-36 rotate-[4deg] items-center justify-center rounded-3xl border border-border bg-surface shadow-2xl shadow-black/40"
            style={{ "--rot": "4deg", animationDelay: "0.6s" } as React.CSSProperties}
          >
            <Layers className="h-14 w-14 text-foreground" strokeWidth={1.5} />
          </div>

          <div
            className="animate-float absolute bottom-4 right-12 flex h-28 w-28 rotate-[-5deg] items-center justify-center rounded-3xl border border-border bg-surface shadow-2xl shadow-black/40"
            style={{ "--rot": "-5deg", animationDelay: "1.8s" } as React.CSSProperties}
          >
            <Cog className="h-10 w-10 text-primary" strokeWidth={1.5} />
          </div>

          <div className="absolute inset-0 -z-10 m-auto h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
