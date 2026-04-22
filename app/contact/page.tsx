import type { Metadata } from "next";

import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { getPublicSiteConfig } from "@/lib/public-config";

export const metadata: Metadata = buildMetadata(
  "Contact",
  "Contact Qingluan Academy for private inquiries about Bazi, Qimen Dunjia, and Feng Shui consultations."
);

/**
 * 渲染联系页面，提供高保真咨询表单占位和联系方式说明。
 * @returns 联系页组件。
 */
export default function ContactPage() {
  const config = getPublicSiteConfig();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="A private inquiry space for thoughtful questions."
        description="If you would like help choosing a service or want to ask about your situation first, use the inquiry form below."
      />
      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <InquiryForm />
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-line bg-teal p-8 text-ivory shadow-panel">
              <p className="text-sm uppercase tracking-[0.24em] text-jade">Contact details</p>
              <p className="mt-4 text-lg leading-8 text-ivory/88">{config.contactEmail}</p>
              {config.socialLinks.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {config.socialLinks.map((link) => (
                    <a
                      className="rounded-full border border-jade/40 px-4 py-2 text-sm text-ivory/86 transition hover:border-jade hover:text-ivory"
                      href={link.href}
                      key={link.label}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-sm leading-6 text-ivory/72">
                  Add social links through environment variables to show Instagram, Xiaohongshu,
                  WeChat, or other channels here.
                </p>
              )}
            </div>
            <div className="panel-surface rounded-[2rem] p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-teal/70">Service process</p>
              <div className="mt-4 space-y-4">
                {[
                  "1) Fill in the inquiry form with required details.",
                  "2) Receive our reply email with service scope, fee details, and payment instructions.",
                  "3) Complete payment to confirm your booking.",
                  "4) Receive your schedule and preparation guidance.",
                  "5) We complete the agreed service and send follow-up notes when applicable.",
                ].map((step) => (
                  <div className="flex gap-3" key={step}>
                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-gold" />
                    <p className="text-base leading-7 text-ink/80">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
