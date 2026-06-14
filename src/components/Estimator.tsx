"use client";

import { useMemo, useState } from "react";
import { Send } from "lucide-react";

const MATERIALS = [
  { value: "PLA", label: "PLA", pricePerGram: 0.08 },
  { value: "PETG", label: "PETG", pricePerGram: 0.10 },
  { value: "ABS", label: "ABS", pricePerGram: 0.12 },
  { value: "Nylon", label: "Nylon", pricePerGram: 0.15 },
];

// Tarifs indicatifs à ajuster selon les coûts réels de LBR Solutions.
const HOURLY_RATE = 4; // €/h de temps machine
const GRAMS_PER_HOUR = 15; // conversion poids <-> temps quand une seule valeur est connue
const MINIMUM_FEE = 5; // € minimum par pièce
const MARGIN = 0.15; // marge d'incertitude affichée en fourchette

const currencyFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
});

export default function Estimator() {
  const [weight, setWeight] = useState("");
  const [hours, setHours] = useState("");
  const [material, setMaterial] = useState(MATERIALS[0].value);
  const [quantity, setQuantity] = useState(1);

  const estimate = useMemo(() => {
    const weightValue = parseFloat(weight);
    const hoursValue = parseFloat(hours);
    const hasWeight = !isNaN(weightValue) && weightValue > 0;
    const hasHours = !isNaN(hoursValue) && hoursValue > 0;

    if (!hasWeight && !hasHours) return null;

    const resolvedWeight = hasWeight ? weightValue : hoursValue * GRAMS_PER_HOUR;
    const resolvedHours = hasHours ? hoursValue : weightValue / GRAMS_PER_HOUR;
    const pricePerGram =
      MATERIALS.find((m) => m.value === material)?.pricePerGram ?? 0;

    const unitCost = Math.max(
      resolvedWeight * pricePerGram + resolvedHours * HOURLY_RATE,
      MINIMUM_FEE
    );
    const total = unitCost * quantity;

    return {
      low: total * (1 - MARGIN),
      high: total * (1 + MARGIN),
    };
  }, [weight, hours, material, quantity]);

  function handleRequestQuote() {
    if (!estimate) return;

    const materialLabel =
      MATERIALS.find((m) => m.value === material)?.label ?? material;

    const lines = [
      "Demande de devis suite à l'estimateur en ligne :",
      `- Matériau : ${materialLabel}`,
    ];
    if (weight) lines.push(`- Poids estimé : ${weight} g`);
    if (hours) lines.push(`- Temps d'impression estimé : ${hours} h`);
    lines.push(`- Quantité : ${quantity}`);
    lines.push(
      `- Estimation : ${currencyFormatter.format(estimate.low)} – ${currencyFormatter.format(estimate.high)}`
    );

    window.dispatchEvent(
      new CustomEvent("lbr-quote-request", { detail: lines.join("\n") })
    );
  }

  return (
    <section id="estimateur" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Estimation
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Devis instantané
          </h2>
          <p className="mt-4 text-balance text-muted">
            Vous connaissez déjà le poids ou le temps d&apos;impression
            estimé de votre pièce, indiqué par votre logiciel de découpe
            (slicer) ? Renseignez-le pour obtenir une fourchette de prix
            immédiate.
          </p>
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label
                htmlFor="estimate-weight"
                className="text-sm font-medium text-foreground"
              >
                Poids estimé (g)
              </label>
              <input
                id="estimate-weight"
                type="number"
                min="0"
                step="1"
                placeholder="ex : 45"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="estimate-hours"
                className="text-sm font-medium text-foreground"
              >
                Temps d&apos;impression estimé (h)
              </label>
              <input
                id="estimate-hours"
                type="number"
                min="0"
                step="0.5"
                placeholder="ex : 3.5"
                value={hours}
                onChange={(event) => setHours(event.target.value)}
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="estimate-material"
                className="text-sm font-medium text-foreground"
              >
                Matériau
              </label>
              <select
                id="estimate-material"
                value={material}
                onChange={(event) => setMaterial(event.target.value)}
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
              >
                {MATERIALS.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="estimate-quantity"
                className="text-sm font-medium text-foreground"
              >
                Quantité
              </label>
              <input
                id="estimate-quantity"
                type="number"
                min="1"
                step="1"
                value={quantity}
                onChange={(event) =>
                  setQuantity(Math.max(1, parseInt(event.target.value, 10) || 1))
                }
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <p className="mt-4 text-xs text-muted">
            Renseignez le poids et/ou le temps d&apos;impression indiqués par
            votre logiciel de découpe (slicer).
          </p>

          <div className="mt-8">
            {estimate ? (
              <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface-2 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-muted">
                    Estimation pour {quantity} pièce{quantity > 1 ? "s" : ""}
                  </p>
                  <p className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                    {currencyFormatter.format(estimate.low)} –{" "}
                    {currencyFormatter.format(estimate.high)}
                  </p>
                  <p className="mt-2 text-xs text-muted">
                    Estimation indicative, le prix définitif est confirmé
                    après étude.
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={handleRequestQuote}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Demander ce devis
                  <Send className="h-4 w-4" />
                </a>
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-border p-6 text-sm text-muted">
                Vous ne connaissez ni le poids ni le temps d&apos;impression
                de votre pièce (nouveau projet à modéliser) ?{" "}
                <a
                  href="#contact"
                  className="font-medium text-primary hover:underline"
                >
                  Décrivez votre besoin via le formulaire de contact
                </a>
                , nous réaliserons une étude et vous proposerons un devis sur
                mesure.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
