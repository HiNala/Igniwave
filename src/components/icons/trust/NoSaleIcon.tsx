interface IconProps {
  className?: string;
}

export default function NoSaleIcon({ className }: IconProps) {
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
      {/* Coin circle */}
      <circle cx="24" cy="24" r="20" />
      {/* Dollar sign — vertical bar */}
      <line x1="24" y1="10" x2="24" y2="38" />
      {/* Dollar sign — S curve top */}
      <path d="M30,16 Q30,11 24,11 Q17,11 17,17 Q17,23 24,24" />
      {/* Dollar sign — S curve bottom */}
      <path d="M18,32 Q18,37 24,37 Q31,37 31,31 Q31,25 24,24" />
      {/* Diagonal slash — "no" */}
      <line x1="8" y1="40" x2="40" y2="8" strokeWidth="2" />
    </svg>
  );
}
