import Link from "next/link";

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

/**
 * 渲染全站复用 CTA 区块，承接关键转化动作。
 * @param props CTA 文案和链接配置。
 * @returns CTA 区块组件。
 */
export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="panel-surface grain rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-teal/70">Book a consultation</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/76 md:text-lg">{description}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link className="cta-button rounded-full" href={primaryHref}>
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link className="secondary-button rounded-full" href={secondaryHref}>
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
