"use client";

import { motion } from "framer-motion";
import { Truck, Package, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { useLanguage } from "@/context/LanguageProvider";

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-60" />
      <svg className="absolute bottom-0 left-0 right-0 h-32 w-full opacity-20" preserveAspectRatio="none">
        <motion.path
          d="M0,80 Q200,40 400,60 T800,50 T1200,70 T1600,55 L1600,128 L0,128 Z"
          fill="none"
          stroke="#3D4F5F"
          strokeWidth="2"
          strokeDasharray="8 8"
          animate={{ strokeDashoffset: [0, -32] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      <motion.div
        className="absolute top-1/4 start-[10%] h-3 w-3 rounded-full bg-primary-blue/30"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 end-[15%] h-2 w-2 rounded-full bg-primary-orange/40"
        animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 start-[20%] h-2 w-2 rounded-full bg-primary-blue/20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />
    </div>
  );
}

function TruckIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
    >
      <div className="relative mx-auto aspect-square max-w-md rounded-3xl bg-gradient-to-br from-primary-blue/5 to-primary-orange/5 p-8 shadow-[var(--shadow-card)]">
        <motion.div
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-full flex-col items-center justify-center"
        >
          <div className="relative mb-6">
            <Truck className="h-32 w-32 text-primary-blue sm:h-40 sm:w-40" strokeWidth={1.2} />
            <motion.div
              className="absolute -top-2 -end-2 rounded-full bg-primary-orange p-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Package className="h-5 w-5 text-white" />
            </motion.div>
          </div>
          <div className="flex items-center gap-6">
            <motion.div
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <MapPin className="h-4 w-4 text-primary-orange" />
              <span className="text-xs font-medium text-navy">KSA</span>
            </motion.div>
            <motion.div
              className="h-1 w-16 rounded-full bg-gradient-to-r from-primary-blue to-primary-orange"
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ originX: 0 }}
            />
          </div>
        </motion.div>
        <motion.div
          className="absolute -top-4 -end-4 rounded-2xl bg-white px-4 py-2 shadow-lg"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        >
          <span className="text-2xl font-bold text-primary-blue">24/7</span>
        </motion.div>
        <motion.div
          className="absolute -bottom-4 -start-4 rounded-2xl bg-primary-orange px-4 py-2 text-white shadow-lg"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <span className="text-sm font-bold">QAS</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white pt-20">
      <HeroBackground />
      <div className="container-custom relative flex min-h-[calc(100vh-5rem)] items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn delay={0.1}>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-blue/20 bg-primary-blue/5 px-4 py-2 text-sm font-medium text-primary-blue">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary-orange" />
                {t.hero.badge}
              </span>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
                {t.hero.headline}
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted">
                {t.hero.subheadline}
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button href="#contact" size="lg">
                  {t.hero.ctaQuote}
                </Button>
                <Button href="#contact" variant="outline" size="lg">
                  {t.hero.ctaContact}
                </Button>
              </div>
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={0.3}>
            <TruckIllustration />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
