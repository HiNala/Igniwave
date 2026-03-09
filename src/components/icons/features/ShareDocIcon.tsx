interface IconProps {
  className?: string;
}

export default function ShareDocIcon({ className }: IconProps) {
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
      <path d="M10,4 L30,4 L38,12 L38,44 L10,44 Z" />
      {/* Dog-ear fold */}
      <path d="M30,4 L30,12 L38,12" />
      {/* Checkmark */}
      <path d="M16,26 L21,31 L30,22" />
      {/* Data lines */}
      <line x1="16" y1="35" x2="30" y2="35" />
      <line x1="16" y1="39" x2="24" y2="39" />
      {/* Share arrow: stem + arrowhead pointing up-right */}
      <line x1="34" y1="8" x2="44" y2="8" />
      <line x1="44" y1="4" x2="44" y2="12" />
      <path d="M36,4 L44,4 M41,1 L44,4 L41,7" />
    </svg>
  );
}
