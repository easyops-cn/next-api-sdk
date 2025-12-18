import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoObjectApi_CreateServiceObjectInstanceRequestBody {
  /** 会话ID（可选，用于关联活动记录） */
  conversationId?: string;

  /** 实例数据（动态字段） */
  data: Record<string, any>;
}

export interface ElevoObjectApi_CreateServiceObjectInstanceResponseBody {
  /** 实例ID */
  instanceId?: string;
}

/**
 * @description 创建服务对象实例
 * @endpoint POST /api/v1/elevo/objects/:objectId/instances
 */
export const ElevoObjectApi_createServiceObjectInstance = async (
  objectId: string | number,
  data: ElevoObjectApi_CreateServiceObjectInstanceRequestBody,
  options?: HttpOptions
): Promise<ElevoObjectApi_CreateServiceObjectInstanceResponseBody> =>
  /**! @contract easyops.api.llm.elevo_object.CreateServiceObjectInstance@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoObjectApi_CreateServiceObjectInstanceResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/objects/${objectId}/instances`,
      data,
      options
    )
  ).data;
