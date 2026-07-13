"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { COMPANY } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageProvider";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <FadeIn>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-blue via-primary-blue to-primary-blue/90 px-8 py-16 text-center text-white shadow-2xl shadow-primary-blue/30 sm:px-16 lg:py-20"
          >
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <div className="absolute -top-20 -end-20 h-64 w-64 rounded-full bg-primary-orange" />
              <div className="absolute -bottom-20 -start-20 h-64 w-64 rounded-full bg-white" />
            </div>
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                {t.cta.title}
              </h2>
              <p className="mb-8 text-lg text-white/80">{t.cta.subtitle}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  href={COMPANY.tel}
                  variant="secondary"
                  size="lg"
                  className="!bg-primary-orange !text-white"
                >
                  <Phone className="h-5 w-5" />
                  {t.cta.callNow}
                </Button>
                <Button
                  href={COMPANY.whatsapp}
                  variant="outline"
                  size="lg"
                  className="!border-white !text-white hover:!bg-white hover:!text-primary-blue"
                >
                  <MessageCircle className="h-5 w-5" />
                  {t.cta.whatsapp}
                </Button>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
