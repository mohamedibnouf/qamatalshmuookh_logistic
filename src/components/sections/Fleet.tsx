"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { useLanguage } from "@/context/LanguageProvider";

const fleetKeys = ["flatbed", "box", "trailer", "refrigerated"] as const;
const fleetImages = [
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80",
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

        <div className="grid gap-6 sm:grid-cols-2">
          {fleetKeys.map((key, i) => {
            const item = t.fleet.items[key];
            return (
              <FadeIn key={key} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-soft)]"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={fleetImages[i]}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <h3 className="absolute bottom-4 start-4 text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-muted leading-relaxed">{item.desc}</p>
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
