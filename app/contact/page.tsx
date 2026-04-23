import type { Metadata } from "next";

import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { getSiteContent } from "@/content/site";
import { getRequestLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { getPublicSiteConfig } from "@/lib/public-config";

export const metadata: Metadata = buildMetadata(
  "Contact / 鑱旂郴",
  "Contact Qingluan Academy for private inquiries about Bazi, Qimen Dunjia, and Feng Shui consultations."
);

export default async function ContactPage() {
  const locale = await getRequestLocale();
  const site = getSiteContent(locale);
  const config = getPublicSiteConfig();

  return (
    <>
      <PageHero
        eyebrow={site.contactPage.heroEyebrow}
        title={site.contactPage.heroTitle}
        description={site.contactPage.heroDescription}
      />
      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <InquiryForm copy={site.inquiryForm} locale={locale} />
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-line bg-teal p-8 text-ivory shadow-panel">
              <p className="text-sm uppercase tracking-[0.24em] text-jade">{site.contactPage.contactDetails}</p>
              <p className="mt-4 text-lg leading-8 text-ivory/88">{config.contactEmail}</p>
              {config.socialLinks.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {config.socialLinks.map((link) => (
                    <a
                      className="rounded-full border border-jade/40 px-4 py-2 text-sm text-ivory/86 transition hover:border-jade hover:text-ivory"
                      href={link.href}
                      key={link.label}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-sm leading-6 text-ivory/72">{site.contactPage.socialEmpty}</p>
              )}
            </div>
            <div className="panel-surface rounded-[2rem] p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-teal/70">{site.contactPage.processTitle}</p>
              <div className="mt-4 space-y-4">
                {site.contactPage.processSteps.map((step) => (
                  <div className="flex gap-3" key={step}>
                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-gold" />
                    <p className="text-base leading-7 text-ink/80">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

