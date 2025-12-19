import { http, HttpOptions } from "@next-core/http";

export interface ElevoObjectApi_UpdateServiceObjectInstanceRequestBody {
  /** 会话ID（可选，用于关联活动记录） */
  conversationId?: string;

  /** 要更新的实例数据（动态字段） */
  data: Record<string, any>;
}

/**
 * @description 更新服务对象实例
 * @endpoint PUT /api/v1/elevo/objects/:objectId/instances/:instanceId
 */
export const ElevoObjectApi_updateServiceObjectInstance = (
  objectId: string | number,
  instanceId: string | number,
  data: ElevoObjectApi_UpdateServiceObjectInstanceRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo_object.UpdateServiceObjectInstance@1.0.0 */ http.put<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/objects/${objectId}/instances/${instanceId}`,
    data,
    options
  );
