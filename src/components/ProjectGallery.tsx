"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProjectGalleryProps {
  title: string;
  images: string[];
  note?: string;
}

const THUMB_COUNT = 5;

export default function ProjectGallery({ title, images, note }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length
    );
  const showNext = () =>
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % images.length
    );

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? null : (current - 1 + images.length) % images.length
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % images.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length]);

  const extra = images.length - THUMB_COUNT;

  return (
    <div className="border-b border-[var(--color-rule)] py-7 md:grid md:grid-cols-12 md:items-center md:gap-8">
      <div className="md:col-span-5">
        <h3 className="font-display text-title text-ink">{title}</h3>
        <p className="mt-1 text-sm text-muted">
          {images.length} photo{images.length > 1 ? "s" : ""}
          {note ? ` · ${note}` : ""}
        </p>
      </div>

      <div className="-mx-[var(--gutter)] mt-4 flex gap-3 overflow-x-auto px-[var(--gutter)] md:col-span-7 md:mx-0 md:mt-0 md:justify-end md:overflow-visible md:px-0">
        {images.slice(0, THUMB_COUNT).map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Ouvrir ${title} – photo ${index + 1}`}
            className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[var(--radius-well)] outline outline-1 outline-offset-[-1px] outline-[color-mix(in_oklab,var(--color-ink)_8%,transparent)] transition-opacity hover:opacity-80"
          >
            <Image
              src={src}
              alt={`${title} – photo ${index + 1}`}
              fill
              sizes="80px"
              className="object-cover"
              style={{ filter: "sepia(0.5) saturate(0.88) contrast(1.08) brightness(0.94)" }}
            />
          </button>
        ))}
        {extra > 0 && (
          <button
            type="button"
            onClick={() => setActiveIndex(THUMB_COUNT)}
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[var(--radius-well)] bg-paper-3 text-sm text-muted transition-colors hover:text-ink"
          >
            +{extra}
          </button>
        )}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center bg-scrim p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full border border-[var(--color-rule)] p-2 text-ink transition-colors hover:bg-paper-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-[var(--color-rule)] p-2 text-ink transition-colors hover:bg-paper-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
                aria-label="Image précédente"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-[var(--color-rule)] p-2 text-ink transition-colors hover:bg-paper-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
                aria-label="Image suivante"
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </>
          )}

          <div
            className="relative h-[80dvh] w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`${title} – photo ${activeIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              style={{ filter: "sepia(0.5) saturate(0.88) contrast(1.08) brightness(0.94)" }}
            />
          </div>

          {images.length > 1 && (
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-ink-2">
              {activeIndex + 1} / {images.length}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
