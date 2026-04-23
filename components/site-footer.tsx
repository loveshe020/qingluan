import Link from "next/link";

type SiteFooterProps = {
  brandTitle: string;
  description: string;
  disclaimer: string;
  navigation: Array<{ href: string; label: string }>;
  bookLabel: string;
};

export function SiteFooter({
  brandTitle,
  description,
  disclaimer,
  navigation,
  bookLabel,
}: SiteFooterProps) {
  return (
    <footer className="border-t border-line bg-[#efe7d9]/70 pb-10 pt-12">
      <div className="container-shell grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-teal/70">{brandTitle}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/78">{description}</p>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-ink/62">{disclaimer}</p>
        </div>
        <div className="grid gap-3 text-sm uppercase tracking-[0.18em] text-ink/70">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/book">{bookLabel}</Link>
        </div>
      </div>
    </footer>
  );
}

