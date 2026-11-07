import fs from "node:fs";
import path from "node:path";
import { Code2, Layout, Smartphone, Zap, Globe } from "lucide-react";
import Link from "next/link";
import WebGallery from "@/components/WebGallery";
import AiChatbot from "@/components/AiChatbot";

const WEB_SERVICES = [
  {
    icon: Layout,
    title: "Design sur mesure",
    description:
      "Chaque site est pensé depuis zéro : identité visuelle cohérente, typographie soignée et mise en page qui guide le regard vers ce qui compte.",
  },
  {
    icon: Code2,
    title: "Développement HTML / CSS / JavaScript",
    description:
      "Code propre, structuré et maintenable. Pas de template générique — chaque ligne correspond exactement à votre projet.",
  },
  {
    icon: Smartphone,
    title: "100 % responsive",
    description:
      "Votre site s'adapte parfaitement à tous les écrans, du mobile au grand moniteur.",
  },
  {
    icon: Zap,
    title: "Performance & référencement",
    description:
      "Temps de chargement optimisés, bonnes pratiques SEO intégrées dès le départ.",
  },
  {
    icon: Globe,
    title: "Mise en ligne & suivi",
    description:
      "Déploiement sur votre hébergeur ou une solution clé en main, nom de domaine inclus si besoin, avec un suivi post-livraison.",
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
    <section className="border-t border-[var(--color-rule)] py-28 md:py-36">
      <div className="container">
        <h2 className="font-display text-section text-ink">
          Au-delà de l&apos;impression 3D
        </h2>
        <p className="lead mt-4 max-w-[52ch] text-ink-2">
          Développement web et assistants IA, conçus avec la même rigueur
          technique.
        </p>

        <div id="dev-web" className="mt-16">
          <h3 className="font-display text-title text-ink">
            Votre site web, pensé pour convaincre
          </h3>
          <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-ink-2">
            En parallèle de mes services d&apos;impression 3D, je conçois et
            développe des sites web sur mesure — vitrines, portfolios ou
            pages produit — en HTML, CSS et JavaScript. Des interfaces
            claires, rapides et adaptées à votre image, sans abonnement ni
            surprise.
          </p>

          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {WEB_SERVICES.map((service) => (
              <div key={service.title} className="flex gap-3">
                <service.icon
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <div>
                  <h4 className="text-sm font-medium text-ink">{service.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="#contact" className="btn">
              Demander un devis
            </Link>
            <p className="text-sm text-muted">
              Réponse sous 24 h · Tarif fixe, pas d&apos;abonnement
            </p>
          </div>

          {projects.length > 0 && (
            <div className="mt-16">
              <h4 className="font-display text-title text-ink">Quelques réalisations</h4>
              <div className="mt-8 flex flex-col gap-16">
                {projects.map((project) => (
                  <WebGallery key={project.slug} title={project.title} images={project.images} />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-24 border-t border-[var(--color-rule)] pt-16 md:mt-28">
          <AiChatbot />
        </div>
      </div>
    </section>
  );
}
