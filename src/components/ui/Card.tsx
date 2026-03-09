import type React from "react";
import { cn } from "@/lib/utils";

export type CardVariant = "default" | "elevated" | "bordered" | "dark";

const variants: Record<CardVariant, string> = {
  default:  "bg-white rounded-2xl p-6 md:p-8",
  elevated: "bg-white rounded-2xl p-6 md:p-8 shadow-soft",
  bordered: "bg-white rounded-2xl p-6 md:p-8 border border-igni-charcoal/10",
  dark:     "bg-igni-forest text-white rounded-2xl p-6 md:p-8",
};

interface CardProps {
  variant?: CardVariant;
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export default function Card({
  variant = "default",
  hover = false,
  className,
  children,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        variants[variant],
        hover && "cursor-pointer hover:-translate-y-1 hover:shadow-soft-lg transition-all duration-300",
        className
      )}
    >
      {children}
    </Tag>
  );
}
