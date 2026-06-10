import {
  Boxes,
  Lightbulb,
  Printer,
  Rocket,
  Wrench,
} from "lucide-react";

const SERVICES = [
  {
    icon: Boxes,
    title: "Modélisation 3D sur mesure",
    description:
      "Conception CAO et modélisation organique à partir de vos plans, croquis ou simplement de votre idée, prête pour l'impression ou l'industrialisation.",
  },
  {
    icon: Printer,
    title: "Impression 3D FDM",
    description:
      "Pièces robustes en PLA, PETG, ABS ou nylon pour le prototypage, l'outillage et les pièces fonctionnelles, en petite ou moyenne série.",
  },
  {
    icon: Rocket,
    title: "Prototypage rapide",
    description:
      "Du concept au prototype fonctionnel en quelques jours, pour valider vos designs et itérer rapidement avant production.",
  },
  {
    icon: Wrench,
    title: "Pièces de remplacement & sur mesure",
    description:
      "Reproduction de pièces introuvables ou cassées, et création d'accessoires personnalisés adaptés exactement à votre besoin.",
  },
  {
    icon: Lightbulb,
    title: "Conseil & accompagnement",
    description:
      "Étude de faisabilité, choix des matériaux et optimisation de vos designs pour réduire les coûts et améliorer la solidité.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nos services
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Une expertise complète, de l&apos;idée à l&apos;objet fini
          </h2>
          <p className="mt-4 text-balance text-muted">
            Que vous ayez besoin d&apos;un prototype unique, d&apos;une
            petite série ou d&apos;un accompagnement complet, LBR Solutions
            met son savoir-faire en modélisation et impression 3D au service
            de votre projet.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
