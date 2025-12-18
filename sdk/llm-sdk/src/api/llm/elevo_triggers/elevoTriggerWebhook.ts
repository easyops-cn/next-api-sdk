import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoTriggersApi_ElevoTriggerWebhookRequestBody = Record<
  string,
  any
>;

export interface ElevoTriggersApi_ElevoTriggerWebhookResponseBody {
  /** 会话ID */
  conversationId?: string;
}

/**
 * @description elevo触发器webhook
 * @endpoint POST /api/v1/elevo/triggers/:instanceId/webhook
 */
export const ElevoTriggersApi_elevoTriggerWebhook = async (
  instanceId: string | number,
  data: ElevoTriggersApi_ElevoTriggerWebhookRequestBody,
  options?: HttpOptions
): Promise<ElevoTriggersApi_ElevoTriggerWebhookResponseBody> =>
  /**! @contract easyops.api.llm.elevo_triggers.ElevoTriggerWebhook@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoTriggersApi_ElevoTriggerWebhookResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/triggers/${instanceId}/webhook`,
      data,
      options
    )
  ).data;
