import { cn } from "@/lib/utils";

interface IgniwaveLogoProps {
  variant?: "full" | "mark";
  color?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const markColors = {
  dark:  { bg: "#1B3A2D", wave: "#A8D5BA", dot: "#A8D5BA" },
  light: { bg: "#FFFFFF", wave: "#1B3A2D", dot: "#4A7C5C" },
};

const wordmarkColors = {
  dark:  "#1B3A2D",
  light: "#FFFFFF",
};

const sizeMap = {
  sm: { markH: 28, textSize: "text-lg" },
  md: { markH: 36, textSize: "text-xl" },
  lg: { markH: 44, textSize: "text-2xl" },
};

function LogoMark({
  color = "dark",
  height = 36,
}: {
  color?: "dark" | "light";
  height?: number;
}) {
  const c = markColors[color];
  const w = height;

  return (
    <svg
      width={w}
      height={w}
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
    >
      {/* Rounded square background */}
      <rect width="36" height="36" rx="9" fill={c.bg} />

      {/* Pulse / data dot */}
      <circle cx="18" cy="12" r="3.5" fill={c.dot} opacity="0.85" />

      {/* Organic wave — represents the intelligence signal */}
      <path
        d="M6,23 C9,18 12,27 15,22 C18,17 21,26 24,21 C27,16 30,23 30,20"
        stroke={c.wave}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function IgniwaveLogo({
  variant = "full",
  color = "dark",
  size = "md",
  className,
}: IgniwaveLogoProps) {
  const { markH, textSize } = sizeMap[size];

  if (variant === "mark") {
    return (
      <span className={cn("inline-flex items-center", className)} aria-label="Igniwave">
        <LogoMark color={color} height={markH} />
      </span>
    );
  }

  return (
    <span
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label="Igniwave"
    >
      <LogoMark color={color} height={markH} />
      <span
        className={cn(
          "font-sans font-bold tracking-tight leading-none",
          textSize
        )}
        style={{ color: wordmarkColors[color] }}
      >
        Igniwave
      </span>
    </span>
  );
}
