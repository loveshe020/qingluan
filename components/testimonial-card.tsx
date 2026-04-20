type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
};

/**
 * 渲染评价占位卡片，为未来真实客户反馈预留展示结构。
 * @param props 姓名、角色和评价内容。
 * @returns 评价卡片组件。
 */
export function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <article className="panel-surface rounded-[1.75rem] p-6">
      <p className="text-lg leading-8 text-ink/80">“{quote}”</p>
      <div className="mt-6">
        <p className="font-semibold text-ink">{name}</p>
        <p className="text-sm uppercase tracking-[0.2em] text-teal/65">{role}</p>
      </div>
    </article>
  );
}
