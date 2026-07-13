"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageProvider";

export function FloatingActions() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 end-6 z-50 flex flex-col gap-3">
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
        className="group flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-[#25D366]/30 transition-shadow hover:shadow-xl"
      >
        <MessageCircle className="h-5 w-5" />
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
        className="group flex items-center gap-2 rounded-full bg-primary-blue px-4 py-3 text-white shadow-lg shadow-primary-blue/30 transition-shadow hover:shadow-xl"
      >
        <Phone className="h-5 w-5" />
        <span className="hidden text-sm font-medium sm:inline">{t.floating.call}</span>
      </motion.a>
    </div>
  );
}
