import type { Metadata } from "next";
import Image from "next/image";

import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { founderProfile } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "About",
  "Learn about Qingluan Academy, its philosophy, and how traditional Chinese metaphysics is translated into practical modern guidance."
);

/**
 * 渲染关于页面，说明品牌理念、方法论和价值观。
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
              Qingluan Academy is built as a private consultation practice guided by cultural rigor,
              discretion, and practical communication. A full founder profile and lineage notes can
              be published as brand materials are finalized.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-line bg-[#f6efe2] p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-teal/70">Founder</p>
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
                Calm, balanced, practical
              </div>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-ink">{founderProfile.name}</h2>
            <p className="mt-3 text-base leading-7 text-ink/76">{founderProfile.title}</p>
            <p className="mt-2 text-sm leading-6 text-ink/62">{founderProfile.location}</p>
            <div className="mt-6 rounded-[1.2rem] border border-[#9a2e2e]/20 bg-white/65 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-[#9a2e2e]/80">Balance motif</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#9a2e2e]" />
                <div className="h-px flex-1 bg-gradient-to-r from-[#9a2e2e]/70 via-[#9e8c73]/40 to-[#2e6b4f]/70" />
                <div className="h-3 w-3 rounded-full bg-[#2e6b4f]" />
              </div>
            </div>
          </div>
          <div className="panel-surface rounded-[2rem] p-8">
            <p className="text-base leading-8 text-ink/80">{founderProfile.intro}</p>
            <p className="mt-5 text-base leading-8 text-ink/80">{founderProfile.philosophy}</p>
            <div className="mt-6 space-y-4">
              {founderProfile.highlights.map((item) => (
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
