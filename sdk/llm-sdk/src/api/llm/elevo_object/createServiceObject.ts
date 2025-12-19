import { http, HttpOptions } from "@next-core/http";
import { ModelServiceObject } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoObjectApi_CreateServiceObjectRequestBody {
  /** CMDB模型ID（带命名空间） */
  objectId: string;

  /** 服务对象名称 */
  objectName?: string;

  /** 服务对象描述 */
  description?: string;

  /** 字段定义列表 */
  attributes: ModelServiceObject["attributes"];

  /** 生命周期定义（mermaid graph格式） */
  lifecycle?: string;
}

export interface ElevoObjectApi_CreateServiceObjectResponseBody {
  /** CMDB模型ID */
  objectId?: string;

  /** CMDB模型名称 */
  objectName?: string;
}

/**
 * @description 创建服务对象
 * @endpoint POST /api/v1/elevo/workspaces/:workspaceId/service-objects
 */
export const ElevoObjectApi_createServiceObject = async (
  workspaceId: string | number,
  data: ElevoObjectApi_CreateServiceObjectRequestBody,
  options?: HttpOptions
): Promise<ElevoObjectApi_CreateServiceObjectResponseBody> =>
  /**! @contract easyops.api.llm.elevo_object.CreateServiceObject@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoObjectApi_CreateServiceObjectResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/workspaces/${workspaceId}/service-objects`,
      data,
      options
    )
  ).data;
