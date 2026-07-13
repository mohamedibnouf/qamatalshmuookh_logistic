"use client";

import { motion } from "framer-motion";
import {
  Package,
  Container,
  Building2,
  ShoppingCart,
  Route,
  Settings,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { useLanguage } from "@/context/LanguageProvider";

const serviceIcons = [Package, Container, Building2, ShoppingCart, Route, Settings];
const serviceKeys = [
  "general",
  "heavy",
  "construction",
  "commercial",
  "longDistance",
  "fleet",
] as const;

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          label={t.services.label}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key, i) => {
            const Icon = serviceIcons[i];
            const service = t.services.items[key];
            return (
              <FadeIn key={key} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl border border-border-gray bg-white p-8 shadow-[var(--shadow-soft)] transition-all hover:border-primary-blue/20 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="absolute -end-4 -top-4 h-24 w-24 rounded-full bg-primary-blue/5 transition-transform group-hover:scale-150" />
                  <div className="relative">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-blue to-primary-blue/80 text-white shadow-lg shadow-primary-blue/20">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-navy">{service.title}</h3>
                    <p className="text-muted leading-relaxed">{service.desc}</p>
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
