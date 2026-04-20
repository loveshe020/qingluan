import type { ContactInput } from "@/lib/contact-schema";

type MailConfig = {
  apiKey: string;
  toEmail: string;
  fromEmail: string;
};

/**
 * 读取并校验发信所需环境变量。
 * @returns 邮件配置对象。
 */
function getMailConfig(): MailConfig {
  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    throw new Error("Contact email service is not fully configured.");
  }

  return {
    apiKey,
    toEmail,
    fromEmail,
  };
}

/**
 * 基于表单内容生成邮件 HTML。
 * @param input 已通过校验的联系表单数据。
 * @returns 邮件 HTML 字符串。
 */
function buildInquiryHtml(input: ContactInput): string {
  return `
    <div style="font-family: Arial, sans-serif; color: #112326; line-height: 1.7;">
      <h2 style="margin-bottom: 16px;">New Qingluan Academy Inquiry</h2>
      <p><strong>Name:</strong> ${input.name}</p>
      <p><strong>Email:</strong> ${input.email}</p>
      <p><strong>Service:</strong> ${input.service}</p>
      <p><strong>Timezone:</strong> ${input.timezone}</p>
      <p><strong>Message:</strong></p>
      <div style="padding: 16px; background: #f5efe4; border-radius: 12px; white-space: pre-wrap;">${input.message}</div>
    </div>
  `;
}

/**
 * 生成 Brevo API 需要的纯文本内容。
 * @param input 已通过校验的联系表单数据。
 * @returns 纯文本邮件内容。
 */
function buildInquiryText(input: ContactInput): string {
  return [
    "New Qingluan Academy Inquiry",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Service: ${input.service}`,
    `Timezone: ${input.timezone}`,
    "",
    "Message:",
    input.message,
  ].join("\n");
}

/**
 * 通过 Brevo 事务邮件 API 发送联系表单邮件到配置的收件箱。
 * @param input 已通过校验的联系表单数据。
 * @returns Promise<void>。
 */
export async function sendInquiryEmail(input: ContactInput): Promise<void> {
  const config = getMailConfig();
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": config.apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: "Qingluan Academy",
        email: config.fromEmail,
      },
      to: [
        {
          email: config.toEmail,
          name: "Qingluan Academy",
        },
      ],
      replyTo: {
        email: input.email,
        name: input.name,
      },
      subject: `New inquiry from ${input.name} | Qingluan Academy`,
      textContent: buildInquiryText(input),
      htmlContent: buildInquiryHtml(input),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Brevo send failed: ${response.status} ${errorText}`);
  }
}
