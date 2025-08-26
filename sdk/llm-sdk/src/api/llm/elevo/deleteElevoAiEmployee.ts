import { http, HttpOptions } from "@next-core/http";

/**
 * @description 删除elevo数字人
 * @endpoint DELETE /api/v1/elevo/ai-employees/:instanceId
 */
export const ElevoApi_deleteElevoAiEmployee = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo.DeleteElevoAiEmployee@1.0.0 */ http.delete<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/ai-employees/${instanceId}`,
    options
  );
