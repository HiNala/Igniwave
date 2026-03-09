"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HandDrawnHeartProps {
  color?: string;
  className?: string;
  delay?: number;
  animate?: boolean;
}

export default function HandDrawnHeart({
  color = "#E87461",
  className,
  delay = 0,
  animate = true,
}: HandDrawnHeartProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animate && !prefersReducedMotion;

  return (
    <svg
      viewBox="0 0 40 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("inline-block", className)}
      aria-hidden="true"
    >
      <motion.path
        d="M20 32 C 14 26, 2 18, 4 10 C 6 4, 14 2, 20 10 C 26 2, 34 4, 36 10 C 38 18, 26 26, 20 32 Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={shouldAnimate ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 0.7 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={
          shouldAnimate
            ? { duration: 1.0, ease: "easeOut", delay }
            : { duration: 0 }
        }
      />
    </svg>
  );
}
