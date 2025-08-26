import { http, HttpOptions } from "@next-core/http";

/**
 * @description 删除elevo项目
 * @endpoint DELETE /api/v1/elevo/projects/:instanceId
 */
export const ElevoApi_deleteElevoProject = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo.DeleteElevoProject@1.0.0 */ http.delete<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/projects/${instanceId}`,
    options
  );
