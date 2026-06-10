import { Award, Lightbulb, Target, Zap } from "lucide-react";

const VALUES = [
  {
    icon: Target,
    title: "Précision",
    description:
      "Des tolérances maîtrisées et un contrôle qualité à chaque étape pour des pièces conformes à vos plans.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Une veille constante sur les matériaux et les technologies d'impression pour proposer la meilleure solution.",
  },
  {
    icon: Award,
    title: "Qualité",
    description:
      "Des finitions soignées et des matériaux sélectionnés pour la durabilité de chaque pièce produite.",
  },
  {
    icon: Zap,
    title: "Réactivité",
    description:
      "Des délais courts et une communication claire, du premier devis jusqu'à la livraison finale.",
  },
];

export default function About() {
  return (
    <section id="a-propos" className="border-b border-border py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            À propos
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            L&apos;atelier où vos idées prennent forme
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            LBR Solutions est un atelier spécialisé en modélisation et
            impression 3D, au service des particuliers, artisans et
            entreprises. Notre équipe combine maîtrise des outils de
            conception assistée par ordinateur et expertise des technologies
            d&apos;impression FDM pour transformer vos idées en
            objets concrets.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Que vous ayez un fichier 3D prêt à imprimer ou simplement une
            idée à concevoir de zéro, nous vous proposons un accompagnement
            sur mesure : conseils techniques, choix des matériaux et
            optimisation du design pour garantir un résultat à la hauteur
            de vos attentes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-primary">
                <value.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
