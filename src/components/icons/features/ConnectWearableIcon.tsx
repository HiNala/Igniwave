interface IconProps {
  className?: string;
}

export default function ConnectWearableIcon({ className }: IconProps) {
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
      {/* Watch band — top */}
      <rect x="17" y="5" width="10" height="6" rx="2" />
      {/* Watch body */}
      <rect x="10" y="11" width="22" height="26" rx="5" />
      {/* Watch band — bottom */}
      <rect x="17" y="37" width="10" height="6" rx="2" />
      {/* Checkmark on screen */}
      <path d="M17,24 L21,28 L29,20" />
      {/* Signal / connection waves */}
      <path d="M35,20 C38.5,22.5 38.5,25.5 35,28" />
      <path d="M39,17 C44.5,21 44.5,27 39,31" />
    </svg>
  );
}
