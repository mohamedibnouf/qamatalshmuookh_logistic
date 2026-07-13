"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageProvider";

export function Footer() {
  const { t, locale } = useLanguage();

  const navLabels: Record<string, string> = {
    home: t.nav.home,
    about: t.nav.about,
    services: t.nav.services,
    fleet: t.nav.fleet,
    whyUs: t.nav.whyUs,
    contact: t.nav.contact,
  };

  const serviceLinks = [
    t.services.items.general.title,
    t.services.items.heavy.title,
    t.services.items.construction.title,
    t.services.items.commercial.title,
  ];

  return (
    <footer className="border-t border-border-gray bg-white">
      <div className="container-custom section-padding !py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size="md" />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-navy">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary-blue"
                  >
                    {navLabels[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-navy">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-muted transition-colors hover:text-primary-blue"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-navy">
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={COMPANY.tel}
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary-blue"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary-blue"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {locale === "ar" ? COMPANY.locationAr : COMPANY.locationEn}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-gray pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()}{" "}
            {locale === "ar" ? COMPANY.nameAr : COMPANY.nameEn}. {t.footer.rights}
          </p>
          <div className="flex gap-4">
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-primary-blue"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-sm text-muted transition-colors hover:text-primary-blue"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
