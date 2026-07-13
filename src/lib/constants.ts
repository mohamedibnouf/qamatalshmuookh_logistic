export const COMPANY = {
  nameEn: "Qamat Alshmuookh Transportation Company",
  nameAr: "شركة قمة الشموخ للنقليات",
  shortName: "QAS",
  email: "info@qamatalshmuookh.com",
  phone: "+966531250072",
  phoneDisplay: "+966 531250072",
  whatsapp: "https://wa.me/966531250072",
  tel: "tel:+966531250072",
  workingHoursEn: "Sunday – Thursday: 8:00 AM – 6:00 PM",
  workingHoursAr: "الأحد – الخميس: 8:00 ص – 6:00 م",
  locationEn: "Kingdom of Saudi Arabia",
  locationAr: "المملكة العربية السعودية",
} as const;

export const COLORS = {
  primaryBlue: "#3D4F5F",
  primaryOrange: "#F37021",
  navy: "#2D3E50",
  lightGray: "#F5F7FA",
  borderGray: "#E2E8F0",
} as const;

export const STATS = [
  { key: "projects", value: 2500, suffix: "+" },
  { key: "clients", value: 850, suffix: "+" },
  { key: "years", value: 15, suffix: "+" },
  { key: "deliveries", value: 12000, suffix: "+" },
] as const;

export const NAV_LINKS = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "fleet", href: "#fleet" },
  { key: "whyUs", href: "#why-us" },
  { key: "contact", href: "#contact" },
] as const;
