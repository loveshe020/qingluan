import { NextResponse } from "next/server";

import { sendInquiryEmail } from "@/lib/email";
import { validateContactInput } from "@/lib/contact-schema";

/**
 * 处理联系表单提交，执行校验、反垃圾拦截与邮件发送。
 * @param request POST 请求对象。
 * @returns API 响应。
 */
export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const result = validateContactInput(payload);

    if (!result.success) {
      return NextResponse.json(
        {
          ok: false,
          message: result.error.issues[0]?.message ?? "Invalid form submission.",
        },
        { status: 400 }
      );
    }

    if (result.data.website) {
      return NextResponse.json({ ok: true, message: "Inquiry received." });
    }

    await sendInquiryEmail(result.data);

    return NextResponse.json({
      ok: true,
      message:
        "Inquiry received. We will email you with service scope, fee details, and payment instructions.",
    });
  } catch (error) {
    if (error instanceof Error && error.message === "Contact email service is not fully configured.") {
      return NextResponse.json(
        {
          ok: false,
          message:
            "The contact form is not configured yet. Please add the SMTP environment variables.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong while sending your inquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}
