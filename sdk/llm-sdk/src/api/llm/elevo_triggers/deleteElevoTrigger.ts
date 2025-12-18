import { http, HttpOptions } from "@next-core/http";

/**
 * @description 删除Elevo触发器
 * @endpoint DELETE /api/v1/elevo/triggers/:instanceId
 */
export const ElevoTriggersApi_deleteElevoTrigger = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo_triggers.DeleteElevoTrigger@1.0.0 */ http.delete<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/triggers/${instanceId}`,
    options
  );
