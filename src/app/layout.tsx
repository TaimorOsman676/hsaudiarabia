import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHotline from "@/components/FloatingHotline";

export const metadata: Metadata = {
  title: "International House Saudi Arabia | World-Class English Language Training",
  description:
    "IH Saudi Arabia — one of the largest global networks of English language schools in the Kingdom. Offering Cambridge-certified CELTA training, corporate English, young learners, and study abroad programmes across Riyadh, Jeddah, Dammam and more.",
  keywords:
    "International House Saudi Arabia, English courses Saudi Arabia, CELTA training Riyadh, language school Jeddah, English for companies, study abroad Saudi, IH World",
  openGraph: {
    title: "International House Saudi Arabia",
    description: "World-class English language education in the Kingdom since 2001.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Cairo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingHotline />
        </LanguageProvider>
      </body>
    </html>
  );
}
