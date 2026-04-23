import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { getSiteContent } from "@/content/site";
import { getRequestLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { getPublicSiteConfig } from "@/lib/public-config";

export const metadata: Metadata = buildMetadata(
  "Book / 棰勭害",
  "Choose a service and proceed through Qingluan Academy's private booking flow."
);

export default async function BookPage() {
  const locale = await getRequestLocale();
  const site = getSiteContent(locale);
  const config = getPublicSiteConfig();
  const hasBooking = Boolean(config.bookingUrl);

  return (
    <>
      <PageHero
        eyebrow={site.bookPage.heroEyebrow}
        title={hasBooking ? site.bookPage.heroTitleReady : site.bookPage.heroTitlePending}
        description={hasBooking ? site.bookPage.heroDescReady : site.bookPage.heroDescPending}
      />
      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {site.services.map((service) => (
            <article className="panel-surface rounded-[2rem] p-7" key={service.slug}>
              <p className="text-sm uppercase tracking-[0.24em] text-teal/70">{service.chineseName}</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink">{service.name}</h2>
              <p className="mt-4 text-base leading-7 text-ink/76">{service.tagline}</p>
              <p className="mt-6 text-sm uppercase tracking-[0.22em] text-gold">{service.pricing}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {hasBooking ? (
                  <a
                    className="cta-button rounded-full"
                    href={config.bookingUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {site.bookPage.openCalendar}
                  </a>
                ) : (
                  <Link className="cta-button rounded-full" href="/contact">
                    {site.bookPage.requestService}
                  </Link>
                )}
                <Link className="secondary-button rounded-full" href={`/services/${service.slug}`}>
                  {site.bookPage.viewDetails}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell panel-surface rounded-[2rem] p-8">
          {hasBooking ? (
            <>
              <p className="text-sm uppercase tracking-[0.24em] text-teal/70">{site.bookPage.statusReady}</p>
              <h2 className="mt-4 text-3xl font-semibold text-ink">{site.bookPage.headingReady}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-ink/78">{site.bookPage.bodyReady}</p>
              <div className="mt-6">
                <a
                  className="cta-button rounded-full"
                  href={config.bookingUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  {site.bookPage.continueBooking}
                </a>
              </div>
              {config.bookingEmbedUrl ? (
                <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-line bg-white">
                  <iframe
                    className="min-h-[42rem] w-full"
                    loading="lazy"
                    src={config.bookingEmbedUrl}
                    title={site.bookPage.iframeTitle}
                  />
                </div>
              ) : null}
            </>
          ) : (
            <>
              <p className="text-sm uppercase tracking-[0.24em] text-teal/70">{site.bookPage.statusPending}</p>
              <h2 className="mt-4 text-3xl font-semibold text-ink">{site.bookPage.headingPending}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-ink/78">{site.bookPage.bodyPending}</p>
            </>
          )}
        </div>
      </section>
    </>
  );
}

