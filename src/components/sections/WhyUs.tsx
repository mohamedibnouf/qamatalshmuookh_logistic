"use client";

import { motion } from "framer-motion";
import {
  Users,
  Zap,
  Headphones,
  Truck,
  DollarSign,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn } from "@/components/animations/FadeIn";
import { STATS } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageProvider";

const featureIcons = [Users, Zap, Headphones, Truck, DollarSign, ShieldCheck, CheckCircle];
const featureKeys = ["team", "fast", "support", "fleet", "prices", "safety", "reliable"] as const;
const statKeys = ["projects", "clients", "years", "deliveries"] as const;

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          label={t.whyUs.label}
          title={t.whyUs.title}
          description={t.whyUs.description}
        />

        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featureKeys.map((key, i) => {
            const Icon = featureIcons[i];
            const feature = t.whyUs.features[key];
            return (
              <FadeIn key={key} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex gap-4 rounded-2xl border border-border-gray p-6 transition-shadow hover:shadow-[var(--shadow-soft)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-blue/10">
                    <Icon className="h-5 w-5 text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-navy">{feature.title}</h3>
                    <p className="text-sm text-muted">{feature.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.key} delay={i * 0.1}>
              <div className="rounded-2xl bg-gradient-to-br from-primary-blue to-primary-blue/90 p-8 text-center text-white shadow-lg shadow-primary-blue/20">
                <div className="mb-2 text-4xl font-bold lg:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-medium text-white/80">
                  {t.whyUs.stats[statKeys[i]]}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
