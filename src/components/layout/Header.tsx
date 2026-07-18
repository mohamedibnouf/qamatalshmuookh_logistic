"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Globe } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { NAV_LINKS } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageProvider";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, locale, toggleLocale } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLabels: Record<string, string> = {
    home: t.nav.home,
    about: t.nav.about,
    services: t.nav.services,
    fleet: t.nav.fleet,
    whyUs: t.nav.whyUs,
    contact: t.nav.contact,
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-nav border-b border-border-gray shadow-[var(--shadow-soft)]"
            : "bg-transparent",
        )}
      >
        <div className="container-custom flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            aria-label="Home"
            className={cn(
              "rounded-xl transition-all",
              scrolled ? "" : "bg-white/95 px-2 py-1.5 shadow-md",
            )}
          >
            <Logo size="sm" priority />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className={cn(
                  "group relative text-sm font-medium transition-colors",
                  scrolled
                    ? "text-navy/80 hover:text-primary-blue"
                    : "text-white/90 hover:text-white",
                )}
              >
                {navLabels[link.key]}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary-orange transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <button
              onClick={toggleLocale}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "text-navy/80 hover:bg-light-gray hover:text-primary-blue"
                  : "text-white/90 hover:bg-white/10",
              )}
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              {locale === "en" ? "العربية" : "English"}
            </button>
            <Button href="#contact" size="sm" variant={scrolled ? "primary" : "secondary"}>
              {t.nav.requestQuote}
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className={cn(
              "rounded-lg p-2 transition-colors lg:hidden",
              scrolled
                ? "text-navy hover:bg-light-gray"
                : "text-white hover:bg-white/10",
            )}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLabels={navLabels}
      />
    </>
  );
}
