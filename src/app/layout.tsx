import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Qamat Alshmuookh Transportation Company | Premium Logistics Services Saudi Arabia",
  description:
    "Professional logistics and transportation company in Saudi Arabia providing reliable cargo transportation, fleet services, and logistics solutions.",
  keywords: [
    "logistics",
    "transportation",
    "Saudi Arabia",
    "cargo",
    "fleet",
    "Qamat Alshmuookh",
    "نقليات",
    "شحن",
  ],
  authors: [{ name: COMPANY.nameEn }],
  openGraph: {
    title: "Qamat Alshmuookh Transportation Company",
    description:
      "Professional logistics and transportation company in Saudi Arabia providing reliable cargo transportation, fleet services, and logistics solutions.",
    type: "website",
    locale: "en_SA",
    alternateLocale: "ar_SA",
    siteName: COMPANY.nameEn,
  },
  twitter: {
    card: "summary_large_image",
    title: "Qamat Alshmuookh Transportation Company",
    description:
      "Professional logistics and transportation company in Saudi Arabia providing reliable cargo transportation, fleet services, and logistics solutions.",
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TransportationService",
  name: COMPANY.nameEn,
  alternateName: COMPANY.nameAr,
  description:
    "Professional logistics and transportation company in Saudi Arabia providing reliable cargo transportation, fleet services, and logistics solutions.",
  url: "https://qamatalshmuookh.com",
  email: COMPANY.email,
  telephone: COMPANY.phone,
  areaServed: {
    "@type": "Country",
    name: "Saudi Arabia",
  },
  serviceType: [
    "General Cargo Transport",
    "Heavy Equipment Transport",
    "Construction Materials Transport",
    "Commercial Goods Delivery",
    "Long Distance Transportation",
    "Fleet Management Solutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
