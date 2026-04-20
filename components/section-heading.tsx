type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

/**
 * 渲染统一的区块标题，保证页面节奏和文本层级一致。
 * @param props 标题、副标题、说明文案与对齐方式。
 * @returns 区块标题组件。
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-sm uppercase tracking-[0.25em] text-teal/70">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-ink/76 md:text-lg">{description}</p>
    </div>
  );
}
