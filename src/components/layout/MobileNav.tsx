"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Globe } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageProvider";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLabels: Record<string, string>;
}

export function MobileNav({ isOpen, onClose, navLabels }: MobileNavProps) {
  const { t, locale, toggleLocale } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-navy/40 backdrop-blur-sm lg:hidden"
          />
          <motion.div
            initial={{ x: locale === "ar" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: locale === "ar" ? "-100%" : "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 bottom-0 z-[80] w-[min(320px,85vw)] bg-white shadow-2xl end-0 lg:hidden"
          >
            <div className="flex h-full flex-col p-6">
              <div className="mb-8 flex items-center justify-between">
                <Logo size="sm" />
                <button
                  onClick={onClose}
                  className="rounded-lg p-2 text-navy hover:bg-light-gray"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.key}
                    href={link.href}
                    onClick={onClose}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-xl px-4 py-3 text-lg font-medium text-navy transition-colors hover:bg-light-gray hover:text-primary-blue"
                  >
                    {navLabels[link.key]}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3">
                <button
                  onClick={toggleLocale}
                  className="flex items-center justify-center gap-2 rounded-xl border border-border-gray px-4 py-3 text-sm font-medium text-navy"
                >
                  <Globe className="h-4 w-4" />
                  {locale === "en" ? "العربية" : "English"}
                </button>
                <Button href="#contact" onClick={onClose} className="w-full">
                  {t.nav.requestQuote}
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
