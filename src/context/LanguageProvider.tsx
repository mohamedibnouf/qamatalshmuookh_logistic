"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { getTranslation } from "@/lib/translations";
import type { Translations } from "@/lib/translations";

interface LanguageContextValue {
  locale: "ar";
  t: Translations;
  dir: "rtl";
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    localStorage.removeItem("qas-locale");
  }, []);

  const value = useMemo(
    () => ({
      locale: "ar" as const,
      t: getTranslation("ar"),
      dir: "rtl" as const,
    }),
    [],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
