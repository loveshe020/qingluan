import type { ContactInput } from "@/lib/contact-schema";

type MailConfig = {
  apiKey: string;
  toEmail: string;
  fromEmail: string;
  paymentInfo: string;
};

/**
 * 读取并校验发信所需环境变量。
 * @returns 邮件配置对象。
 */
function getMailConfig(): MailConfig {
  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const paymentInfo =
    process.env.CONTACT_PAYMENT_INFO ??
    "Payment options: bank transfer, Alipay, or WeChat Pay. Exact payee details will be included in your confirmation.";

  if (!apiKey || !toEmail || !fromEmail) {
    throw new Error("Contact email service is not fully configured.");
  }

  return {
    apiKey,
    toEmail,
    fromEmail,
    paymentInfo,
  };
}

function getServiceSummary(service: ContactInput["service"]): string {
  switch (service) {
    case "Bazi Clarity Reading":
      return "A structured reading for personal patterns, life direction, and timing context.";
    case "Qimen Decision Session":
      return "A strategic consultation for timing, options, and decision framing.";
    case "Remote Feng Shui Audit":
      return "A remote spatial review with practical recommendations for home or workspace alignment.";
    default:
      return "A guidance call to identify the best-fit service before formal booking.";
  }
}

function getServiceFeeRange(service: ContactInput["service"]): string {
  switch (service) {
    case "Bazi Clarity Reading":
      return "Starting from $180 (final quote based on scope).";
    case "Qimen Decision Session":
      return "Starting from $220 (final quote based on scope).";
    case "Remote Feng Shui Audit":
      return "Starting from $260 (final quote based on scope).";
    default:
      return "Fee will be provided after scope confirmation.";
  }
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

function buildClientReplyHtml(input: ContactInput, config: MailConfig): string {
  const serviceSummary = getServiceSummary(input.service);
  const feeRange = getServiceFeeRange(input.service);

  return `
    <div style="font-family: Arial, sans-serif; color: #112326; line-height: 1.7;">
      <h2 style="margin-bottom: 16px;">Qingluan Academy | Inquiry Received</h2>
      <p>Dear ${input.name},</p>
      <p>Thank you for your inquiry. We have received your request and will reply with confirmation details by email.</p>
      <h3 style="margin-top: 20px; margin-bottom: 8px;">Your selected service</h3>
      <p><strong>${input.service}</strong></p>
      <p>${serviceSummary}</p>
      <h3 style="margin-top: 20px; margin-bottom: 8px;">Fee and payment</h3>
      <p><strong>Estimated fee:</strong> ${feeRange}</p>
      <p><strong>Payment information:</strong> ${config.paymentInfo}</p>
      <h3 style="margin-top: 20px; margin-bottom: 8px;">Service process</h3>
      <ol style="padding-left: 20px;">
        <li>Submit inquiry form (completed).</li>
        <li>Receive our reply email with service scope, fee, and payment details.</li>
        <li>Complete payment to confirm the booking.</li>
        <li>Receive schedule and preparation instructions.</li>
        <li>We deliver the agreed consultation and follow-up notes.</li>
      </ol>
      <p style="margin-top: 18px;">Best regards,<br />Qingluan Academy</p>
    </div>
  `;
}

function buildClientReplyText(input: ContactInput, config: MailConfig): string {
  const serviceSummary = getServiceSummary(input.service);
  const feeRange = getServiceFeeRange(input.service);

  return [
    "Qingluan Academy | Inquiry Received",
    "",
    `Dear ${input.name},`,
    "Thank you for your inquiry. We have received your request and will reply with confirmation details by email.",
    "",
    "Your selected service:",
    `${input.service}`,
    serviceSummary,
    "",
    "Fee and payment:",
    `Estimated fee: ${feeRange}`,
    `Payment information: ${config.paymentInfo}`,
    "",
    "Service process:",
    "1) Submit inquiry form (completed).",
    "2) Receive our reply email with service scope, fee, and payment details.",
    "3) Complete payment to confirm the booking.",
    "4) Receive schedule and preparation instructions.",
    "5) We deliver the agreed consultation and follow-up notes.",
    "",
    "Best regards,",
    "Qingluan Academy",
  ].join("\n");
}

/**
 * 通过 Brevo 事务邮件 API 发送联系表单邮件到配置的收件箱。
 * @param input 已通过校验的联系表单数据。
 * @returns Promise<void>。
 */
export async function sendInquiryEmail(input: ContactInput): Promise<void> {
  const config = getMailConfig();
  const inquiryResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
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

  if (!inquiryResponse.ok) {
    const errorText = await inquiryResponse.text();
    throw new Error(`Brevo send failed: ${inquiryResponse.status} ${errorText}`);
  }

  const clientReplyResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
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
          email: input.email,
          name: input.name,
        },
      ],
      subject: `Inquiry received | Qingluan Academy`,
      textContent: buildClientReplyText(input, config),
      htmlContent: buildClientReplyHtml(input, config),
    }),
  });

  if (!clientReplyResponse.ok) {
    const errorText = await clientReplyResponse.text();
    throw new Error(`Brevo client reply failed: ${clientReplyResponse.status} ${errorText}`);
  }
}
