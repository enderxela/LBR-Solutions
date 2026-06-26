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
        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {title}
        </h3>
        <span className="shrink-0 text-sm text-muted">
          {images.length} capture{images.length > 1 ? "s" : ""}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative w-full overflow-hidden rounded-2xl border border-border bg-surface-2 transition-colors hover:border-primary/40"
          >
            <Image
              src={src}
              alt={`${title} – capture ${index + 1}`}
              width={1280}
              height={800}
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full border border-white/20 p-2 text-white transition-colors hover:bg-white/10"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); showPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 p-2 text-white transition-colors hover:bg-white/10"
                aria-label="Précédent"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); showNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 p-2 text-white transition-colors hover:bg-white/10"
                aria-label="Suivant"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div
            className="relative max-h-[90vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`${title} – capture ${activeIndex + 1}`}
              width={1920}
              height={1200}
              className="w-full h-auto max-h-[90vh] object-contain rounded-xl"
            />
          </div>

          {images.length > 1 && (
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70">
              {activeIndex + 1} / {images.length}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
