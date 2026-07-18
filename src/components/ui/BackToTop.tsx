"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t.floating.backToTop}
          className="fixed z-50 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-shadow hover:shadow-xl sm:h-12 sm:w-12"
          style={{
            bottom: "calc(max(1rem, env(safe-area-inset-bottom)) + 7.25rem)",
            insetInlineEnd: "max(0.75rem, env(safe-area-inset-right))",
          }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
