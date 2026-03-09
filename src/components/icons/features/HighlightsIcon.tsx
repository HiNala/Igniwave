interface IconProps {
  className?: string;
}

export default function HighlightsIcon({ className }: IconProps) {
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
      {/* Lightbulb dome */}
      <path d="M24,4 C15.2,4 8,10.7 8,19 C8,24.3 11,28.8 15.5,31.5 L15.5,36 L32.5,36 L32.5,31.5 C37,28.8 40,24.3 40,19 C40,10.7 32.8,4 24,4 Z" />
      {/* Base rings */}
      <line x1="16" y1="36" x2="32" y2="36" />
      <rect x="18" y="36" width="12" height="3.5" rx="1.5" />
      <rect x="20" y="39.5" width="8" height="3" rx="1.5" />
      {/* Spark / lightning bolt inside bulb */}
      <path d="M26,10 L20,20 L25,20 L22,30 L28,18 L23,18 Z" />
    </svg>
  );
}
