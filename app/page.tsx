import Link from "next/link";

import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { TrustSection } from "@/components/trust-section";
import {
  audiencePoints,
  processSteps,
  services,
  testimonials,
  trustPoints,
} from "@/content/site";

/**
 * 渲染首页，集中展示品牌定位、核心服务、流程与转化入口。
 * @returns 首页组件。
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Our perspective"
            title="Ancient Chinese wisdom translated into practical guidance."
            description="Qingluan Academy offers a calm and structured space to reflect on timing, direction, and environment. The work is culturally rooted, private, and designed for modern life rather than spectacle."
          />
          <div className="panel-surface rounded-[2rem] p-8">
            <p className="text-lg leading-8 text-ink/80">
              The intention is not prediction theater. It is a thoughtful consultation practice that
              helps clients make clearer decisions, understand patterns with more nuance, and shape
              the environments in which they live and work.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="Services"
            title="Three pathways into clarity, timing, and spatial harmony."
            description="Each consultation format is designed around a different kind of question, while sharing the same tone: measured, personal, and grounded."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="How it works"
            title="A simple process designed to stay personal."
            description="The structure is intentionally clear, so the session itself can remain spacious and focused."
          />
          <div className="mt-10">
            <ProcessSteps steps={processSteps} />
          </div>
        </div>
      </section>

      <section className="section-space bg-white/30">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why work with us"
            title="Trust built through tone, depth, and cultural integrity."
            description="The brand is positioned for thoughtful clients who value quality, privacy, and practical guidance over dramatic claims."
          />
          <div className="mt-10">
            <TrustSection points={trustPoints} />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Who this is for"
            title="For people seeking reflection before reaction."
            description="The site is designed for internationally minded clients who are open to metaphysical traditions but selective about quality, language, and trust."
          />
          <div className="panel-surface rounded-[2rem] p-8">
            <div className="space-y-5">
              {audiencePoints.map((point) => (
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
              eyebrow="Testimonials"
              title="Thoughtful placeholders for future client stories."
              description="The website is ready for real testimonials later. For now, the structure shows how social proof will fit into the experience."
            />
            <Link className="hidden text-sm uppercase tracking-[0.2em] text-teal lg:block" href="/contact">
              Inquire privately
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
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
        title="Choose a consultation shaped around your question."
        description="Whether you are looking for perspective on life direction, support around a decision, or a more harmonious environment, the next step is a clear and private booking flow."
        primaryHref="/book"
        primaryLabel="Go to booking"
        secondaryHref="/contact"
        secondaryLabel="Contact first"
      />
    </>
  );
}
