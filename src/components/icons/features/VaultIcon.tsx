interface IconProps {
  className?: string;
}

export default function VaultIcon({ className }: IconProps) {
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
      {/* Shield outline */}
      <path d="M24,4 L40,10 L40,26 C40,35.5 24,44 24,44 C24,44 8,35.5 8,26 L8,10 Z" />
      {/* Key — circular bow */}
      <circle cx="21" cy="20" r="6" />
      {/* Key shaft */}
      <line x1="27" y1="20" x2="38" y2="20" />
      {/* Key teeth */}
      <line x1="35" y1="20" x2="35" y2="24" />
      <line x1="38" y1="20" x2="38" y2="23" />
    </svg>
  );
}
