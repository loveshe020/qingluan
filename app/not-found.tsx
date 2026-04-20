import Link from "next/link";

/**
 * 渲染 404 页面，避免动态路由和错误路径出现空白体验。
 * @returns 404 页面组件。
 */
export default function NotFound() {
  return (
    <section className="section-space">
      <div className="container-shell panel-surface rounded-[2rem] p-10 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-teal/70">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-ink">This page is not available.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-ink/76">
          The requested path may not exist yet. Return to the homepage or continue browsing the
          consultation offerings.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link className="cta-button rounded-full" href="/">
            Go home
          </Link>
          <Link className="secondary-button rounded-full" href="/services">
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
