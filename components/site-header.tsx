"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import type { Locale } from "@/content/site";
import { LOCALE_COOKIE_NAME } from "@/lib/i18n-shared";

type SiteHeaderProps = {
  locale: Locale;
  navigation: Array<{ href: string; label: string }>;
  brandTitle: string;
  brandSubtitle: string;
  bookLabel: string;
  langZhLabel: string;
  langEnLabel: string;
};

/**
 * 渲染网站头部导航，并根据当前路由高亮激活项。
 * @returns 网站头部组件。
 */
export function SiteHeader({
  locale,
  navigation,
  brandTitle,
  brandSubtitle,
  bookLabel,
  langZhLabel,
  langEnLabel,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale: Locale) {
    if (nextLocale === locale) {
      return;
    }
    document.cookie = `${LOCALE_COOKIE_NAME}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[rgba(247,243,235,0.86)] backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-gold/35 bg-white/70">
            <Image
              alt="Qingluan Academy logo"
              className="object-cover"
              fill
              sizes="44px"
              src="/images/brand-logo.png"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-teal/70">{brandTitle}</p>
            <p className="text-xs text-ink/62">{brandSubtitle}</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                className={`text-sm uppercase tracking-[0.18em] ${
                  active ? "text-teal" : "text-ink/72"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${
              locale === "zh" ? "border-teal text-teal" : "border-line text-ink/70"
            }`}
            onClick={() => switchLocale("zh")}
            type="button"
          >
            {langZhLabel}
          </button>
          <button
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${
              locale === "en" ? "border-teal text-teal" : "border-line text-ink/70"
            }`}
            onClick={() => switchLocale("en")}
            type="button"
          >
            {langEnLabel}
          </button>
          <Link className="cta-button rounded-full px-5 py-3 text-sm" href="/book">
            {bookLabel}
          </Link>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <button
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${
              locale === "zh" ? "border-teal text-teal" : "border-line text-ink/70"
            }`}
            onClick={() => switchLocale("zh")}
            type="button"
          >
            {langZhLabel}
          </button>
          <button
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${
              locale === "en" ? "border-teal text-teal" : "border-line text-ink/70"
            }`}
            onClick={() => switchLocale("en")}
            type="button"
          >
            {langEnLabel}
          </button>
          <Link className="cta-button rounded-full px-5 py-3 text-sm" href="/book">
            {bookLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
