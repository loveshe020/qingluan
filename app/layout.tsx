import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteContent } from "@/content/site";
import { getRequestLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "青鸾书院 | Qingluan Academy",
  description:
    "青鸾书院 Qingluan Academy：八字、奇门遁甲与风水线上咨询。Bazi, Qimen Dunjia and Feng Shui online consultations.",
  keywords: [
    "Qingluan Academy",
    "青鸾书院",
    "Bazi consultation",
    "Qimen Dunjia consultation",
    "Feng Shui consultation",
    "Chinese metaphysics online",
  ],
};

type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getRequestLocale();
  const site = getSiteContent(locale);

  return (
    <html lang={locale}>
      <body className="font-sans text-ink antialiased">
        <SiteHeader
          bookLabel={site.header.bookButton}
          brandSubtitle={site.header.brandSubtitle}
          brandTitle={site.header.brandTitle}
          langEnLabel={site.header.langEn}
          langZhLabel={site.header.langZh}
          locale={locale}
          navigation={site.navigation}
        />
        <main>{children}</main>
        <SiteFooter
          bookLabel={site.header.bookButton}
          brandTitle={site.footer.brandTitle}
          description={site.footer.description}
          disclaimer={site.footer.disclaimer}
          navigation={site.navigation}
        />
      </body>
    </html>
  );
}

