"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

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

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Parlons de votre projet
          </h2>
          <p className="mt-4 text-balance text-muted">
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
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-primary">
                    <item.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-muted">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-surface p-10 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Send className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  Message envoyé !
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  Merci pour votre message. Notre équipe revient vers vous
                  rapidement pour discuter de votre projet.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-border bg-surface p-6 sm:p-8"
              >
                <input type="hidden" name="to_email" value={CONTACT_EMAIL} />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Nom complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="vous@exemple.com"
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project-type"
                    className="text-sm font-medium text-foreground"
                  >
                    Type de projet
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    defaultValue={PROJECT_TYPES[0]}
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Décrivez votre projet : dimensions, matériau souhaité, délais, fichiers existants..."
                    className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-primary focus:outline-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Une erreur est survenue lors de l&apos;envoi. Merci de
                    réessayer ou de nous écrire directement à{" "}
                    {CONTACT_EMAIL}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
