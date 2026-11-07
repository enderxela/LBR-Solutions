const VALUES = [
  {
    title: "Précision",
    description:
      "Des tolérances maîtrisées et un contrôle qualité à chaque étape pour des pièces conformes à vos plans.",
  },
  {
    title: "Innovation",
    description:
      "Une veille constante sur les matériaux et les technologies d'impression pour proposer la meilleure solution.",
  },
  {
    title: "Qualité",
    description:
      "Des finitions soignées et des matériaux sélectionnés pour la durabilité de chaque pièce produite.",
  },
  {
    title: "Réactivité",
    description:
      "Des délais courts et une communication claire, du premier devis jusqu'à la livraison finale.",
  },
];

export default function About() {
  return (
    <section id="a-propos" className="border-t border-[var(--color-rule)] py-28 md:py-36">
      <div className="container grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-display text-section text-ink">
            L&apos;atelier où vos idées prennent forme
          </h2>
          <p className="mt-6 leading-relaxed text-ink-2">
            LBR Solutions est un atelier spécialisé en modélisation et
            impression 3D, au service des particuliers, artisans et
            entreprises. Notre équipe combine maîtrise des outils de
            conception assistée par ordinateur et expertise des technologies
            d&apos;impression FDM pour transformer vos idées en objets
            concrets.
          </p>
          <p className="mt-4 leading-relaxed text-ink-2">
            Formé à l&apos;ESILV (école d&apos;ingénieurs), je conçois chaque
            pièce moi-même avant de l&apos;imprimer : vous ne passez pas
            seulement une commande à une imprimante, mais à quelqu&apos;un
            qui comprend la contrainte technique derrière votre besoin.
          </p>
          <p className="mt-4 leading-relaxed text-ink-2">
            Que vous ayez un fichier 3D prêt à imprimer ou simplement une
            idée à concevoir de zéro, je vous propose un accompagnement sur
            mesure : conseils techniques, choix des matériaux et
            optimisation du design.
          </p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="border-t border-[var(--color-rule)]">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="grid gap-x-8 gap-y-2 border-b border-[var(--color-rule)] py-6 sm:grid-cols-12"
              >
                <h3 className="font-display text-title text-ink sm:col-span-4">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-2 sm:col-span-8">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
