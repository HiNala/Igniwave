interface IconProps {
  className?: string;
}

export default function FragmentedDataIcon({ className }: IconProps) {
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
      {/* Central node */}
      <circle cx="24" cy="24" r="3" />
      {/* Scattered outer nodes */}
      <circle cx="10" cy="10" r="2.5" />
      <circle cx="38" cy="9" r="2.5" />
      <circle cx="8" cy="38" r="2.5" />
      <circle cx="40" cy="37" r="2" />
      {/* Broken dotted connection attempts — lines stop short, don't connect */}
      <path d="M13,13 L18,18" strokeDasharray="2.5 3" />
      <path d="M35,12 L30,18" strokeDasharray="2.5 3" />
      <path d="M11,35 L17,30" strokeDasharray="2.5 3" />
      <path d="M37,34 L31,29" strokeDasharray="2.5 3" />
      {/* X mark in center — "disconnected" */}
      <line x1="21" y1="21" x2="22.5" y2="22.5" />
      <line x1="25.5" y1="25.5" x2="27" y2="27" />
    </svg>
  );
}
