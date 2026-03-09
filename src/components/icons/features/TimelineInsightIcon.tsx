interface IconProps {
  className?: string;
}

export default function TimelineInsightIcon({ className }: IconProps) {
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
      <line x1="4" y1="34" x2="44" y2="34" />
      {/* Day tick marks */}
      <line x1="10" y1="30" x2="10" y2="38" />
      <line x1="19" y1="30" x2="19" y2="38" />
      <line x1="28" y1="30" x2="28" y2="38" />
      <line x1="37" y1="30" x2="37" y2="38" />
      {/* Data pulse line with prominent spike at x=28 */}
      <path d="M4,33 L8,33 L10,29 L12,34 L17,34 L19,27 L22,34 L26,34 L28,16 L30,34 L35,34 L37,29 L40,34 L44,34" />
      {/* Dashed highlight circle around the spike */}
      <circle cx="28" cy="22" r="8" strokeDasharray="3 2.5" />
      {/* Small filled dot at spike peak */}
      <circle cx="28" cy="16" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}
