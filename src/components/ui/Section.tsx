import type React from "react";
import { cn } from "@/lib/utils";

export type SectionBg = "cream" | "warm" | "forest" | "white";

const backgrounds: Record<SectionBg, string> = {
  cream:  "bg-igni-cream",
  warm:   "bg-igni-warm",
  forest: "bg-igni-forest text-white",
  white:  "bg-white",
};

interface SectionProps {
  bg?: SectionBg;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({
  bg = "white",
  id,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("section-padding", backgrounds[bg], className)}
    >
      {children}
    </section>
  );
}
