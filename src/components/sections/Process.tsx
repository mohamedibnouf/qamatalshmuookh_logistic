"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Map,
  PackageOpen,
  Truck,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { useLanguage } from "@/context/LanguageProvider";

const stepIcons = [FileText, Map, PackageOpen, Truck, MapPin, CheckCircle2];
const stepKeys = ["request", "planning", "loading", "transport", "delivery", "completion"] as const;

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="section-padding bg-light-gray">
      <div className="container-custom">
        <SectionHeading
          label={t.process.label}
          title={t.process.title}
          description={t.process.description}
        />

        <div className="relative">
          <div className="absolute top-16 hidden h-0.5 bg-gradient-to-r from-primary-blue via-primary-orange to-primary-blue lg:block start-[8%] end-[8%]" />
          <motion.div
            className="absolute top-16 hidden h-0.5 bg-primary-orange lg:block start-[8%]"
            initial={{ width: "0%" }}
            whileInView={{ width: "84%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {stepKeys.map((key, i) => {
              const Icon = stepIcons[i];
              const step = t.process.steps[key];
              return (
                <FadeIn key={key} delay={i * 0.1}>
                  <div className="relative flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[var(--shadow-card)] ring-4 ring-light-gray"
                    >
                      <Icon className="h-7 w-7 text-primary-blue" />
                      <span className="absolute -top-2 -end-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-orange text-xs font-bold text-white">
                        {i + 1}
                      </span>
                    </motion.div>
                    <h3 className="mb-2 font-bold text-navy">{step.title}</h3>
                    <p className="text-sm text-muted">{step.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
