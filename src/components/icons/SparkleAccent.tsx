"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparkleAccentProps {
  count?: 1 | 2 | 3;
  color?: string;
  className?: string;
}

const sparklePositions = [
  { cx: 16, cy: 16, size: 1.0, delay: 0.0 },
  { cx: 44, cy:  8, size: 0.7, delay: 0.2 },
  { cx: 36, cy: 36, size: 0.5, delay: 0.4 },
];

function SingleSparkle({
  cx,
  cy,
  scale = 1,
  color,
  delay,
}: {
  cx: number;
  cy: number;
  scale?: number;
  color: string;
  delay: number;
}) {
  const r = 7 * scale;
  const r2 = 3 * scale;

  return (
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: "backOut", delay }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      <path
        d={`M${cx},${cy - r} L${cx + r2},${cy - r2} L${cx + r},${cy} L${cx + r2},${cy + r2} L${cx},${cy + r} L${cx - r2},${cy + r2} L${cx - r},${cy} L${cx - r2},${cy - r2} Z`}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </motion.g>
  );
}

export default function SparkleAccent({
  count = 3,
  color = "currentColor",
  className,
}: SparkleAccentProps) {
  const shown = sparklePositions.slice(0, count);

  return (
    <svg
      viewBox="0 0 56 52"
      fill="none"
      aria-hidden="true"
      className={cn("w-14 h-12 text-igni-coral", className)}
    >
      {shown.map((s, i) => (
        <SingleSparkle
          key={i}
          cx={s.cx}
          cy={s.cy}
          scale={s.size}
          color={color}
          delay={s.delay}
        />
      ))}
    </svg>
  );
}
