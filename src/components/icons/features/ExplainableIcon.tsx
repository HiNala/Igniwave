interface IconProps {
  className?: string;
}

export default function ExplainableIcon({ className }: IconProps) {
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
      {/* Magnifying glass circle */}
      <circle cx="20" cy="20" r="14" />
      {/* Handle */}
      <line x1="30" y1="30" x2="43" y2="43" />
      {/* Central data point inside glass */}
      <circle cx="20" cy="20" r="3" fill="currentColor" stroke="none" />
      {/* Annotation lines radiating out from data point */}
      <line x1="23" y1="17" x2="28" y2="13" />
      <line x1="24" y1="20" x2="30" y2="20" />
      <line x1="23" y1="23" x2="28" y2="27" />
      {/* Small caps at annotation ends */}
      <line x1="28" y1="12" x2="28" y2="14" />
      <line x1="30" y1="19" x2="30" y2="21" />
      <line x1="28" y1="26" x2="28" y2="28" />
    </svg>
  );
}
