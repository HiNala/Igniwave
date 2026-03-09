"use client";

import { motion, useReducedMotion } from "framer-motion";
import type React from "react";

interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  /** Direction to slide in from. Defaults to "up". */
  from?: "up" | "down" | "left" | "right" | "none";
}

const directionMap: Record<NonNullable<AnimateInProps["from"]>, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
};

export default function AnimateIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
  from = "up",
}: AnimateInProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, ease: [0.0, 0.0, 0.2, 1.0], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
