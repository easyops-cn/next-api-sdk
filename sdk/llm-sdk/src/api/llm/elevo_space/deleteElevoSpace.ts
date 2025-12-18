import { http, HttpOptions } from "@next-core/http";

/**
 * @description 删除elevo协作空间
 * @endpoint DELETE /api/v1/elevo/space/:instanceId
 */
export const ElevoSpaceApi_deleteElevoSpace = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo_space.DeleteElevoSpace@1.0.0 */ http.delete<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/space/${instanceId}`,
    options
  );
