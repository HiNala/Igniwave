interface IconProps {
  className?: string;
}

export default function NoVoiceIcon({ className }: IconProps) {
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
      {/* Speech bubble body */}
      <path d="M6,8 Q6,6 8,6 L36,6 Q38,6 38,8 L38,28 Q38,30 36,30 L20,30 L12,38 L14,30 L8,30 Q6,30 6,28 Z" />
      {/* Fading dots — voice trails off */}
      <circle cx="16" cy="18" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="24" cy="18" r="1.8" fill="currentColor" stroke="none" opacity="0.6" />
      <circle cx="32" cy="18" r="1.8" fill="currentColor" stroke="none" opacity="0.2" />
      {/* Diagonal mute slash across the bubble */}
      <line x1="6" y1="38" x2="40" y2="4" strokeWidth="2" />
    </svg>
  );
}
