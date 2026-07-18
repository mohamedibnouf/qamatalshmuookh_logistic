import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import { Providers } from "@/components/Providers";
import { COMPANY } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2d3e50",
};

export const metadata: Metadata = {
  title: "شركة قمة الشموخ للنقليات | خدمات لوجستية ونقل متميزة في السعودية",
  description:
    "شركة قمة الشموخ للنقليات تقدم خدمات نقل وشحن احترافية في المملكة العربية السعودية بأعلى معايير الجودة والموثوقية.",
  keywords: [
    "نقليات",
    "شحن",
    "نقل",
    "لوجستيات",
    "قمة الشموخ",
    "السعودية",
    "نقل بضائع",
    "أسطول",
  ],
  authors: [{ name: COMPANY.nameAr }],
  openGraph: {
    title: "شركة قمة الشموخ للنقليات",
    description:
      "شركة قمة الشموخ للنقليات تقدم خدمات نقل وشحن احترافية في المملكة العربية السعودية بأعلى معايير الجودة والموثوقية.",
    type: "website",
    locale: "ar_SA",
    siteName: COMPANY.nameAr,
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة قمة الشموخ للنقليات",
    description:
      "شركة قمة الشموخ للنقليات تقدم خدمات نقل وشحن احترافية في المملكة العربية السعودية بأعلى معايير الجودة والموثوقية.",
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TransportationService",
  name: COMPANY.nameAr,
  alternateName: COMPANY.nameEn,
  description:
    "شركة قمة الشموخ للنقليات تقدم خدمات نقل وشحن احترافية في المملكة العربية السعودية.",
  url: "https://qamatalshmuookh.com",
  email: COMPANY.email,
  telephone: COMPANY.phone,
  inLanguage: "ar",
  areaServed: {
    "@type": "Country",
    name: "المملكة العربية السعودية",
  },
  serviceType: [
    "نقل البضائع العامة",
    "نقل المعدات الثقيلة",
    "نقل مواد البناء",
    "توصيل البضائع التجارية",
    "النقل لمسافات طويلة",
    "حلول إدارة الأساطيل",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${ibmPlexArabic.variable} min-h-screen bg-white font-sans text-navy antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
