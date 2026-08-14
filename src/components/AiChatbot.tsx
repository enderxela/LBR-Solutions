import fs from "node:fs";
import path from "node:path";
import { Bot, MessageSquare, ShieldCheck, Database, Clock, Mic, ExternalLink } from "lucide-react";
import Link from "next/link";
import WebGallery from "@/components/WebGallery";

const AI_SERVICES = [
  {
    icon: Bot,
    title: "Assistant IA sur mesure",
    description:
      "Un chatbot entraîné sur vos données et vos process, capable de répondre précisément aux questions de vos clients ou de vos équipes.",
  },
  {
    icon: MessageSquare,
    title: "Intégration sur votre site",
    description:
      "Le chatbot s'intègre directement à votre site web pour prendre en charge le support client et répondre 24 h/24 sans effort supplémentaire.",
  },
  {
    icon: Database,
    title: "Connecté à vos données",
    description:
      "Base de connaissances, documents, FAQ ou catalogue produit : le chatbot s'appuie sur vos propres informations pour rester pertinent et à jour.",
  },
  {
    icon: Mic,
    title: "Mode vocal et mode écrit",
    description:
      "L'assistant peut parler, écouter et écrire : basculez à tout moment entre une conversation vocale et un échange par texte, avec plusieurs voix disponibles au choix.",
  },
  {
    icon: ShieldCheck,
    title: "Confidentialité maîtrisée",
    description:
      "Architecture pensée pour garder le contrôle sur vos données, avec les fournisseurs d'IA (OpenAI, Anthropic...) de votre choix.",
  },
  {
    icon: Clock,
    title: "Disponible en continu",
    description:
      "Une présence constante pour vos visiteurs, qui réduit le temps d'attente et libère du temps pour votre équipe support.",
  },
];

const AI_PROJECTS = [{ slug: "assistant-client", title: "Assistant client IA — projet personnel" }];

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|avif|gif)$/i;

function getAiProjectImages(slug: string) {
  const dir = path.join(process.cwd(), "public", "images", "chatbot-ia", slug);
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => IMAGE_EXTENSIONS.test(file))
      .sort()
      .map((file) => `/images/chatbot-ia/${slug}/${encodeURIComponent(file)}`);
  } catch {
    return [];
  }
}

export default function AiChatbot() {
  const projects = AI_PROJECTS.map((p) => ({
    ...p,
    images: getAiProjectImages(p.slug),
  })).filter((p) => p.images.length > 0);

  return (
    <section id="chatbot-ia" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* En-tête */}
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Services IA
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Un chatbot IA pour votre relation client
          </h2>
          <p className="mt-4 text-balance text-muted">
            En complément de l&apos;impression 3D et du développement web, je conçois des assistants conversationnels basés sur l&apos;IA. J&apos;ai d&apos;abord développé mon propre chatbot d&apos;assistant client comme projet personnel, aujourd&apos;hui fonctionnel — capable de parler, d&apos;écouter et d&apos;écrire, avec plusieurs voix au choix et une bascule à tout moment entre mode vocal et mode écrit. Une base sur laquelle je peux m&apos;appuyer pour créer un assistant adapté à votre activité.
          </p>
        </div>

        {/* Cards services */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AI_SERVICES.map((service) => (
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
          <a
            href="https://web-blush-sigma-78.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105"
          >
            <Bot className="h-5 w-5" strokeWidth={1.75} />
            Tester le chatbot en direct
            <ExternalLink className="h-5 w-5" strokeWidth={1.75} />
          </a>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/40"
          >
            Discuter de mon projet
          </Link>
          <p className="text-sm text-muted">
            Étude de faisabilité gratuite · Réponse sous 24 h
          </p>
        </div>

        {/* Galerie du projet */}
        {projects.length > 0 && (
          <div className="mt-20">
            <h3 className="text-xl font-bold tracking-tight">
              Mon assistant IA en action
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
