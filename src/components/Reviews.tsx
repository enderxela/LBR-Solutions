import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";

const GOOGLE_REVIEW_URL = "https://g.page/r/CW8B7P5GoN7PEBM/review";

const REVIEWS = [
  {
    name: "Thomas R.",
    date: "mai 2025",
    rating: 5,
    text: "Très satisfait de la pièce imprimée, correspond exactement au fichier fourni. Délai rapide et communication claire du début à la fin.",
  },
  {
    name: "Sophie M.",
    date: "mars 2025",
    rating: 5,
    text: "J'avais besoin d'une pièce de remplacement introuvable dans le commerce. LBR Solutions l'a modélisée et imprimée en quelques jours. Résultat impeccable.",
  },
  {
    name: "Marc L.",
    date: "janvier 2025",
    rating: 5,
    text: "Prototype fonctionnel livré rapidement, bon conseil sur le choix du matériau. Je recommande sans hésiter pour tout projet d'impression 3D.",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? "fill-primary text-primary" : "fill-surface-2 text-surface-2"}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="avis" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* En-tête */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Avis clients
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Ce que disent nos clients
            </h2>
            <p className="mt-4 text-balance text-muted">
              Chaque projet est une collaboration. Votre retour nous aide à progresser et aide d&apos;autres clients à nous faire confiance.
            </p>
          </div>

          {/* Bouton laisser un avis */}
          <Link
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <Star className="h-4 w-4" />
            Laisser un avis Google
            <ExternalLink className="h-3.5 w-3.5 opacity-80" />
          </Link>
        </div>

        {/* Cartes avis */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6"
            >
              <StarRow count={review.rating} />
              <p className="flex-1 text-sm leading-relaxed text-muted">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm font-semibold">{review.name}</span>
                <span className="text-xs text-muted">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bas de page */}
        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-semibold">Vous avez travaillé avec nous ?</p>
            <p className="mt-1 text-sm text-muted">
              Un avis Google prend moins d&apos;une minute et nous aide énormément.
            </p>
          </div>
          <Link
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Star className="h-4 w-4" />
            Déposer mon avis
          </Link>
        </div>

      </div>
    </section>
  );
}
