import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Services",
  "Explore Bazi, Qimen Dunjia, and Feng Shui consultations offered by Qingluan Academy."
);

/**
 * 渲染服务总览页，集中呈现三项核心服务。
 * @returns 服务总览页组件。
 */
export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Three consultation formats, each designed for a different kind of question."
        description="Choose between personal chart reflection, strategic timing support, or environmental alignment for home and workspace."
      />
      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <CTASection
        title="Not sure which service fits best?"
        description="Start with the booking page or send an inquiry. The structure is ready for a guided recommendation flow later."
        primaryHref="/book"
        primaryLabel="Compare service options"
        secondaryHref="/contact"
        secondaryLabel="Send an inquiry"
      />
    </>
  );
}
