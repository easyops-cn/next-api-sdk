import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoTriggersApi_ElevoTriggerExecuteResponseBody {
  /** 会话ID */
  conversationId?: string;
}

/**
 * @description elevo触发器执行
 * @endpoint POST /api/v1/elevo/triggers/:instanceId/execute
 */
export const ElevoTriggersApi_elevoTriggerExecute = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<ElevoTriggersApi_ElevoTriggerExecuteResponseBody> =>
  /**! @contract easyops.api.llm.elevo_triggers.ElevoTriggerExecute@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoTriggersApi_ElevoTriggerExecuteResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/triggers/${instanceId}/execute`,
      undefined,
      options
    )
  ).data;
