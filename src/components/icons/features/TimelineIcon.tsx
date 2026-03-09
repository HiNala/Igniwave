interface IconProps {
  className?: string;
}

export default function TimelineIcon({ className }: IconProps) {
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
      {/* Base timeline */}
      <line x1="4" y1="32" x2="44" y2="32" />
      {/* Day tick marks */}
      <line x1="10" y1="28" x2="10" y2="36" />
      <line x1="18" y1="28" x2="18" y2="36" />
      <line x1="26" y1="28" x2="26" y2="36" />
      <line x1="34" y1="28" x2="34" y2="36" />
      <line x1="42" y1="28" x2="42" y2="36" />
      {/* Data pulse line — EKG-style across all 5 day markers */}
      <path d="M4,31 L8,31 L10,25 L12,32 L16,32 L18,20 L20,32 L24,32 L26,26 L28,32 L32,32 L34,17 L36,32 L40,32 L42,28 L44,32" />
      {/* Label dots at start */}
      <circle cx="4" cy="32" r="2" fill="currentColor" stroke="none" />
      <circle cx="44" cy="32" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}
