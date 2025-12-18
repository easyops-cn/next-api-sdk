import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoObjectApi_GetServiceObjectInstanceRequestParams {
  /** 是否带出实例关系数据，默认为true */
  withRelations?: boolean;
}

/** 实例详情（动态字段） */
export type ElevoObjectApi_GetServiceObjectInstanceResponseBody = Record<
  string,
  any
>;

/**
 * @description 获取服务对象实例详情
 * @endpoint GET /api/v1/elevo/objects/:objectId/instances/:instanceId
 */
export const ElevoObjectApi_getServiceObjectInstance = async (
  objectId: string | number,
  instanceId: string | number,
  params: ElevoObjectApi_GetServiceObjectInstanceRequestParams,
  options?: HttpOptions
): Promise<ElevoObjectApi_GetServiceObjectInstanceResponseBody> =>
  /**! @contract easyops.api.llm.elevo_object.GetServiceObjectInstance@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoObjectApi_GetServiceObjectInstanceResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/objects/${objectId}/instances/${instanceId}`,
      { ...options, params }
    )
  ).data;
