"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LeafAccentProps {
  color?: string;
  size?: number;
  flip?: boolean;
  className?: string;
  delay?: number;
}

export default function LeafAccent({
  color = "currentColor",
  size = 40,
  flip = false,
  className,
  delay = 0.1,
}: LeafAccentProps) {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 40 52"
      fill="none"
      aria-hidden="true"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      className={cn("text-igni-sage/60", className)}
    >
      <motion.path
        d="M20,48 C20,35 28,18 32,10 C36,2 24,1 20,4 C16,1 4,2 8,10 C12,18 20,35 20,48 Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.0, ease: "easeOut", delay }}
      />
      <motion.path
        d="M20,48 C20,38 22,28 26,18"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: delay + 0.8 }}
      />
    </svg>
  );
}
