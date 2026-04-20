import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "About",
  "Learn about Qingluan Academy, its philosophy, and how traditional Chinese metaphysics is translated into practical modern guidance."
);

/**
 * 渲染关于页，说明品牌理念、方法论和价值观。
 * @returns 关于页组件。
 */
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Qingluan Academy"
        title="A culturally rooted practice for clarity, reflection, and responsible interpretation."
        description="Qingluan Academy presents traditional Chinese metaphysical systems with calm language, practical framing, and respect for the depth of the source traditions."
      />

      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <div className="panel-surface rounded-[2rem] p-8">
            <SectionHeading
              eyebrow="What we stand for"
              title="Depth without theatrics."
              description="The work is grounded in systems with long cultural histories, but communicated in a way that serves contemporary life. The goal is not to overwhelm with jargon. It is to create a thoughtful space where ancient frameworks become usable and clear."
            />
          </div>
          <div className="panel-surface rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-teal/70">Values</p>
            <div className="mt-5 grid gap-4">
              {["Depth", "Clarity", "Respect", "Confidentiality", "Cultural integrity"].map((value) => (
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
            <p className="text-sm uppercase tracking-[0.28em] text-jade">Philosophy</p>
            <p className="mt-5 text-2xl leading-10 text-ivory/88">
              Ancient systems become meaningful when they are translated with precision, humility,
              and relevance.
            </p>
          </div>
          <div className="panel-surface rounded-[2rem] p-8">
            <p className="text-base leading-8 text-ink/80">
              Traditional metaphysical disciplines can offer language for pattern, timing, and
              environment. Qingluan Academy frames that language carefully, so clients can use it as
              a tool for reflection, perspective, and more grounded decisions.
            </p>
            <p className="mt-5 text-base leading-8 text-ink/80">
              Founder and team biography content can be added here later. The current structure is
              ready for credentials, lineage background, or a more personal introduction when
              available.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="If the approach feels aligned, explore the services next."
        description="Each service brings a different lens, but the guiding principles remain the same: clarity, structure, and respect for nuance."
        primaryHref="/services"
        primaryLabel="View services"
        secondaryHref="/book"
        secondaryLabel="Book now"
      />
    </>
  );
}
