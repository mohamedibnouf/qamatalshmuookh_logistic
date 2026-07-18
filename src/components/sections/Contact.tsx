"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { COMPANY } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageProvider";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = t.contact.form.errors.name;
    if (!form.phone.trim() || form.phone.length < 8)
      newErrors.phone = t.contact.form.errors.phone;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = t.contact.form.errors.email;
    if (!form.message.trim()) newErrors.message = t.contact.form.errors.message;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: "", company: "", phone: "", email: "", message: "" });
    }
  };

  const contactItems = [
    { icon: Phone, label: t.contact.phone, value: COMPANY.phoneDisplay, href: COMPANY.tel },
    { icon: MessageCircle, label: t.contact.whatsapp, value: COMPANY.phoneDisplay, href: COMPANY.whatsapp },
    { icon: Mail, label: t.contact.email, value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: Clock, label: t.contact.hours, value: COMPANY.workingHoursAr },
    { icon: MapPin, label: t.contact.location, value: COMPANY.locationAr },
  ];

  return (
    <section id="contact" className="section-padding bg-light-gray">
      <div className="container-custom">
        <SectionHeading
          label={t.contact.label}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-2xl bg-white p-5 shadow-[var(--shadow-soft)] sm:p-8">
              <div className="mb-6 flex flex-col items-start gap-3 sm:mb-8 sm:flex-row sm:items-center sm:gap-4">
                <Image
                  src="/logo.png"
                  alt="QAS"
                  width={100}
                  height={80}
                  className="h-14 w-auto object-contain sm:h-16"
                />
                <h3 className="text-base font-bold text-navy sm:text-lg">{t.contact.info}</h3>
              </div>
              <ul className="space-y-5">
                {contactItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-blue/10">
                      <item.icon className="h-5 w-5 text-primary-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="break-all font-medium text-navy transition-colors hover:text-primary-blue sm:break-normal"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-navy">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex h-48 items-center justify-center rounded-xl border-2 border-dashed border-border-gray bg-light-gray">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 h-8 w-8 text-muted" />
                  <p className="text-sm text-muted">{t.contact.mapPlaceholder}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-5 shadow-[var(--shadow-soft)] sm:p-8"
              noValidate
            >
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 rounded-xl bg-green-50 p-4 text-sm text-green-700"
                >
                  {t.contact.form.success}
                </motion.div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label={t.contact.form.name}
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  error={errors.name}
                  required
                />
                <FormField
                  label={t.contact.form.company}
                  value={form.company}
                  onChange={(v) => setForm({ ...form, company: v })}
                />
                <FormField
                  label={t.contact.form.phone}
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                  error={errors.phone}
                  type="tel"
                  required
                />
                <FormField
                  label={t.contact.form.email}
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  error={errors.email}
                  type="email"
                  required
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-navy">
                  {t.contact.form.message}
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className={cn(
                    "w-full rounded-xl border bg-white px-4 py-3 text-navy transition-colors focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/20",
                    errors.message ? "border-red-400" : "border-border-gray",
                  )}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <Button type="submit" size="lg" className="mt-6 w-full">
                {t.contact.form.submit}
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  value,
  onChange,
  error,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-navy">
        {label}
        {required && <span className="text-primary-orange"> *</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full rounded-xl border bg-white px-4 py-3 text-navy transition-colors focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/20",
          error ? "border-red-400" : "border-border-gray",
        )}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
