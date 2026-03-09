interface IconProps {
  className?: string;
}

export default function EncryptedIcon({ className }: IconProps) {
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
      {/* Shield */}
      <path d="M24,4 L40,10 L40,26 C40,35.5 24,44 24,44 C24,44 8,35.5 8,26 L8,10 Z" />
      {/* Lock body */}
      <rect x="17" y="21" width="14" height="10" rx="2" />
      {/* Lock shackle */}
      <path d="M19,21 L19,17 Q19,12 24,12 Q29,12 29,17 L29,21" />
      {/* Keyhole dot */}
      <circle cx="24" cy="26" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}
