import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";

const PROJECTS = [
  { slug: "echelle", title: "Échelle" },
  { slug: "appareil-photo", title: "Appareil photo" },
  { slug: "jeu", title: "Jeux" },
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
    <section id="portfolio" className="border-t border-[var(--color-rule)] py-28 md:py-36">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[52ch]">
            <h2 className="font-display text-section text-ink">Réalisations</h2>
            <p className="lead mt-4 text-ink-2">
              Un aperçu des pièces conçues et imprimées : du prototype
              industriel à l&apos;objet sur mesure.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 text-sm text-accent hover:underline"
          >
            Discuter de votre projet
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-14 border-t border-[var(--color-rule)]">
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
