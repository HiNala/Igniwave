import type React from "react";
import { cn } from "@/lib/utils";

export type ContainerSize = "default" | "narrow" | "wide";

const sizes: Record<ContainerSize, string> = {
  default: "max-w-7xl mx-auto px-6 md:px-8 lg:px-12",
  narrow:  "max-w-4xl mx-auto px-6 md:px-8",
  wide:    "max-w-[1440px] mx-auto px-6 md:px-8 lg:px-16",
};

interface ContainerProps {
  size?: ContainerSize;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export default function Container({
  size = "default",
  className,
  children,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn(sizes[size], className)}>
      {children}
    </Tag>
  );
}
