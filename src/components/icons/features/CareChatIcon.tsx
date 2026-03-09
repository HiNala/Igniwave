interface IconProps {
  className?: string;
}

export default function CareChatIcon({ className }: IconProps) {
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
      {/* Primary chat bubble */}
      <path d="M4,6 Q4,4 6,4 L28,4 Q30,4 30,6 L30,20 Q30,22 28,22 L14,22 L6,30 L8,22 L6,22 Q4,22 4,20 Z" />
      {/* Secondary chat bubble (offset, slightly behind) */}
      <path d="M18,18 Q18,16 20,16 L40,16 Q42,16 42,18 L42,32 Q42,34 40,34 L28,34 L34,42 L26,34 L20,34 Q18,34 18,32 Z" />
      {/* Globe circle inside secondary bubble */}
      <circle cx="32" cy="25" r="6" />
      {/* Globe latitude arc */}
      <path d="M26,25 Q29,21 32,25 Q35,29 38,25" />
      {/* Globe vertical axis */}
      <line x1="32" y1="19" x2="32" y2="31" />
    </svg>
  );
}
