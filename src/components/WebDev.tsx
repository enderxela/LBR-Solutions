import fs from "node:fs";
import path from "node:path";
import { Code2, Layout, Smartphone, Zap, Globe } from "lucide-react";
import Link from "next/link";
import WebGallery from "@/components/WebGallery";

const WEB_SERVICES = [
  {
    icon: Layout,
    title: "Design sur mesure",
    description:
      "Chaque site est pensé depuis zéro : identité visuelle cohérente, typographie soignée et mise en page qui guide naturellement le regard vers ce qui compte.",
  },
  {
    icon: Code2,
    title: "Développement HTML / CSS / JavaScript",
    description:
      "Code propre, structuré et maintenable. Pas de template générique — chaque ligne est écrite pour correspondre exactement à votre projet.",
  },
  {
    icon: Smartphone,
    title: "100 % responsive",
    description:
      "Votre site s'adapte parfaitement à tous les écrans, du mobile au grand moniteur, sans compromis sur l'expérience utilisateur.",
  },
  {
    icon: Zap,
    title: "Performance & référencement",
    description:
      "Temps de chargement optimisés, bonnes pratiques SEO intégrées dès le départ pour que votre site soit visible et agréable à utiliser.",
  },
  {
    icon: Globe,
    title: "Mise en ligne & suivi",
    description:
      "Déploiement sur votre hébergeur ou sur une solution clé en main, nom de domaine inclus si besoin, avec un suivi post-livraison.",
  },
];

const WEB_PROJECTS = [
  { slug: "lbr-solutions", title: "LBR Solutions — ce site" },
  { slug: "projet-2", title: "Projet en cours" },
];

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|avif|gif)$/i;

function getWebProjectImages(slug: string) {
  const dir = path.join(process.cwd(), "public", "images", "web", slug);
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => IMAGE_EXTENSIONS.test(file))
      .sort()
      .map((file) => `/images/web/${slug}/${encodeURIComponent(file)}`);
  } catch {
    return [];
  }
}

export default function WebDev() {
  const projects = WEB_PROJECTS.map((p) => ({
    ...p,
    images: getWebProjectImages(p.slug),
  })).filter((p) => p.images.length > 0);

  return (
    <section id="dev-web" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* En-tête */}
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Services développement
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Votre site web, pensé pour convaincre
          </h2>
          <p className="mt-4 text-balance text-muted">
            En parallèle de nos services d&apos;impression 3D, nous concevons et développons des sites web sur mesure — vitrines, portfolios ou pages produit — en HTML, CSS et JavaScript. Des interfaces claires, rapides et adaptées à votre image, sans abonnement ni surprise.
          </p>
        </div>

        {/* Cards services */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WEB_SERVICES.map((service) => (
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

        {/* Call to action */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Demander un devis
          </Link>
          <p className="text-sm text-muted">
            Réponse sous 24 h · Tarif fixe, pas d&apos;abonnement
          </p>
        </div>

        {/* Galerie des réalisations web */}
        {projects.length > 0 && (
          <div className="mt-20">
            <h3 className="text-xl font-bold tracking-tight">
              Quelques réalisations
            </h3>
            <div className="mt-10 flex flex-col gap-16">
              {projects.map((project) => (
                <WebGallery
                  key={project.slug}
                  title={project.title}
                  images={project.images}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
