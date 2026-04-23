import { cookies, headers } from "next/headers";

import type { Locale } from "@/content/site";
import { DEFAULT_LOCALE, LOCALE_COOKIE_NAME, isLocale } from "@/lib/i18n-shared";

function pickLocaleFromAcceptLanguage(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) {
    return DEFAULT_LOCALE;
  }

  const normalized = acceptLanguage.toLowerCase();
  if (normalized.includes("zh")) {
    return "zh";
  }
  if (normalized.includes("en")) {
    return "en";
  }
  return DEFAULT_LOCALE;
}

export async function getRequestLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const fromCookie = cookieStore.get(LOCALE_COOKIE_NAME)?.value;
  if (isLocale(fromCookie)) {
    return fromCookie;
  }

  const headerStore = await headers();
  const fromHeader = pickLocaleFromAcceptLanguage(headerStore.get("accept-language"));
  return fromHeader;
}
