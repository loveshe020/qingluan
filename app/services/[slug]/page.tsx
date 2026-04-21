import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { services } from "@/content/site";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/**
 * 根据动态路由参数查找服务详情数据。
 * @param slug 服务标识。
 * @returns 匹配的服务对象或空值。
 */
function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

/**
 * 为服务详情页生成动态元数据。
 * @param props 路由参数。
 * @returns 页面元数据。
 */
export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

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

/**
 * 生成可静态渲染的服务详情页参数。
 * @returns 所有服务 slug。
 */
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/**
 * 渲染动态服务详情页。
 * @param props 路由参数。
 * @returns 服务详情页组件。
 */
export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={service.chineseName}
        title={service.name}
        description={service.tagline}
      />

      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="panel-surface rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.26em] text-teal/70">Service summary</p>
            <p className="mt-4 text-lg leading-8 text-ink/80">{service.summary}</p>
            <div className="mt-8 ornament-line" />
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-teal/70">Who it is for</p>
                <ul className="mt-4 space-y-4">
                  {service.idealFor.map((item) => (
                    <li className="text-base leading-7 text-ink/78" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-teal/70">What is covered</p>
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
              <p className="text-sm uppercase tracking-[0.22em] text-jade">Pricing</p>
              <p className="mt-4 text-xl leading-8 text-ivory/88">{service.pricing}</p>
              <Link className="cta-button mt-8 rounded-full" href="/book">
                {service.ctaLabel}
              </Link>
            </div>
            <div className="panel-surface rounded-[2rem] p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-teal/70">Deliverables</p>
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
          <p className="text-sm uppercase tracking-[0.22em] text-teal/70">Process</p>
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
        title="A private consultation designed around your real situation."
        description="If this service matches your current question, the next step is to request a suitable session format and receive booking guidance based on your needs and time zone."
        primaryHref="/book"
        primaryLabel={service.ctaLabel}
        secondaryHref="/contact"
        secondaryLabel="Ask a question first"
      />
    </>
  );
}
