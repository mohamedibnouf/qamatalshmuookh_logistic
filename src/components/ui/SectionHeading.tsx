"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn className={cn("mb-10 sm:mb-14 lg:mb-16", align === "center" && "text-center", className)}>
      <span className="mb-3 inline-block rounded-full bg-primary-blue/10 px-3 py-1 text-xs font-medium text-primary-blue sm:mb-4 sm:px-4 sm:py-1.5 sm:text-sm">
        {label}
      </span>
      <h2 className="mb-3 text-2xl font-bold tracking-tight text-navy sm:mb-4 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
