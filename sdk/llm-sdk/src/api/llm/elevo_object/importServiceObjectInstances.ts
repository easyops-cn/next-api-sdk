import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoObjectApi_ImportServiceObjectInstancesRequestBody {
  /** 会话ID（可选，用于关联活动记录） */
  conversationId?: string;

  /** 导入的实例列表（有instanceId则更新、无则新增，动态字段，包含普通字段和关系属性） */
  imports?: Record<string, any>[];

  /** 需删除的实例ID数组 */
  deletes?: string[];
}

export interface ElevoObjectApi_ImportServiceObjectInstancesResponseBody {
  /** 导入成功的实例列表 */
  imported?: ElevoObjectApi_ImportServiceObjectInstancesResponseBody_imported_item[];

  /** 删除成功的实例ID列表 */
  deleted?: string[];
}

/**
 * @description 批量导入业务对象实例数据（支持新增、更新、删除）
 * @endpoint POST /api/v1/elevo/objects/:objectId/instances/import
 */
export const ElevoObjectApi_importServiceObjectInstances = async (
  objectId: string | number,
  data: ElevoObjectApi_ImportServiceObjectInstancesRequestBody,
  options?: HttpOptions
): Promise<ElevoObjectApi_ImportServiceObjectInstancesResponseBody> =>
  /**! @contract easyops.api.llm.elevo_object.ImportServiceObjectInstances@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoObjectApi_ImportServiceObjectInstancesResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/objects/${objectId}/instances/import`,
      data,
      options
    )
  ).data;

export interface ElevoObjectApi_ImportServiceObjectInstancesResponseBody_imported_item {
  /** 实例ID */
  instanceId?: string;

  /** 操作类型（created/updated） */
  action?: string;
}
