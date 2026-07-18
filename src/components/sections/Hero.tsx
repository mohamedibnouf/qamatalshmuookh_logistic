"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { useLanguage } from "@/context/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/truck-highway.png"
          alt="Qamat Alshmuookh fleet on the road"
          fill
          priority
          className="object-cover object-[70%_center] sm:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/85 sm:bg-gradient-to-r sm:from-navy/85 sm:via-navy/70 sm:to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/30" />
      </div>

      <div className="container-custom relative flex min-h-[100svh] items-end sm:items-center px-4 pb-24 pt-28 sm:px-6 sm:pb-20 lg:px-8">
        <div className="w-full max-w-2xl">
          <FadeIn delay={0.1}>
            <h1 className="mb-4 text-[1.75rem] font-bold leading-snug tracking-tight text-white sm:mb-6 sm:text-5xl lg:text-6xl">
              {t.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mb-6 max-w-xl text-base leading-relaxed text-white/85 sm:mb-8 sm:text-lg">
              {t.hero.subheadline}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <Button href="#contact" size="lg" variant="secondary" className="w-full sm:w-auto">
                {t.hero.ctaQuote}
              </Button>
              <Button
                href="#contact"
                variant="outline"
                size="lg"
                className="w-full !border-white !text-white hover:!bg-white hover:!text-navy sm:w-auto"
              >
                {t.hero.ctaContact}
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
