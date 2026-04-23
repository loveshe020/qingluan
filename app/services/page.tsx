import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { getSiteContent } from "@/content/site";
import { getRequestLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Services / 鏈嶅姟",
  "Explore Bazi, Qimen Dunjia, and Feng Shui consultations offered by Qingluan Academy."
);

export default async function ServicesPage() {
  const locale = await getRequestLocale();
  const site = getSiteContent(locale);

  return (
    <>
      <PageHero
        eyebrow={site.servicesPage.heroEyebrow}
        title={site.servicesPage.heroTitle}
        description={site.servicesPage.heroDescription}
      />
      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {site.services.map((service) => (
            <ServiceCard
              badgeLabel={site.home.service.badge}
              exploreLabel={site.home.service.explore}
              key={service.slug}
              service={service}
            />
          ))}
        </div>
      </section>
      <CTASection
        title={site.servicesPage.cta.title}
        description={site.servicesPage.cta.description}
        primaryHref="/book"
        primaryLabel={site.servicesPage.cta.primaryLabel}
        secondaryHref="/contact"
        secondaryLabel={site.servicesPage.cta.secondaryLabel}
      />
    </>
  );
}

