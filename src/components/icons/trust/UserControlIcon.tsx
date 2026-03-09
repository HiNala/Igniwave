interface IconProps {
  className?: string;
}

export default function UserControlIcon({ className }: IconProps) {
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
      {/* Person — head */}
      <circle cx="20" cy="14" r="8" />
      {/* Person — shoulders */}
      <path d="M4,42 C4,30 36,30 36,42" />
      {/* Key — bow (circle) */}
      <circle cx="40" cy="24" r="5" />
      {/* Key — shaft */}
      <line x1="45" y1="24" x2="48" y2="24" />
      {/* Key — teeth */}
      <line x1="46.5" y1="24" x2="46.5" y2="27" />
      <line x1="48" y1="24" x2="48" y2="26.5" />
    </svg>
  );
}
