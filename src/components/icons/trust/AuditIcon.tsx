interface IconProps {
  className?: string;
}

export default function AuditIcon({ className }: IconProps) {
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
      {/* Dog-ear */}
      <path d="M30,4 L30,12 L38,12" />
      {/* Text lines */}
      <line x1="16" y1="18" x2="32" y2="18" />
      <line x1="16" y1="22" x2="28" y2="22" />
      {/* Eye shape */}
      <path d="M13,32 Q24,24 35,32 Q24,40 13,32 Z" />
      {/* Iris */}
      <circle cx="24" cy="32" r="4" />
      {/* Pupil */}
      <circle cx="24" cy="32" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}
