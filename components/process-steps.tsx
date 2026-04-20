type ProcessStepsProps = {
  steps: string[];
};

/**
 * 渲染服务流程步骤，突出简洁明确的预约路径。
 * @param props 步骤文本列表。
 * @returns 流程步骤组件。
 */
export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {steps.map((step, index) => (
        <div
          className="panel-surface rounded-[1.75rem] p-6"
          key={step}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-sm font-semibold text-gold">
            0{index + 1}
          </div>
          <p className="mt-5 text-base leading-7 text-ink/80">{step}</p>
        </div>
      ))}
    </div>
  );
}
