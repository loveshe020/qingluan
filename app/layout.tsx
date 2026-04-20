import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteMeta } from "@/content/site";

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  keywords: [
    "Qingluan Academy",
    "Bazi consultation",
    "Qimen Dunjia consultation",
    "Feng Shui consultation",
    "Chinese metaphysics online",
    "life direction and timing consultation",
  ],
};

type RootLayoutProps = {
  children: ReactNode;
};

/**
 * 定义站点根布局，统一注入字体、导航、页脚和全局元数据。
 * @param props 页面子节点。
 * @returns 根布局组件。
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="font-sans text-ink antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
