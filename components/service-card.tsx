import Link from "next/link";

import type { Service } from "@/content/site";

type ServiceCardProps = {
  service: Service;
};

/**
 * 渲染服务卡片，用于首页和服务总览页的统一展示。
 * @param props 服务对象。
 * @returns 服务卡片组件。
 */
export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="panel-surface grain flex h-full flex-col rounded-[2rem] p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-teal/65">{service.chineseName}</p>
          <h3 className="mt-3 text-2xl font-semibold text-ink">{service.name}</h3>
        </div>
        <div className="rounded-full border border-gold/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold">
          Service
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-teal/80">{service.tagline}</p>
      <p className="mt-4 flex-1 text-base leading-7 text-ink/76">{service.summary}</p>
      <div className="mt-6 ornament-line" />
      <Link
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-teal"
        href={`/services/${service.slug}`}
      >
        Explore service
        <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
