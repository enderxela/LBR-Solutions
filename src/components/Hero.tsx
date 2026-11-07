import Link from "next/link";

export default function Hero() {
  return (
    <section id="accueil" className="bg-paper">
      <div className="container flex min-h-[calc(100dvh-4.5rem)] flex-col items-center justify-center py-20 text-center">
        <h1 className="max-w-[18ch] font-display text-display tracking-[var(--tracking-display)] text-ink text-balance">
          Des pièces pensées et imprimées sur mesure
        </h1>

        <p className="lead mt-6 max-w-[44ch] text-ink-2">
          De l&apos;esquisse à la pièce livrée, conçue et imprimée au même
          endroit.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="#contact" className="btn">
            Demander un devis
          </Link>
          <Link href="#portfolio" className="btn btn--quiet">
            Voir les réalisations
          </Link>
        </div>
      </div>
    </section>
  );
}
