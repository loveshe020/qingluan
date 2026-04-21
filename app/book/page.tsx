import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { services } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { getPublicSiteConfig } from "@/lib/public-config";

export const metadata: Metadata = buildMetadata(
  "Book",
  "Choose a service and proceed through Qingluan Academy's private booking flow."
);

/**
 * 渲染预约页面，提供服务对比与后续预约系统接入入口。
 * @returns 预约页组件。
 */
export default function BookPage() {
  const config = getPublicSiteConfig();
  const hasBooking = Boolean(config.bookingUrl);

  return (
    <>
      <PageHero
        eyebrow="Book"
        title={hasBooking ? "Choose a service and book directly." : "Choose your service and request scheduling."}
        description={
          hasBooking
            ? "Select your service, then continue to the scheduling calendar to choose your preferred time."
            : "Choose the consultation format that matches your current needs. You can request scheduling now, and an external calendar can be connected at any time."
        }
      />
      <section className="section-space pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
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
                    Open booking calendar
                  </a>
                ) : (
                  <Link className="cta-button rounded-full" href="/contact">
                    Request this service
                  </Link>
                )}
                <Link className="secondary-button rounded-full" href={`/services/${service.slug}`}>
                  View details
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
              <p className="text-sm uppercase tracking-[0.24em] text-teal/70">Scheduling ready</p>
              <h2 className="mt-4 text-3xl font-semibold text-ink">Booking link is now connected.</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-ink/78">
                This site is currently using a live scheduling URL from environment variables. You
                can replace it anytime without changing page code.
              </p>
              <div className="mt-6">
                <a
                  className="cta-button rounded-full"
                  href={config.bookingUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Continue to booking
                </a>
              </div>
              {config.bookingEmbedUrl ? (
                <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-line bg-white">
                  <iframe
                    className="min-h-[42rem] w-full"
                    loading="lazy"
                    src={config.bookingEmbedUrl}
                    title="Booking Calendar"
                  />
                </div>
              ) : null}
            </>
          ) : (
            <>
              <p className="text-sm uppercase tracking-[0.24em] text-teal/70">Private scheduling flow</p>
              <h2 className="mt-4 text-3xl font-semibold text-ink">
                Start with a direct inquiry and receive scheduling guidance.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-ink/78">
                This page supports immediate service requests and can later embed live availability,
                intake steps, and confirmation details once a calendar provider is enabled.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}