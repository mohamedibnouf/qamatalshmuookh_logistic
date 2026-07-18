"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { useLanguage } from "@/context/LanguageProvider";

export function Testimonials() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const items = t.testimonials.items;

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading label={t.testimonials.label} title={t.testimonials.title} />

        <FadeIn>
          <div className="relative mx-auto max-w-3xl">
            <div className="mb-8 flex justify-center">
              <Quote className="h-12 w-12 text-primary-orange/30" />
            </div>

            <div className="relative min-h-[220px] sm:min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="mb-6 px-1 text-base leading-relaxed text-navy/80 italic sm:mb-8 sm:text-xl lg:text-2xl">
                    &ldquo;{items[active].text}&rdquo;
                  </p>
                  <div>
                    <p className="font-bold text-navy">{items[active].name}</p>
                    <p className="text-sm text-primary-blue">{items[active].company}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-primary-orange" : "w-2 bg-border-gray"
                  }`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
