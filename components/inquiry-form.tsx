"use client";

import { useState, useTransition } from "react";

import type { InquiryFormCopy, Locale } from "@/content/site";
import { serviceOptions } from "@/lib/contact-schema";

type FormState = {
  name: string;
  email: string;
  service: (typeof serviceOptions)[number];
  timezone: string;
  message: string;
  website: string;
  locale: Locale;
};

type InquiryFormProps = {
  locale: Locale;
  copy: InquiryFormCopy;
};

export function InquiryForm({ locale, copy }: InquiryFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    service: "Bazi Clarity Reading",
    timezone: "",
    message: "",
    website: "",
    locale,
  });
  const [status, setStatus] = useState<{
    tone: "idle" | "success" | "error";
    message: string;
  }>({
    tone: "idle",
    message: copy.idleMessage,
  });
  const [isPending, startTransition] = useTransition();

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    startTransition(async () => {
      setStatus({
        tone: "idle",
        message: copy.sendingMessage,
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

        setForm({
          name: "",
          email: "",
          service: "Bazi Clarity Reading",
          timezone: "",
          message: "",
          website: "",
          locale,
        });
        setStatus({
          tone: "success",
          message: result.message,
        });
      } catch {
        setStatus({
          tone: "error",
          message: copy.submitError,
        });
      }
    });
  }

  return (
    <form className="panel-surface rounded-[2rem] p-6 md:p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink">{copy.labels.name}</span>
          <input
            className="mt-2 w-full rounded-2xl border border-line bg-white/70 px-4 py-3 outline-none ring-0"
            name="name"
            onChange={(event) => updateField("name", event.target.value)}
            placeholder={copy.placeholders.name}
            required
            type="text"
            value={form.name}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">{copy.labels.email}</span>
          <input
            className="mt-2 w-full rounded-2xl border border-line bg-white/70 px-4 py-3 outline-none ring-0"
            name="email"
            onChange={(event) => updateField("email", event.target.value)}
            placeholder={copy.placeholders.email}
            required
            type="email"
            value={form.email}
          />
        </label>
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink">{copy.labels.service}</span>
          <select
            className="mt-2 w-full rounded-2xl border border-line bg-white/70 px-4 py-3"
            name="service"
            onChange={(event) => updateField("service", event.target.value as FormState["service"])}
            value={form.service}
          >
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {copy.serviceOptionLabels[option] ?? option}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">{copy.labels.timezone}</span>
          <input
            className="mt-2 w-full rounded-2xl border border-line bg-white/70 px-4 py-3 outline-none ring-0"
            name="timezone"
            onChange={(event) => updateField("timezone", event.target.value)}
            placeholder={copy.placeholders.timezone}
            required
            type="text"
            value={form.timezone}
          />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="text-sm font-medium text-ink">{copy.labels.message}</span>
        <textarea
          className="mt-2 min-h-40 w-full rounded-[1.5rem] border border-line bg-white/70 px-4 py-3 outline-none ring-0"
          name="message"
          onChange={(event) => updateField("message", event.target.value)}
          placeholder={copy.placeholders.message}
          required
          value={form.message}
        />
      </label>
      <label className="hidden" htmlFor="website">
        {copy.labels.honeypot}
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
          {isPending ? copy.buttons.sending : copy.buttons.submit}
        </button>
      </div>
    </form>
  );
}

