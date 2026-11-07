"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface WebGalleryProps {
  title: string;
  images: string[];
}

export default function WebGallery({ title, images }: WebGalleryProps) {
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
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length]);

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-title text-ink">{title}</h3>
        <span className="shrink-0 text-sm text-muted">
          {images.length} capture{images.length > 1 ? "s" : ""}
        </span>
      </div>

      <div
        className={`mt-5 grid grid-cols-1 gap-4 ${
          images.length % 3 === 0 ? "sm:grid-cols-3" : "sm:grid-cols-2"
        }`}
        data-kind="product"
      >
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative w-full overflow-hidden rounded-[var(--radius-well)] bg-paper-2 outline outline-1 outline-offset-[-1px] outline-[var(--color-rule)] transition-colors hover:outline-[var(--color-accent)]"
          >
            <Image
              src={src}
              alt={`${title} – capture ${index + 1}`}
              width={1280}
              height={800}
              className="h-auto w-full object-contain"
            />
          </button>
        ))}
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
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-[var(--color-rule)] p-2 text-ink transition-colors hover:bg-paper-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
                aria-label="Précédent"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-[var(--color-rule)] p-2 text-ink transition-colors hover:bg-paper-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
                aria-label="Suivant"
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </>
          )}

          <div
            className="relative max-h-[90dvh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`${title} – capture ${activeIndex + 1}`}
              width={1920}
              height={1200}
              className="h-auto max-h-[90dvh] w-full rounded-[var(--radius-well)] object-contain"
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
