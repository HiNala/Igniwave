interface IconProps {
  className?: string;
}

export default function SharePackIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {/* Document body */}
      <path d="M8,4 L32,4 L40,12 L40,44 L8,44 Z" />
      {/* Dog-ear */}
      <path d="M32,4 L32,12 L40,12" />
      {/* Checklist rows */}
      <path d="M14,20 L17,23 L22,18" />
      <line x1="26" y1="20.5" x2="34" y2="20.5" />
      <path d="M14,28 L17,31 L22,26" />
      <line x1="26" y1="28.5" x2="34" y2="28.5" />
      {/* Share arrow below document */}
      <line x1="24" y1="36" x2="24" y2="44" />
      <path d="M20,40 L24,44 L28,40" />
    </svg>
  );
}
