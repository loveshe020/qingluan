"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/content/site";

/**
 * 渲染网站头部导航，并根据当前路由高亮激活项。
 * @returns 网站头部组件。
 */
export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[rgba(247,243,235,0.86)] backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-gold/35 bg-white/70">
            <Image
              alt="Qingluan Academy logo"
              className="object-cover"
              fill
              sizes="44px"
              src="/images/brand-logo.png"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-teal/70">Qingluan Academy</p>
            <p className="text-xs text-ink/62">Chinese Metaphysics Consultations</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                className={`text-sm uppercase tracking-[0.18em] ${
                  active ? "text-teal" : "text-ink/72"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
          <Link className="cta-button rounded-full px-5 py-3 text-sm" href="/book">
            Book
          </Link>
        </nav>
        <Link className="cta-button rounded-full px-5 py-3 text-sm lg:hidden" href="/book">
          Book
        </Link>
      </div>
    </header>
  );
}
