import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { getSiteContent } from "@/content/site";
import { getRequestLocale } from "@/lib/i18n";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const site = getSiteContent("en");
  const { slug } = await params;
  const service = site.services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service not found | Qingluan Academy",
    };
  }

  return {
    title: `${service.name} | Qingluan Academy`,
    description: service.summary,
  };
}

export function generateStaticParams() {
  const site = getSiteContent("en");
  return site.services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const locale = await getRequestLocale();
  const site = getSiteContent(locale);
  const { slug } = await params;
  const service = site.services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow={service.chineseName} title={service.name} description={service.tagline} />

      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="panel-surface rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.26em] text-teal/70">{site.serviceDetail.summary}</p>
            <p className="mt-4 text-lg leading-8 text-ink/80">{service.summary}</p>
            <div className="mt-8 ornament-line" />
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-teal/70">{site.serviceDetail.whoFor}</p>
                <ul className="mt-4 space-y-4">
                  {service.idealFor.map((item) => (
                    <li className="text-base leading-7 text-ink/78" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-teal/70">{site.serviceDetail.covered}</p>
                <ul className="mt-4 space-y-4">
                  {service.includes.map((item) => (
                    <li className="text-base leading-7 text-ink/78" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-line bg-teal p-8 text-ivory shadow-panel">
              <p className="text-sm uppercase tracking-[0.22em] text-jade">{site.serviceDetail.pricing}</p>
              <p className="mt-4 text-xl leading-8 text-ivory/88">{service.pricing}</p>
              <Link className="cta-button mt-8 rounded-full" href="/book">
                {service.ctaLabel}
              </Link>
            </div>
            <div className="panel-surface rounded-[2rem] p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-teal/70">{site.serviceDetail.deliverables}</p>
              <ul className="mt-4 space-y-4">
                {service.deliverables.map((item) => (
                  <li className="text-base leading-7 text-ink/78" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell panel-surface rounded-[2rem] p-8">
          <p className="text-sm uppercase tracking-[0.22em] text-teal/70">{site.serviceDetail.process}</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {service.process.map((step, index) => (
              <div className="rounded-[1.5rem] border border-line bg-white/50 p-5" key={step}>
                <p className="text-sm uppercase tracking-[0.2em] text-gold">Step 0{index + 1}</p>
                <p className="mt-3 text-base leading-7 text-ink/78">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={site.serviceDetail.ctaTitle}
        description={site.serviceDetail.ctaDescription}
        primaryHref="/book"
        primaryLabel={service.ctaLabel}
        secondaryHref="/contact"
        secondaryLabel={site.serviceDetail.secondaryLabel}
      />
    </>
  );
}
