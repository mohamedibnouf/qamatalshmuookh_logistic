"use client";

import { LanguageProvider } from "@/context/LanguageProvider";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { FloatingActions } from "@/components/ui/FloatingActions";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LoadingScreen />
      <ScrollProgress />
      {children}
      <BackToTop />
      <FloatingActions />
    </LanguageProvider>
  );
}
