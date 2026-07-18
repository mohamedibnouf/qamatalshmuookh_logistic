"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageProvider";

export function FloatingActions() {
  const { t } = useLanguage();

  return (
    <div
      className="fixed z-50 flex flex-col gap-2.5 sm:gap-3"
      style={{
        bottom: "max(1rem, env(safe-area-inset-bottom))",
        insetInlineEnd: "max(0.75rem, env(safe-area-inset-right))",
      }}
    >
      <motion.a
        href={COMPANY.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t.floating.whatsapp}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-3"
      >
        <MessageCircle className="h-5 w-5 shrink-0" />
        <span className="hidden text-sm font-medium sm:inline">{t.floating.whatsapp}</span>
      </motion.a>
      <motion.a
        href={COMPANY.tel}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t.floating.call}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-blue text-white shadow-lg shadow-primary-blue/30 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-3"
      >
        <Phone className="h-5 w-5 shrink-0" />
        <span className="hidden text-sm font-medium sm:inline">{t.floating.call}</span>
      </motion.a>
    </div>
  );
}
