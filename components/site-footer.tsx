import Link from "next/link";

/**
 * 渲染网站页脚，承载次级导航、品牌说明和免责声明。
 * @returns 网站页脚组件。
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-[#efe7d9]/70 pb-10 pt-12">
      <div className="container-shell grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-teal/70">青鸾书院 · Qingluan Academy</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/78">
            Chinese metaphysics for reflection, timing, and environmental alignment. Structured
            online consultations designed for thoughtful modern life.
          </p>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-ink/62">
            Services are intended for personal insight, reflection, and guidance. They are not a
            substitute for medical, legal, psychological, or financial advice. Results and
            interpretations are not guaranteed.
          </p>
        </div>
        <div className="grid gap-3 text-sm uppercase tracking-[0.18em] text-ink/70">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/book">Book</Link>
        </div>
      </div>
    </footer>
  );
}
