"use client";

import Image from "next/image";
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
            whileHover={{ scale: 1.005 }}
            className="relative overflow-hidden rounded-3xl px-8 py-16 text-center text-white shadow-2xl shadow-navy/30 sm:px-16 lg:py-24"
          >
            <Image
              src="/images/loading-dock.png"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy/80" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/40 via-transparent to-primary-orange/20" />

            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                {t.cta.title}
              </h2>
              <p className="mb-8 text-lg text-white/85">{t.cta.subtitle}</p>
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
