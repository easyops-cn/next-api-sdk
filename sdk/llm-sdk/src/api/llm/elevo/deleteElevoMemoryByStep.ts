import { http, HttpOptions } from "@next-core/http";

/**
 * @description 根据步骤ID删除elevo记忆
 * @endpoint DELETE /api/v1/elevo/memories/step/:stepId
 */
export const ElevoApi_deleteElevoMemoryByStep = (
  stepId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo.DeleteElevoMemoryByStep@1.0.0 */ http.delete<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/memories/step/${stepId}`,
    options
  );
