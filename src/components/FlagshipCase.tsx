import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FACTS = [
  { label: "Client", value: "Hôtel Louis Vuitton, Paris" },
  { label: "Adresse", value: "103 avenue des Champs-Élysées" },
  { label: "Partenaire", value: "un atelier suisse" },
  { label: "Réalisation", value: "l'ensemble des boutons de monte-charges" },
];

export default function FlagshipCase() {
  return (
    <section className="border-t border-[var(--color-rule)] bg-paper-2 py-28 md:py-36">
      <div className="container">
        <h2 className="font-display text-display-s max-w-[20ch] text-ink text-balance">
          Les boutons de monte-charges de l&apos;hôtel Louis Vuitton.
        </h2>

        <p className="lead mt-6 max-w-[52ch] text-ink-2">
          En collaboration avec un atelier suisse, LBR Solutions a conçu et
          produit l&apos;intégralité des boutons de monte-charges de
          l&apos;hôtel, au 103 avenue des Champs-Élysées à Paris.
        </p>

        <dl className="mt-12 grid gap-x-8 gap-y-6 border-t border-[var(--color-rule)] pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((fact) => (
            <div key={fact.label}>
              <dt className="text-sm text-muted">{fact.label}</dt>
              <dd className="mt-1 text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <Link href="#contact" className="btn btn--quiet mt-12">
          Discuter d&apos;un projet similaire
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
