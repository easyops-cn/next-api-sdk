import { http, HttpOptions } from "@next-core/http";

/**
 * @description 删除服务对象
 * @endpoint DELETE /api/v1/elevo/workspaces/:workspaceId/service-objects/:objectId
 */
export const ElevoObjectApi_deleteServiceObject = (
  workspaceId: string | number,
  objectId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo_object.DeleteServiceObject@1.0.0 */ http.delete<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/workspaces/${workspaceId}/service-objects/${objectId}`,
    options
  );
