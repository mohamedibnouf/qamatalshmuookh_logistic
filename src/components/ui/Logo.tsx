import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
}

const sizes = {
  sm: { width: 100, height: 80, className: "h-14 w-auto" },
  md: { width: 120, height: 96, className: "h-16 w-auto" },
  lg: { width: 160, height: 128, className: "h-24 w-auto" },
};

export function Logo({ className, size = "md", priority = false }: LogoProps) {
  const config = sizes[size];

  return (
    <Image
      src="/logo.png"
      alt="Qamat Alshmuookh Transportation Company"
      width={config.width}
      height={config.height}
      priority={priority}
      className={cn(config.className, "object-contain", className)}
    />
  );
}
