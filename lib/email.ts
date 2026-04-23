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

function getServiceSummaryByLocale(service: ContactInput["service"], locale: "zh" | "en"): string {
  if (locale === "zh") {
    switch (service) {
      case "Bazi Clarity Reading":
        return "基于八字结构进行个人节奏、方向与阶段重点的解读。";
      case "Qimen Decision Session":
        return "围绕关键问题进行时机判断、策略路径与行动建议。";
      case "Remote Feng Shui Audit":
        return "基于空间信息提供居住/办公环境优化建议。";
      default:
        return "先进行服务匹配沟通，再确定正式咨询方案。";
    }
  }
  return getServiceSummary(service);
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

function getServiceFeeRangeByLocale(service: ContactInput["service"], locale: "zh" | "en"): string {
  if (locale === "zh") {
    switch (service) {
      case "Bazi Clarity Reading":
        return "起步价约 $180（以最终范围确认为准）。";
      case "Qimen Decision Session":
        return "起步价约 $220（以最终范围确认为准）。";
      case "Remote Feng Shui Audit":
        return "起步价约 $260（以最终范围确认为准）。";
      default:
        return "费用将在确认服务范围后给出。";
    }
  }
  return getServiceFeeRange(service);
}

/**
 * 基于表单内容生成邮件 HTML。
 * @param input 已通过校验的联系表单数据。
 * @returns 邮件 HTML 字符串。
 */
function buildInquiryHtml(input: ContactInput): string {
  const zh = input.locale === "zh";
  return `
    <div style="font-family: Arial, sans-serif; color: #112326; line-height: 1.7;">
      <h2 style="margin-bottom: 16px;">${zh ? "青鸾书院新咨询" : "New Qingluan Academy Inquiry"}</h2>
      <p><strong>${zh ? "姓名" : "Name"}:</strong> ${input.name}</p>
      <p><strong>${zh ? "邮箱" : "Email"}:</strong> ${input.email}</p>
      <p><strong>${zh ? "服务" : "Service"}:</strong> ${input.service}</p>
      <p><strong>${zh ? "时区" : "Timezone"}:</strong> ${input.timezone}</p>
      <p><strong>${zh ? "问题描述" : "Message"}:</strong></p>
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
  const zh = input.locale === "zh";
  return [
    zh ? "青鸾书院新咨询" : "New Qingluan Academy Inquiry",
    "",
    `${zh ? "姓名" : "Name"}: ${input.name}`,
    `${zh ? "邮箱" : "Email"}: ${input.email}`,
    `${zh ? "服务" : "Service"}: ${input.service}`,
    `${zh ? "时区" : "Timezone"}: ${input.timezone}`,
    "",
    zh ? "问题描述:" : "Message:",
    input.message,
  ].join("\n");
}

function buildClientReplyHtml(input: ContactInput, config: MailConfig): string {
  const locale = input.locale === "en" ? "en" : "zh";
  const zh = locale === "zh";
  const serviceSummary = getServiceSummaryByLocale(input.service, locale);
  const feeRange = getServiceFeeRangeByLocale(input.service, locale);

  return `
    <div style="font-family: Arial, sans-serif; color: #112326; line-height: 1.7;">
      <h2 style="margin-bottom: 16px;">${
        zh ? "青鸾书院 | 咨询申请已收到" : "Qingluan Academy | Inquiry Received"
      }</h2>
      <p>${zh ? `${input.name}，你好：` : `Dear ${input.name},`}</p>
      <p>${
        zh
          ? "感谢你的咨询申请。我们已收到信息，并将通过邮件回复确认细节。"
          : "Thank you for your inquiry. We have received your request and will reply with confirmation details by email."
      }</p>
      <h3 style="margin-top: 20px; margin-bottom: 8px;">${zh ? "你选择的服务" : "Your selected service"}</h3>
      <p><strong>${input.service}</strong></p>
      <p>${serviceSummary}</p>
      <h3 style="margin-top: 20px; margin-bottom: 8px;">${zh ? "费用与支付" : "Fee and payment"}</h3>
      <p><strong>${zh ? "预估费用" : "Estimated fee"}:</strong> ${feeRange}</p>
      <p><strong>${zh ? "支付信息" : "Payment information"}:</strong> ${config.paymentInfo}</p>
      <h3 style="margin-top: 20px; margin-bottom: 8px;">${zh ? "服务流程" : "Service process"}</h3>
      <ol style="padding-left: 20px;">
        <li>${
          zh ? "提交咨询表单（已完成）。" : "Submit inquiry form (completed)."
        }</li>
        <li>${
          zh
            ? "收到我们的确认邮件（包含服务范围、费用与支付说明）。"
            : "Receive our reply email with service scope, fee, and payment details."
        }</li>
        <li>${zh ? "完成支付并确认预约。" : "Complete payment to confirm the booking."}</li>
        <li>${
          zh ? "收到咨询时间与准备说明。" : "Receive schedule and preparation instructions."
        }</li>
        <li>${zh ? "按约定完成咨询并接收后续建议。" : "We deliver the agreed consultation and follow-up notes."}</li>
      </ol>
      <p style="margin-top: 18px;">${zh ? "此致，<br />青鸾书院" : "Best regards,<br />Qingluan Academy"}</p>
    </div>
  `;
}

function buildClientReplyText(input: ContactInput, config: MailConfig): string {
  const locale = input.locale === "en" ? "en" : "zh";
  const zh = locale === "zh";
  const serviceSummary = getServiceSummaryByLocale(input.service, locale);
  const feeRange = getServiceFeeRangeByLocale(input.service, locale);

  return [
    zh ? "青鸾书院 | 咨询申请已收到" : "Qingluan Academy | Inquiry Received",
    "",
    zh ? `${input.name}，你好：` : `Dear ${input.name},`,
    zh
      ? "感谢你的咨询申请。我们已收到信息，并将通过邮件回复确认细节。"
      : "Thank you for your inquiry. We have received your request and will reply with confirmation details by email.",
    "",
    zh ? "你选择的服务：" : "Your selected service:",
    `${input.service}`,
    serviceSummary,
    "",
    zh ? "费用与支付：" : "Fee and payment:",
    `${zh ? "预估费用" : "Estimated fee"}: ${feeRange}`,
    `${zh ? "支付信息" : "Payment information"}: ${config.paymentInfo}`,
    "",
    zh ? "服务流程：" : "Service process:",
    zh ? "1) 提交咨询表单（已完成）。" : "1) Submit inquiry form (completed).",
    zh
      ? "2) 收到我们的确认邮件（包含服务范围、费用与支付说明）。"
      : "2) Receive our reply email with service scope, fee, and payment details.",
    zh ? "3) 完成支付并确认预约。" : "3) Complete payment to confirm the booking.",
    zh ? "4) 收到咨询时间与准备说明。" : "4) Receive schedule and preparation instructions.",
    zh ? "5) 按约定完成咨询并接收后续建议。" : "5) We deliver the agreed consultation and follow-up notes.",
    "",
    zh ? "此致，" : "Best regards,",
    zh ? "青鸾书院" : "Qingluan Academy",
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
      subject:
        input.locale === "zh"
          ? `来自 ${input.name} 的新咨询 | 青鸾书院`
          : `New inquiry from ${input.name} | Qingluan Academy`,
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
      subject: input.locale === "zh" ? `咨询申请已收到 | 青鸾书院` : `Inquiry received | Qingluan Academy`,
      textContent: buildClientReplyText(input, config),
      htmlContent: buildClientReplyHtml(input, config),
    }),
  });

  if (!clientReplyResponse.ok) {
    const errorText = await clientReplyResponse.text();
    throw new Error(`Brevo client reply failed: ${clientReplyResponse.status} ${errorText}`);
  }
}
