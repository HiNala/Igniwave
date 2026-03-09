"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HandDrawnArrowProps {
  color?: string;
  direction?: "left" | "right" | "down";
  className?: string;
  delay?: number;
}

const paths: Record<
  NonNullable<HandDrawnArrowProps["direction"]>,
  { body: string; head: string }
> = {
  right: {
    body: "M6,20 C28,18 55,14 80,21 C100,27 112,20 130,14",
    head: "M120,7 L133,15 L119,22",
  },
  left: {
    body: "M134,14 C112,18 85,22 60,17 C38,12 22,18 8,22",
    head: "M18,13 L5,21 L19,27",
  },
  down: {
    body: "M20,6 C16,28 20,52 14,78 C10,96 16,110 22,128",
    head: "M13,118 L21,132 L29,118",
  },
};

export default function HandDrawnArrow({
  color = "currentColor",
  direction = "right",
  className,
  delay = 0.1,
}: HandDrawnArrowProps) {
  const { body, head } = paths[direction];
  const isVertical = direction === "down";

  return (
    <svg
      viewBox={isVertical ? "0 0 40 140" : "0 0 140 40"}
      fill="none"
      aria-hidden="true"
      className={cn("w-20 h-8", isVertical && "w-8 h-20", className)}
    >
      <motion.path
        d={body}
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay }}
      />
      <motion.path
        d={head}
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: delay + 0.7 }}
      />
    </svg>
  );
}
