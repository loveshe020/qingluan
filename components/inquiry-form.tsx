"use client";

import { useState, useTransition } from "react";

import { serviceOptions } from "@/lib/contact-schema";

type FormState = {
  name: string;
  email: string;
  service: (typeof serviceOptions)[number];
  timezone: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  service: "Bazi Clarity Reading",
  timezone: "",
  message: "",
  website: "",
};

/**
 * 渲染真实可提交的联系表单，并处理提交反馈状态。
 * @returns 咨询表单组件。
 */
export function InquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<{
    tone: "idle" | "success" | "error";
    message: string;
  }>({
    tone: "idle",
    message:
      "After submission, we will email you with service scope, fee details, and payment instructions.",
  });
  const [isPending, startTransition] = useTransition();

  /**
   * 更新指定字段的表单值。
   * @param field 字段名。
   * @param value 字段值。
   * @returns void。
   */
  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  /**
   * 处理表单提交并调用后端联系接口。
   * @param event 表单提交事件。
   * @returns Promise<void>。
   */
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    startTransition(async () => {
      setStatus({
        tone: "idle",
        message: "Sending your inquiry...",
      });

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        const result = (await response.json()) as { ok: boolean; message: string };

        if (!response.ok || !result.ok) {
          setStatus({
            tone: "error",
            message: result.message,
          });
          return;
        }

        setForm(initialState);
        setStatus({
          tone: "success",
          message: result.message,
        });
      } catch {
        setStatus({
          tone: "error",
          message: "Unable to submit right now. Please try again in a moment.",
        });
      }
    });
  }

  return (
    <form className="panel-surface rounded-[2rem] p-6 md:p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink">Name</span>
          <input
            className="mt-2 w-full rounded-2xl border border-line bg-white/70 px-4 py-3 outline-none ring-0"
            name="name"
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
            required
            type="text"
            value={form.name}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">Email</span>
          <input
            className="mt-2 w-full rounded-2xl border border-line bg-white/70 px-4 py-3 outline-none ring-0"
            name="email"
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="name@example.com"
            required
            type="email"
            value={form.email}
          />
        </label>
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink">Service of interest</span>
          <select
            className="mt-2 w-full rounded-2xl border border-line bg-white/70 px-4 py-3"
            name="service"
            onChange={(event) => updateField("service", event.target.value as FormState["service"])}
            value={form.service}
          >
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">Timezone</span>
          <input
            className="mt-2 w-full rounded-2xl border border-line bg-white/70 px-4 py-3 outline-none ring-0"
            name="timezone"
            onChange={(event) => updateField("timezone", event.target.value)}
            placeholder="e.g. GMT+8"
            required
            type="text"
            value={form.timezone}
          />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="text-sm font-medium text-ink">What would you like support with?</span>
        <textarea
          className="mt-2 min-h-40 w-full rounded-[1.5rem] border border-line bg-white/70 px-4 py-3 outline-none ring-0"
          name="message"
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Share your context, question, or what you hope to explore."
          required
          value={form.message}
        />
      </label>
      <label className="hidden" htmlFor="website">
        Website
      </label>
      <input
        autoComplete="off"
        className="hidden"
        id="website"
        name="website"
        onChange={(event) => updateField("website", event.target.value)}
        tabIndex={-1}
        type="text"
        value={form.website}
      />
      <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p
          className={`max-w-xl text-sm leading-6 ${
            status.tone === "error"
              ? "text-[#9a3c2f]"
              : status.tone === "success"
                ? "text-teal"
                : "text-ink/70"
          }`}
        >
          {status.message}
        </p>
        <button
          className="cta-button rounded-full disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isPending}
          type="submit"
        >
          {isPending ? "Sending..." : "Send inquiry"}
        </button>
      </div>
    </form>
  );
}
