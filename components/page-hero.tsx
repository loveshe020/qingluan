type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

/**
 * 渲染内页通用页头，统一各页面首屏信息结构。
 * @param props 页眉标签、标题与说明。
 * @returns 内页头部组件。
 */
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="section-space pb-8 pt-12 md:pb-12 md:pt-16">
      <div className="container-shell">
        <div className="panel-surface grain rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
          <p className="text-sm uppercase tracking-[0.28em] text-teal/70">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight text-ink md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ink/76 md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
