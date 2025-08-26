import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface WebhookApi_AlertWebhookRequestBody {
  /** 告警次数 */
  alertCount?: number;

  /** 告警id */
  alertId?: string;

  /** 告警内容 */
  originContent?: string;

  /** 告警目标 */
  target?: string;

  /** 告警时间 */
  time?: number;

  /** 最早告警时间 */
  startTime?: number;

  /** 告警等级 */
  level?: string;

  /** 告警的objectId */
  objectId?: string;

  /** 告警的实例Id */
  instanceId?: string;

  /** 是否已经恢复 */
  isRecover?: boolean;
}

export interface WebhookApi_AlertWebhookResponseBody {
  /** 是否成功接收 */
  success?: boolean;
}

/**
 * @description 告警webhook
 * @endpoint POST /api/v1/llm/webhook/alert_webhook
 */
export const WebhookApi_alertWebhook = async (
  data: WebhookApi_AlertWebhookRequestBody,
  options?: HttpOptions
): Promise<WebhookApi_AlertWebhookResponseBody> =>
  /**! @contract easyops.api.llm.webhook.AlertWebhook@1.0.0 */ (
    await http.post<ResponseBodyWrapper<WebhookApi_AlertWebhookResponseBody>>(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/webhook/alert_webhook",
      data,
      options
    )
  ).data;
