import type { Locale } from "@/content/site";

export const LOCALE_COOKIE_NAME = "qingluan_locale";
export const DEFAULT_LOCALE: Locale = "zh";
export const SUPPORTED_LOCALES: Locale[] = ["zh", "en"];

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "zh" || value === "en";
}

