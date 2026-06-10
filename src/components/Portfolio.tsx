import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Building2,
  Cog,
  Cpu,
  Lamp,
} from "lucide-react";

const PROJECTS = [
  {
    icon: Cpu,
    title: "Boîtier électronique sur mesure",
    category: "Prototypage industriel",
    description:
      "Boîtier ventilé conçu et imprimé en ABS pour intégrer une carte électronique propriétaire.",
    gradient: "from-primary/30 via-surface to-surface",
  },
  {
    icon: Cog,
    title: "Pièce mécanique de précision",
    category: "Pièces techniques",
    description:
      "Engrenage de remplacement reproduit fidèlement à partir d'une pièce d'origine endommagée.",
    gradient: "from-surface-2 via-surface to-primary/10",
  },
  {
    icon: Building2,
    title: "Maquette architecturale",
    category: "Architecture",
    description:
      "Maquette d'étude à l'échelle imprimée en plusieurs sections pour un cabinet d'architectes.",
    gradient: "from-accent/20 via-surface to-surface",
  },
  {
    icon: Lamp,
    title: "Lampe design imprimée",
    category: "Objets & décoration",
    description:
      "Pièce décorative aux formes organiques, modélisée sur mesure pour s'intégrer à un intérieur.",
    gradient: "from-primary/25 via-surface to-surface",
  },
  {
    icon: Bike,
    title: "Accessoire vélo personnalisé",
    category: "Sport & loisirs",
    description:
      "Support de fixation imprimé en nylon renforcé, conçu pour résister aux vibrations et aux chocs.",
    gradient: "from-surface-2 via-surface to-accent/10",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Réalisations
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Quelques projets imaginés et imprimés par notre équipe
            </h2>
            <p className="mt-4 text-balance text-muted">
              Un aperçu de la diversité des projets que nous accompagnons,
              du prototype industriel à l&apos;objet décoratif unique.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Discuter de votre projet
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary/40"
            >
              <div
                className={`flex h-44 items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <project.icon
                  className="h-16 w-16 text-foreground transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.25}
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {project.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
