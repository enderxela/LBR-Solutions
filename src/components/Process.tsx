import { MessageCircle, Boxes, Printer, PackageCheck } from "lucide-react";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Échange & étude du besoin",
    description:
      "Nous discutons de votre projet, de vos contraintes et de vos objectifs pour définir la meilleure approche technique.",
  },
  {
    icon: Boxes,
    title: "Modélisation 3D",
    description:
      "Création ou adaptation du modèle 3D, avec des allers-retours pour valider les dimensions et le design avant impression.",
  },
  {
    icon: Printer,
    title: "Impression & post-traitement",
    description:
      "Sélection du matériau et des réglages adaptés, impression puis finitions : ponçage, perçage, peinture si besoin.",
  },
  {
    icon: PackageCheck,
    title: "Livraison & suivi",
    description:
      "Contrôle qualité, emballage soigné et livraison. Nous restons disponibles pour d'éventuels ajustements.",
  },
];

export default function Process() {
  return (
    <section id="processus" className="border-b border-border bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Notre processus
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Un déroulement simple et transparent
          </h2>
          <p className="mt-4 text-balance text-muted">
            De la première discussion à la réception de votre pièce, nous
            vous accompagnons à chaque étape avec des points de validation
            réguliers.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <span className="text-sm font-mono text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
              {index < STEPS.length - 1 && (
                <div className="absolute right-[-1rem] top-6 hidden h-px w-8 bg-border lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
