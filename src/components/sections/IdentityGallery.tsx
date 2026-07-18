"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { useLanguage } from "@/context/LanguageProvider";

const gallery = [
  { src: "/images/fleet-hq.png", altEn: "Fleet at headquarters", altAr: "الأسطول في المقر" },
  { src: "/images/truck-highway.png", altEn: "On the highway", altAr: "على الطريق السريع" },
  { src: "/images/loading-dock.png", altEn: "Loading operations", altAr: "عمليات التحميل" },
  { src: "/images/team-yard.png", altEn: "Field team", altAr: "فريق العمل الميداني" },
  { src: "/images/meeting.png", altEn: "Business meeting", altAr: "اجتماع الأعمال" },
];

export function IdentityGallery() {
  const { locale } = useLanguage();

  return (
    <section className="overflow-hidden bg-white py-6">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
            {gallery.map((item, i) => (
              <div
                key={item.src}
                className={`relative overflow-hidden rounded-2xl ${
                  i === 0 ? "col-span-2 aspect-[16/9] md:col-span-2 md:aspect-auto md:h-44" : "aspect-[4/3] md:h-44"
                }`}
              >
                <Image
                  src={item.src}
                  alt={locale === "ar" ? item.altAr : item.altEn}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
