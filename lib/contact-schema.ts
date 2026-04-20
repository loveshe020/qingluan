import { z } from "zod";

export const serviceOptions = [
  "Bazi Clarity Reading",
  "Qimen Decision Session",
  "Remote Feng Shui Audit",
  "Not sure yet",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address."),
  service: z.enum(serviceOptions, {
    errorMap: () => ({ message: "Please choose a valid service option." }),
  }),
  timezone: z
    .string()
    .trim()
    .min(2, "Please enter your timezone.")
    .max(60, "Timezone is too long."),
  message: z
    .string()
    .trim()
    .min(20, "Please share a little more detail.")
    .max(4000, "Message is too long."),
  website: z.string().max(0).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;

/**
 * 对联系表单输入进行服务端和客户端共用校验。
 * @param input 待校验的原始输入。
 * @returns Zod 校验结果。
 */
export function validateContactInput(input: unknown) {
  return contactSchema.safeParse(input);
}
