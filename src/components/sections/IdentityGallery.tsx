"use client";

import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";

const gallery = [
  { src: "/images/fleet-hq.png", alt: "الأسطول في المقر" },
  { src: "/images/truck-highway.png", alt: "على الطريق السريع" },
  { src: "/images/loading-dock.png", alt: "عمليات التحميل" },
  { src: "/images/team-yard.png", alt: "فريق العمل الميداني" },
  { src: "/images/meeting.png", alt: "اجتماع الأعمال" },
];

export function IdentityGallery() {
  return (
    <section className="overflow-hidden bg-white py-4 sm:py-6">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {gallery.map((item) => (
              <div
                key={item.src}
                className="relative h-36 w-[72vw] max-w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl sm:h-40"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="72vw"
                />
              </div>
            ))}
          </div>

          <div className="hidden gap-4 md:grid md:grid-cols-3 lg:grid-cols-5">
            {gallery.map((item) => (
              <div
                key={item.src}
                className="relative h-40 overflow-hidden rounded-2xl lg:h-44"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 33vw, 20vw"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
