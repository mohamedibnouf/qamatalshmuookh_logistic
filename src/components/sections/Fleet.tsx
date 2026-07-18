"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { useLanguage } from "@/context/LanguageProvider";

const fleetItems = [
  {
    key: "flatbed" as const,
    image: "/images/fleet-hq.png",
  },
  {
    key: "box" as const,
    image: "/images/truck-highway.png",
  },
  {
    key: "trailer" as const,
    image: "/images/loading-dock.png",
  },
  {
    key: "refrigerated" as const,
    image: "/images/team-yard.png",
  },
];

export function Fleet() {
  const { t } = useLanguage();

  return (
    <section id="fleet" className="section-padding bg-light-gray">
      <div className="container-custom">
        <SectionHeading
          label={t.fleet.label}
          title={t.fleet.title}
          description={t.fleet.description}
        />

        <FadeIn className="mb-10">
          <div className="relative h-[220px] overflow-hidden rounded-2xl shadow-[var(--shadow-card)] sm:h-[380px] sm:rounded-3xl lg:h-[480px]">
            <Image
              src="/images/fleet-hq.png"
              alt="Qamat Alshmuookh fleet headquarters"
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
            <div className="absolute bottom-0 start-0 end-0 p-5 sm:p-8 lg:p-10">
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary-orange sm:mb-2 sm:text-sm">
                QAS
              </p>
              <h3 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                {t.fleet.title}
              </h3>
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {fleetItems.map((item, i) => {
            const content = t.fleet.items[item.key];
            return (
              <FadeIn key={item.key} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  className="group overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-soft)]"
                >
                  <div className="relative h-52 overflow-hidden sm:h-72">
                    <Image
                      src={item.image}
                      alt={content.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/65 to-transparent" />
                    <h3 className="absolute bottom-3 start-3 text-lg font-bold text-white sm:bottom-4 sm:start-4 sm:text-xl">
                      {content.title}
                    </h3>
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-sm leading-relaxed text-muted sm:text-base">{content.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
