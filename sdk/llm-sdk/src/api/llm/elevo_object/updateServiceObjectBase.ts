import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoObjectApi_UpdateServiceObjectBaseRequestBody {
  /** 服务对象名称 */
  objectName?: string;

  /** 服务对象描述 */
  description?: string;

  /** 生命周期定义（mermaid graph格式） */
  lifecycle?: string;
}

export interface ElevoObjectApi_UpdateServiceObjectBaseResponseBody {
  /** 关联记录实例ID */
  instanceId?: string;

  /** CMDB模型ID */
  objectId?: string;

  /** 协作空间ID */
  workspaceId?: string;
}

/**
 * @description 更新服务对象基础信息（不包括属性和关系）
 * @endpoint PUT /api/v1/elevo/workspaces/:workspaceId/service-objects/:objectId
 */
export const ElevoObjectApi_updateServiceObjectBase = async (
  workspaceId: string | number,
  objectId: string | number,
  data: ElevoObjectApi_UpdateServiceObjectBaseRequestBody,
  options?: HttpOptions
): Promise<ElevoObjectApi_UpdateServiceObjectBaseResponseBody> =>
  /**! @contract easyops.api.llm.elevo_object.UpdateServiceObjectBase@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<ElevoObjectApi_UpdateServiceObjectBaseResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/workspaces/${workspaceId}/service-objects/${objectId}`,
      data,
      options
    )
  ).data;
