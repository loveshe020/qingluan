import Link from "next/link";

import { getSiteContent } from "@/content/site";
import { getRequestLocale } from "@/lib/i18n";

export default async function NotFound() {
  const locale = await getRequestLocale();
  const site = getSiteContent(locale);

  return (
    <section className="section-space">
      <div className="container-shell panel-surface rounded-[2rem] p-10 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-teal/70">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-ink">{site.notFound.title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-ink/76">{site.notFound.description}</p>
        <div className="mt-8 flex justify-center gap-4">
          <Link className="cta-button rounded-full" href="/">
            {site.notFound.home}
          </Link>
          <Link className="secondary-button rounded-full" href="/services">
            {site.notFound.services}
          </Link>
        </div>
      </div>
    </section>
  );
}

