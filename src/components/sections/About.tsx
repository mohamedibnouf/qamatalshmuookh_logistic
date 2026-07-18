"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Users, Truck, Clock, Target, Eye, Heart } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { useLanguage } from "@/context/LanguageProvider";

const cardIcons = [Shield, Users, Truck, Clock];
const cardKeys = ["safety", "drivers", "fleet", "delivery"] as const;

export function About() {
  const { t } = useLanguage();

  const infoItems = [
    { icon: Target, title: t.about.mission, text: t.about.missionText },
    { icon: Eye, title: t.about.vision, text: t.about.visionText },
    { icon: Heart, title: t.about.values, text: t.about.valuesText },
  ];

  return (
    <section id="about" className="section-padding bg-light-gray">
      <div className="container-custom">
        <SectionHeading
          label={t.about.label}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="mb-10 grid items-center gap-4 sm:mb-16 sm:gap-6 lg:grid-cols-2 lg:gap-10">
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)] sm:rounded-3xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/meeting.png"
                  alt="اجتماع قمة الشموخ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)] sm:rounded-3xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/team-yard.png"
                  alt="فريق قمة الشموخ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </div>
          </FadeIn>
        </div>

        <div className="mb-10 grid gap-4 sm:mb-16 sm:gap-8 lg:grid-cols-3">
          {infoItems.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="rounded-2xl bg-white p-8 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-card)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue/10">
                  <item.icon className="h-6 w-6 text-primary-blue" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-navy">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cardKeys.map((key, i) => {
            const Icon = cardIcons[i];
            const card = t.about.cards[key];
            return (
              <FadeIn key={key} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-2xl border border-border-gray bg-white p-6 transition-shadow hover:shadow-[var(--shadow-card)]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-orange/10 transition-colors group-hover:bg-primary-orange/20">
                    <Icon className="h-6 w-6 text-primary-orange" />
                  </div>
                  <h3 className="mb-2 font-bold text-navy">{card.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{card.desc}</p>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
