import { http, HttpOptions } from "@next-core/http";

export interface ElevoObjectApi_DeleteServiceObjectInstanceRequestParams {
  /** 会话ID（可选，用于关联活动记录） */
  conversationId?: string;
}

/**
 * @description 删除服务对象实例
 * @endpoint DELETE /api/v1/elevo/objects/:objectId/instances/:instanceId
 */
export const ElevoObjectApi_deleteServiceObjectInstance = (
  objectId: string | number,
  instanceId: string | number,
  params: ElevoObjectApi_DeleteServiceObjectInstanceRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo_object.DeleteServiceObjectInstance@1.0.0 */ http.delete<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/objects/${objectId}/instances/${instanceId}`,
    { ...options, params }
  );
