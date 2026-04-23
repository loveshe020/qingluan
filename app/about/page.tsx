import type { Metadata } from "next";
import Image from "next/image";

import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { getSiteContent } from "@/content/site";
import { getRequestLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "About / 鍏充簬",
  "Learn about Qingluan Academy and its approach to translating Chinese metaphysics into practical guidance."
);

export default async function AboutPage() {
  const locale = await getRequestLocale();
  const site = getSiteContent(locale);

  return (
    <>
      <PageHero
        eyebrow={site.about.heroEyebrow}
        title={site.about.heroTitle}
        description={site.about.heroDescription}
      />

      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <div className="panel-surface rounded-[2rem] p-8">
            <SectionHeading
              eyebrow={site.about.standForEyebrow}
              title={site.about.standForTitle}
              description={site.about.standForDescription}
            />
          </div>
          <div className="panel-surface rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-teal/70">{site.about.valuesTitle}</p>
            <div className="mt-5 grid gap-4">
              {site.about.values.map((value) => (
                <div className="rounded-[1.2rem] border border-line bg-white/50 px-4 py-4" key={value}>
                  <p className="text-lg text-ink/80">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-line bg-teal p-8 text-ivory">
            <p className="text-sm uppercase tracking-[0.28em] text-jade">{site.about.philosophyTitle}</p>
            <p className="mt-5 text-2xl leading-10 text-ivory/88">{site.about.philosophyBody}</p>
          </div>
          <div className="panel-surface rounded-[2rem] p-8">
            <p className="text-base leading-8 text-ink/80">{site.about.body1}</p>
            <p className="mt-5 text-base leading-8 text-ink/80">{site.about.body2}</p>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-line bg-[#f6efe2] p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-teal/70">{site.about.founderTitle}</p>
            <div className="mt-6 flex items-center gap-5">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border border-line bg-[#fffaf0]">
                <Image
                  alt="Founder portrait"
                  className="object-cover"
                  fill
                  sizes="80px"
                  src="/images/founder-portrait.png"
                />
                <div className="absolute -left-2 top-2 h-8 w-8 rounded-full bg-[#9a2e2e]/85" />
                <div className="absolute -right-2 bottom-2 h-8 w-8 rounded-full bg-[#2e6b4f]/85" />
              </div>
              <div className="rounded-full border border-[#2e6b4f]/25 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#2e6b4f]">
                {site.about.founderBadge}
              </div>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-ink">{site.founderProfile.name}</h2>
            <p className="mt-3 text-base leading-7 text-ink/76">{site.founderProfile.title}</p>
            <p className="mt-2 text-sm leading-6 text-ink/62">{site.founderProfile.location}</p>
            <div className="mt-6 rounded-[1.2rem] border border-[#9a2e2e]/20 bg-white/65 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-[#9a2e2e]/80">{site.about.balanceMotif}</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#9a2e2e]" />
                <div className="h-px flex-1 bg-gradient-to-r from-[#9a2e2e]/70 via-[#9e8c73]/40 to-[#2e6b4f]/70" />
                <div className="h-3 w-3 rounded-full bg-[#2e6b4f]" />
              </div>
            </div>
          </div>
          <div className="panel-surface rounded-[2rem] p-8">
            <p className="text-base leading-8 text-ink/80">{site.founderProfile.intro}</p>
            <p className="mt-5 text-base leading-8 text-ink/80">{site.founderProfile.philosophy}</p>
            <div className="mt-6 space-y-4">
              {site.founderProfile.highlights.map((item) => (
                <div className="flex gap-3" key={item}>
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-gold" />
                  <p className="text-base leading-7 text-ink/78">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={site.about.cta.title}
        description={site.about.cta.description}
        primaryHref="/services"
        primaryLabel={site.about.cta.primaryLabel}
        secondaryHref="/book"
        secondaryLabel={site.about.cta.secondaryLabel}
      />
    </>
  );
}

