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
    <FadeIn className={cn("mb-16", align === "center" && "text-center", className)}>
      <span className="mb-4 inline-block rounded-full bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue">
        {label}
      </span>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-lg text-muted leading-relaxed">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
