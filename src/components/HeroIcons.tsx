import type { SVGProps } from "react";

export function FlyingPrinterIcon({
  strokeWidth = 2,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="6" y1="18" x2="6" y2="5" />
      <line x1="18" y1="18" x2="18" y2="5" />
      <line x1="6" y1="5" x2="18" y2="5" />
      <line x1="5" y1="18" x2="19" y2="18" />
      <rect x="10.5" y="4" width="3" height="2" rx="0.5" />
      <line x1="12" y1="6" x2="12" y2="9" />
      <path d="M9 18 L15 18 L12 9.5 Z" />
      <line x1="5" y1="18" x2="5" y2="19.5" />
      <line x1="19" y1="18" x2="19" y2="19.5" />
      <line x1="1" y1="9" x2="4.5" y2="9" />
      <line x1="0.5" y1="12" x2="4" y2="12" />
      <line x1="1.5" y1="15" x2="4" y2="15" />
    </svg>
  );
}

export function WireframeCubeIcon({
  strokeWidth = 2,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3 L20 7.5 L12 12 L4 7.5 Z" />
      <path d="M4 7.5 V16.5 L12 21 L20 16.5 V7.5" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <circle cx="12" cy="3" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="20" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="4" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="20" cy="16.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="4" cy="16.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="12" cy="21" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
