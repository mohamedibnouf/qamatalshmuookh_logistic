"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { useLanguage } from "@/context/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/truck-highway.png"
          alt="Qamat Alshmuookh fleet on the road"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/70 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/20" />
      </div>

      <div className="container-custom relative flex min-h-screen items-center px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <FadeIn delay={0.1}>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/85">
              {t.hero.subheadline}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Button href="#contact" size="lg" variant="secondary">
                {t.hero.ctaQuote}
              </Button>
              <Button
                href="#contact"
                variant="outline"
                size="lg"
                className="!border-white !text-white hover:!bg-white hover:!text-navy"
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
