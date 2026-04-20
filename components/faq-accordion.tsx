import type { FaqItem } from "@/content/site";

type FaqAccordionProps = {
  items: FaqItem[];
};

/**
 * 使用原生 details/summary 渲染 FAQ，保证轻量和可访问性。
 * @param props FAQ 数据列表。
 * @returns FAQ 组件。
 */
export function FAQAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          className="panel-surface rounded-[1.5rem] p-6 open:bg-white/80"
          key={item.question}
        >
          <summary className="cursor-pointer list-none text-lg font-semibold text-ink">
            {item.question}
          </summary>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink/78">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
