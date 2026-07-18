"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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
  const { t } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

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
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 bottom-0 z-[80] flex w-[min(340px,90vw)] flex-col bg-white shadow-2xl end-0 lg:hidden"
            style={{
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            <div className="flex h-full flex-col overflow-y-auto p-5 sm:p-6">
              <div className="mb-6 flex items-center justify-between gap-3 sm:mb-8">
                <Logo size="sm" className="!h-12" />
                <button
                  onClick={onClose}
                  className="rounded-lg p-2 text-navy hover:bg-light-gray"
                  aria-label="إغلاق القائمة"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.key}
                    href={link.href}
                    onClick={onClose}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-xl px-4 py-3.5 text-base font-medium text-navy transition-colors hover:bg-light-gray hover:text-primary-blue sm:text-lg"
                  >
                    {navLabels[link.key]}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto pt-8">
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
