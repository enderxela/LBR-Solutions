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
      "Le chatbot s'intègre directement à votre site web pour prendre en charge le support client et répondre 24 h/24.",
  },
  {
    icon: Database,
    title: "Connecté à vos données",
    description:
      "Base de connaissances, documents, FAQ ou catalogue produit : le chatbot s'appuie sur vos propres informations.",
  },
  {
    icon: Mic,
    title: "Mode vocal et mode écrit",
    description:
      "L'assistant peut parler, écouter et écrire : bascule à tout moment entre mode vocal et mode écrit, plusieurs voix au choix.",
  },
  {
    icon: ShieldCheck,
    title: "Confidentialité maîtrisée",
    description:
      "Architecture pensée pour garder le contrôle sur vos données, avec les fournisseurs d'IA de votre choix.",
  },
  {
    icon: Clock,
    title: "Disponible en continu",
    description:
      "Une présence constante pour vos visiteurs, qui réduit le temps d'attente et libère du temps pour votre équipe.",
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
    <div id="chatbot-ia">
      <h3 className="font-display text-title text-ink">
        Un chatbot IA pour votre relation client
      </h3>
      <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-ink-2">
        En complément de l&apos;impression 3D et du développement web, je
        conçois des assistants conversationnels basés sur l&apos;IA.
        J&apos;ai d&apos;abord développé mon propre chatbot d&apos;assistant
        client comme projet personnel, aujourd&apos;hui fonctionnel — capable
        de parler, d&apos;écouter et d&apos;écrire, avec plusieurs voix au
        choix. Une base sur laquelle je peux m&apos;appuyer pour créer un
        assistant adapté à votre activité.
      </p>

      <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {AI_SERVICES.map((service) => (
          <div key={service.title} className="flex gap-3">
            <service.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
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
        <a
          href="https://web-blush-sigma-78.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <Bot className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          Tester le chatbot en direct
          <ExternalLink className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        </a>
        <Link href="#contact" className="btn btn--quiet">
          Discuter de mon projet
        </Link>
        <p className="text-sm text-muted">
          Étude de faisabilité gratuite · Réponse sous 24 h
        </p>
      </div>

      {projects.length > 0 && (
        <div className="mt-16">
          <h4 className="font-display text-title text-ink">Mon assistant IA en action</h4>
          <div className="mt-8 flex flex-col gap-16">
            {projects.map((project) => (
              <WebGallery key={project.slug} title={project.title} images={project.images} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
