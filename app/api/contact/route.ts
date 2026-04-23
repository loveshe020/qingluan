import { NextResponse } from "next/server";

import { sendInquiryEmail } from "@/lib/email";
import { validateContactInput } from "@/lib/contact-schema";

/**
 * 处理联系表单提交，执行校验、反垃圾拦截与邮件发送。
 * @param request POST 请求对象。
 * @returns API 响应。
 */
export async function POST(request: Request) {
  let payload: unknown;
  let payloadLocale: string | undefined;
  try {
    payload = await request.json();
    const result = validateContactInput(payload);
    payloadLocale =
      typeof payload === "object" && payload !== null && "locale" in payload
        ? (payload as { locale?: string }).locale
        : undefined;
    const locale = payloadLocale === "en" ? "en" : "zh";

    const messages =
      locale === "zh"
        ? {
            invalid: "表单提交无效，请检查后重试。",
            honeypot: "已收到咨询。",
            success: "已收到你的咨询。我们将通过邮件发送服务内容、收费信息和支付说明。",
            notConfigured: "联系表单尚未完成配置，请先设置邮件环境变量。",
            failed: "咨询发送失败，请稍后重试。",
          }
        : {
            invalid: "Invalid form submission.",
            honeypot: "Inquiry received.",
            success:
              "Inquiry received. We will email you with service scope, fee details, and payment instructions.",
            notConfigured:
              "The contact form is not configured yet. Please add the SMTP environment variables.",
            failed: "Something went wrong while sending your inquiry. Please try again later.",
          };

    if (!result.success) {
      return NextResponse.json(
        {
          ok: false,
          message: result.error.issues[0]?.message ?? messages.invalid,
        },
        { status: 400 }
      );
    }

    if (result.data.website) {
      return NextResponse.json({ ok: true, message: messages.honeypot });
    }

    await sendInquiryEmail(result.data);

    return NextResponse.json({
      ok: true,
      message: messages.success,
    });
  } catch (error) {
    if (error instanceof Error && error.message === "Contact email service is not fully configured.") {
      return NextResponse.json(
        {
          ok: false,
          message:
            payloadLocale === "en"
              ? "The contact form is not configured yet. Please add the SMTP environment variables."
              : "联系表单尚未完成配置，请先设置邮件环境变量。",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        ok: false,
        message:
          payloadLocale === "en"
            ? "Something went wrong while sending your inquiry. Please try again later."
            : "咨询发送失败，请稍后重试。",
      },
      { status: 500 }
    );
  }
}
