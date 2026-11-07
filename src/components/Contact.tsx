"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import Reviews from "@/components/Reviews";

const EMAILJS_SERVICE_ID = "service_6hhufko";
const EMAILJS_TEMPLATE_ID = "template_ng20a3d";
const EMAILJS_PUBLIC_KEY = "h1kZuVwY4Hy1p-hMr";
const CONTACT_EMAIL = "lbrservices.print@gmail.com";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "lbrservices.print@gmail.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 7 81 05 62 18",
  },
  {
    icon: MapPin,
    label: "Atelier",
    value: "France — interventions à distance et sur site",
  },
  {
    icon: Clock,
    label: "Disponibilité",
    value: "Du lundi au vendredi, 9h - 18h",
  },
];

const PROJECT_TYPES = [
  "Modélisation 3D",
  "Impression 3D FDM",
  "Prototypage rapide",
  "Pièce de remplacement",
  "Autre",
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    function handleQuoteRequest(event: Event) {
      const summary = (event as CustomEvent<string>).detail;
      const messageField = formRef.current?.elements.namedItem("message");
      if (messageField instanceof HTMLTextAreaElement) {
        messageField.value = summary;
      }
    }

    window.addEventListener("lbr-quote-request", handleQuoteRequest);
    return () =>
      window.removeEventListener("lbr-quote-request", handleQuoteRequest);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formRef.current) return;

    const honeypot = formRef.current.elements.namedItem("website");
    if (honeypot instanceof HTMLInputElement && honeypot.value !== "") {
      return;
    }

    setStatus("sending");

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  }

  const fieldClass =
    "mt-2 w-full rounded-[var(--radius-well)] border border-[var(--color-muted)] bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]";

  return (
    <section id="contact" className="border-t border-[var(--color-rule)] py-28 md:py-36">
      <div className="container">
        <Reviews />

        <div className="max-w-[52ch]">
          <h2 className="font-display text-section text-ink">Parlons de votre projet</h2>
          <p className="lead mt-4 text-ink-2">
            Décrivez-nous votre besoin, joignez vos plans ou références si
            vous en avez, et nous reviendrons vers vous avec une estimation
            sous 24h.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ul className="space-y-6">
              {CONTACT_INFO.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-ink">{item.label}</p>
                    <p className="mt-1 text-sm text-ink-2">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center rounded-[var(--radius-card)] bg-paper-2 p-10 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-ink">
                  <Send className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-title text-ink">
                  Message envoyé !
                </h3>
                <p className="mt-2 max-w-sm text-sm text-ink-2">
                  Merci pour votre message. Je reviens vers vous rapidement
                  pour discuter de votre projet.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5 rounded-[var(--radius-card)] bg-paper-2 p-6 sm:p-8"
              >
                <input type="hidden" name="to_email" value={CONTACT_EMAIL} />

                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm text-ink">
                      Nom complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm text-ink">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="vous@exemple.com"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project-type" className="text-sm text-ink">
                    Type de projet
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    defaultValue={PROJECT_TYPES[0]}
                    className={fieldClass}
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm text-ink">
                    Votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Décrivez votre projet : dimensions, matériau souhaité, délais, fichiers existants..."
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-[var(--color-error)]">
                    Une erreur est survenue lors de l&apos;envoi. Merci de
                    réessayer ou de nous écrire directement à{" "}
                    {CONTACT_EMAIL}.
                  </p>
                )}

                <button type="submit" disabled={status === "sending"} className="btn w-full sm:w-auto">
                  {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
