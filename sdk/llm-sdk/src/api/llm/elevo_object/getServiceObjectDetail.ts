import { http, HttpOptions } from "@next-core/http";
import { ModelServiceObject } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoObjectApi_GetServiceObjectDetailResponseBody =
  Partial<ModelServiceObject>;

/**
 * @description 获取服务对象详情（含字段定义）
 * @endpoint GET /api/v1/elevo/service-objects/:objectId
 */
export const ElevoObjectApi_getServiceObjectDetail = async (
  objectId: string | number,
  options?: HttpOptions
): Promise<ElevoObjectApi_GetServiceObjectDetailResponseBody> =>
  /**! @contract easyops.api.llm.elevo_object.GetServiceObjectDetail@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoObjectApi_GetServiceObjectDetailResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/service-objects/${objectId}`,
      options
    )
  ).data;
