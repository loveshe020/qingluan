import type { Metadata } from "next";

/**
 * 根据页面标题和描述生成基础元数据，保持各路由 SEO 结构一致。
 * @param title 页面标题。
 * @param description 页面描述。
 * @returns 页面元数据对象。
 */
export function buildMetadata(title: string, description: string): Metadata {
  return {
    title: `${title} | Qingluan Academy`,
    description,
  };
}
