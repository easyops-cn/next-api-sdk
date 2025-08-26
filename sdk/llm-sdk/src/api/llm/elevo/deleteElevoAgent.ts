import { http, HttpOptions } from "@next-core/http";

/**
 * @description 删除elevo智能体
 * @endpoint DELETE /api/v1/elevo/agents/:instanceId
 */
export const ElevoApi_deleteElevoAgent = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo.DeleteElevoAgent@1.0.0 */ http.delete<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/agents/${instanceId}`,
    options
  );
