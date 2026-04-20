import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { faqItems } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "FAQ",
  "Frequently asked questions about online Bazi, Qimen Dunjia, and Feng Shui consultations."
);

/**
 * 渲染 FAQ 页面，回答准备、形式和合规范围等常见问题。
 * @returns FAQ 页面组件。
 */
export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions clients often ask before booking."
        description="The current answers are designed to reduce friction, set clear expectations, and make future booking integration easier."
      />
      <section className="section-space pt-0">
        <div className="container-shell">
          <FAQAccordion items={faqItems} />
        </div>
      </section>
      <CTASection
        title="Still deciding?"
        description="If your question is more specific than a standard FAQ, the contact page is ready for a private inquiry flow."
        primaryHref="/contact"
        primaryLabel="Contact Qingluan Academy"
        secondaryHref="/book"
        secondaryLabel="Go to booking"
      />
    </>
  );
}
