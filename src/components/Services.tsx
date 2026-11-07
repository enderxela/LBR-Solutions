const SERVICES = [
  {
    title: "Modélisation 3D sur mesure",
    description:
      "Conception CAO sur SolidWorks et Fusion 360, à partir de vos plans, croquis ou simplement de votre idée, prête pour l'impression ou l'industrialisation.",
    lead: true,
  },
  {
    title: "Impression 3D FDM",
    description:
      "Pièces en PLA, PETG, ABS ou nylon sur Bambu Lab A1, pour le prototypage, l'outillage et les pièces fonctionnelles.",
  },
  {
    title: "Prototypage rapide",
    description:
      "Du concept au prototype fonctionnel en quelques jours, pour valider un design avant production.",
  },
  {
    title: "Pièces de remplacement & sur mesure",
    description:
      "Reproduction de pièces introuvables ou cassées, et modification de modèles 3D existants pour les adapter à vos contraintes.",
  },
  {
    title: "Conseil & accompagnement",
    description:
      "Étude de faisabilité, choix des matériaux et optimisation de vos designs pour réduire les coûts et améliorer la solidité.",
  },
];

const STEPS = [
  {
    title: "Échange & étude du besoin",
    description:
      "Nous discutons de votre projet, de vos contraintes et de vos objectifs pour définir la meilleure approche.",
  },
  {
    title: "Modélisation 3D",
    description:
      "Création ou adaptation du modèle, avec des allers-retours pour valider les dimensions et le design.",
  },
  {
    title: "Impression & post-traitement",
    description:
      "Choix du matériau et des réglages, impression puis finitions : ponçage, perçage, peinture si besoin.",
  },
  {
    title: "Livraison & suivi",
    description:
      "Contrôle qualité, emballage soigné et livraison. Je reste disponible pour d'éventuels ajustements.",
  },
];

export default function Services() {
  return (
    <section className="border-t border-[var(--color-rule)] py-28 md:py-36">
      <div className="container">
        <div id="services">
          <h2 className="font-display text-section text-ink">
            Une expertise complète, de l&apos;idée à l&apos;objet fini
          </h2>
          <p className="lead mt-4 max-w-[52ch] text-ink-2">
            Conception et impression réunies dans le même atelier : je conçois
            les pièces moi-même avant de les imprimer.
          </p>

          <div className="mt-14 grid gap-[var(--gap-columns)] sm:grid-cols-6">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className={`border-t border-[var(--color-rule)] pt-6 ${
                  service.lead ? "sm:col-span-4" : "sm:col-span-2"
                }`}
              >
                <h3 className="font-display text-title text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div id="processus" className="mt-28 border-t border-[var(--color-rule)] pt-16 md:mt-36">
          <h2 className="font-display text-section text-ink">
            Un déroulement simple et transparent
          </h2>
          <p className="lead mt-4 max-w-[52ch] text-ink-2">
            De la première discussion à la réception de votre pièce, avec des
            points de validation réguliers.
          </p>

          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <li key={step.title}>
                <span className="num font-display text-title text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-title text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
