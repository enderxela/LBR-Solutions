import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";

const GOOGLE_REVIEW_URL = "https://g.page/r/CW8B7P5GoN7PEBM/review";

export default function Reviews() {
  return (
    <div
      id="avis"
      className="mb-14 flex flex-col items-start gap-6 rounded-[var(--radius-card)] bg-paper-2 p-8 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h3 className="font-display text-title text-ink">
          Vous avez travaillé avec LBR Solutions ?
        </h3>
        <p className="mt-2 text-sm text-ink-2">
          Un avis Google prend moins d&apos;une minute et aide d&apos;autres
          clients à se décider.
        </p>
      </div>
      <Link href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="btn shrink-0">
        <Star className="h-4 w-4" aria-hidden="true" />
        Laisser un avis Google
        <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden="true" />
      </Link>
    </div>
  );
}
