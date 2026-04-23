import Link from "next/link";

type HeroSectionProps = {
  copy: {
    eyebrow: string;
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
    approachTitle: string;
    approachBazi: string;
    approachQimen: string;
    approachFengshui: string;
  };
};

export function HeroSection({ copy }: HeroSectionProps) {
  return (
    <section className="section-space pt-10 md:pt-14">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="panel-surface grain rounded-[2.4rem] px-6 py-10 md:px-10 md:py-14">
            <p className="text-sm uppercase tracking-[0.32em] text-teal/70">{copy.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[1.05] text-ink md:text-7xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ink/78 md:text-xl">
              {copy.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="cta-button rounded-full" href="/book">
                {copy.primaryLabel}
              </Link>
              <Link className="secondary-button rounded-full" href="/services">
                {copy.secondaryLabel}
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2.4rem] border border-line bg-teal p-8 text-ivory shadow-panel">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.28em] text-ivory/70">{copy.approachTitle}</p>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-jade">Bazi</p>
                  <p className="mt-2 text-lg leading-7 text-ivory/88">{copy.approachBazi}</p>
                </div>
                <div className="ornament-line opacity-50" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-jade">Qimen Dunjia</p>
                  <p className="mt-2 text-lg leading-7 text-ivory/88">{copy.approachQimen}</p>
                </div>
                <div className="ornament-line opacity-50" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-jade">Feng Shui</p>
                  <p className="mt-2 text-lg leading-7 text-ivory/88">{copy.approachFengshui}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

