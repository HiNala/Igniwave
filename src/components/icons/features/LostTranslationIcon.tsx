interface IconProps {
  className?: string;
}

export default function LostTranslationIcon({ className }: IconProps) {
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
      {/* Clock outer circle */}
      <circle cx="24" cy="24" r="19" />
      {/* Hour hand (pointing to 12) */}
      <line x1="24" y1="24" x2="24" y2="10" />
      {/* Minute hand (just past 12 — ~5 minutes) */}
      <line x1="24" y1="24" x2="29" y2="10.5" />
      {/* Tiny highlighted 5-minute arc at 12 o'clock */}
      <path
        d="M24,5 A19,19 0 0,1 32.5,8.5"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Hour tick marks at 12, 3, 6, 9 */}
      <line x1="24" y1="6" x2="24" y2="9.5" />
      <line x1="41" y1="24" x2="37.5" y2="24" />
      <line x1="24" y1="42" x2="24" y2="38.5" />
      <line x1="7" y1="24" x2="10.5" y2="24" />
    </svg>
  );
}
