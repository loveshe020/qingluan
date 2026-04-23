import Link from "next/link";

import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { TrustSection } from "@/components/trust-section";
import { getSiteContent } from "@/content/site";
import { getRequestLocale } from "@/lib/i18n";

export default async function HomePage() {
  const locale = await getRequestLocale();
  const site = getSiteContent(locale);

  return (
    <>
      <HeroSection copy={site.hero} />

      <section className="section-space pt-0">
        <div className="container-shell">
          <div className="rounded-[2rem] border border-line bg-[#f8f2e8] p-7 shadow-panel md:p-9">
            <p className="text-sm uppercase tracking-[0.24em] text-[#8f2d2d]">{site.freeBaziCampaign.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.25] text-ink md:text-4xl">
              {site.freeBaziCampaign.title}
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-ink/82">{site.freeBaziCampaign.description}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.2rem] border border-[#8f2d2d]/20 bg-white/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#8f2d2d]/85">
                  {site.home.campaignLabels.quota}
                </p>
                <p className="mt-2 text-sm leading-7 text-ink/78">{site.freeBaziCampaign.quota}</p>
              </div>
              <div className="rounded-[1.2rem] border border-[#2f6a4d]/20 bg-white/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#2f6a4d]/90">
                  {site.home.campaignLabels.exchange}
                </p>
                <p className="mt-2 text-sm leading-7 text-ink/78">{site.freeBaziCampaign.exchange}</p>
              </div>
              <div className="rounded-[1.2rem] border border-line bg-white/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-teal/80">
                  {site.home.campaignLabels.availability}
                </p>
                <p className="mt-2 text-sm leading-7 text-ink/78">{site.freeBaziCampaign.availability}</p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="cta-button rounded-full" href={site.freeBaziCampaign.primaryHref}>
                {site.freeBaziCampaign.primaryLabel}
              </Link>
              <Link className="secondary-button rounded-full" href={site.freeBaziCampaign.secondaryHref}>
                {site.freeBaziCampaign.secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow={site.home.perspective.eyebrow}
            title={site.home.perspective.title}
            description={site.home.perspective.description}
          />
          <div className="panel-surface rounded-[2rem] p-8">
            <p className="text-lg leading-8 text-ink/80">{site.home.perspective.body}</p>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow={site.home.service.eyebrow}
            title={site.home.service.title}
            description={site.home.service.description}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {site.services.map((service) => (
              <ServiceCard
                badgeLabel={site.home.service.badge}
                exploreLabel={site.home.service.explore}
                key={service.slug}
                service={service}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow={site.home.process.eyebrow}
            title={site.home.process.title}
            description={site.home.process.description}
          />
          <div className="mt-10">
            <ProcessSteps steps={site.processSteps} />
          </div>
        </div>
      </section>

      <section className="section-space bg-white/30">
        <div className="container-shell">
          <SectionHeading
            eyebrow={site.home.trust.eyebrow}
            title={site.home.trust.title}
            description={site.home.trust.description}
          />
          <div className="mt-10">
            <TrustSection points={site.trustPoints} />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow={site.home.audience.eyebrow}
            title={site.home.audience.title}
            description={site.home.audience.description}
          />
          <div className="panel-surface rounded-[2rem] p-8">
            <div className="space-y-5">
              {site.audiencePoints.map((point) => (
                <div className="flex gap-4" key={point}>
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-gold" />
                  <p className="text-base leading-7 text-ink/78">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white/30">
        <div className="container-shell">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow={site.home.testimonials.eyebrow}
              title={site.home.testimonials.title}
              description={site.home.testimonials.description}
            />
            <Link className="hidden text-sm uppercase tracking-[0.2em] text-teal lg:block" href="/contact">
              {site.home.testimonials.inquire}
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {site.testimonials.map((item) => (
              <TestimonialCard
                key={`${item.name}-${item.role}`}
                name={item.name}
                quote={item.quote}
                role={item.role}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={site.home.cta.title}
        description={site.home.cta.description}
        primaryHref="/book"
        primaryLabel={site.home.cta.primaryLabel}
        secondaryHref="/contact"
        secondaryLabel={site.home.cta.secondaryLabel}
      />
    </>
  );
}

