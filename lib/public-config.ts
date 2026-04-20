export type SocialLink = {
  label: string;
  href: string;
};

export type PublicSiteConfig = {
  contactEmail: string;
  bookingUrl?: string;
  bookingEmbedUrl?: string;
  socialLinks: SocialLink[];
};

const DEFAULT_CONTACT_EMAIL = "hello@qingluan.academy";

/**
 * Returns safe public configuration values used by marketing pages.
 * All values are optional and can be provided via NEXT_PUBLIC_* env vars.
 */
export function getPublicSiteConfig(): PublicSiteConfig {
  const socialLinks: SocialLink[] = [
    { label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "" },
    { label: "Xiaohongshu", href: process.env.NEXT_PUBLIC_XIAOHONGSHU_URL ?? "" },
    { label: "WeChat", href: process.env.NEXT_PUBLIC_WECHAT_URL ?? "" },
  ].filter((item) => item.href.trim().length > 0);

  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  const bookingEmbedUrl = process.env.NEXT_PUBLIC_BOOKING_EMBED_URL?.trim();

  return {
    contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL,
    bookingUrl: bookingUrl && bookingUrl.length > 0 ? bookingUrl : undefined,
    bookingEmbedUrl: bookingEmbedUrl && bookingEmbedUrl.length > 0 ? bookingEmbedUrl : undefined,
    socialLinks,
  };
}
