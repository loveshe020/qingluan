import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { getSiteContent } from "@/content/site";
import { getRequestLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "FAQ / 甯歌闂",
  "Frequently asked questions about online Bazi, Qimen Dunjia, and Feng Shui consultations."
);

export default async function FaqPage() {
  const locale = await getRequestLocale();
  const site = getSiteContent(locale);

  return (
    <>
      <PageHero
        eyebrow={site.faqPage.heroEyebrow}
        title={site.faqPage.heroTitle}
        description={site.faqPage.heroDescription}
      />
      <section className="section-space pt-0">
        <div className="container-shell">
          <FAQAccordion items={site.faqItems} />
        </div>
      </section>
      <CTASection
        title={site.faqPage.cta.title}
        description={site.faqPage.cta.description}
        primaryHref="/contact"
        primaryLabel={site.faqPage.cta.primaryLabel}
        secondaryHref="/book"
        secondaryLabel={site.faqPage.cta.secondaryLabel}
      />
    </>
  );
}

