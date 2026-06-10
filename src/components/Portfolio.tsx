import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";

const PROJECTS = [
  { slug: "echelle", title: "Échelle" },
  { slug: "appareil-photo", title: "Appareil photo" },
  { slug: "jeu", title: "Jeu" },
  { slug: "moulure", title: "Moulure" },
  { slug: "tampon", title: "Tampon" },
];

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|avif|gif)$/i;

function getProjectImages(slug: string) {
  const dir = path.join(process.cwd(), "public", "images", "projets", slug);

  try {
    return fs
      .readdirSync(dir)
      .filter((file) => IMAGE_EXTENSIONS.test(file))
      .sort()
      .map((file) => `/images/projets/${slug}/${file}`);
  } catch {
    return [];
  }
}

export default function Portfolio() {
  const projects = PROJECTS.map((project) => ({
    ...project,
    images: getProjectImages(project.slug),
  })).filter((project) => project.images.length > 0);

  return (
    <section id="portfolio" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Réalisations
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Projets réalisés
            </h2>
            <p className="mt-4 text-balance text-muted">
              Un aperçu en photos des pièces conçues et imprimées par notre
              équipe, du prototype industriel à l&apos;objet décoratif unique.
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

        <div className="mt-14 flex flex-col gap-16">
          {projects.map((project) => (
            <ProjectGallery
              key={project.slug}
              title={project.title}
              images={project.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
