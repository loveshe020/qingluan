type TrustSectionProps = {
  points: string[];
};

/**
 * 渲染品牌信任理由列表，强化网站可信度与专业气质。
 * @param props 信任要点列表。
 * @returns 信任区块组件。
 */
export function TrustSection({ points }: TrustSectionProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {points.map((point) => (
        <div
          className="rounded-[1.75rem] border border-line bg-white/45 p-6"
          key={point}
        >
          <div className="h-2 w-16 rounded-full bg-gradient-to-r from-gold to-jade" />
          <p className="mt-5 text-base leading-7 text-ink/78">{point}</p>
        </div>
      ))}
    </div>
  );
}
