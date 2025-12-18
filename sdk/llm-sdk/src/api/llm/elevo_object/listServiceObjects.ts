import { http, HttpOptions } from "@next-core/http";
import { ModelServiceObject } from "../../../model/llm/index.js";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoObjectApi_ListServiceObjectsRequestParams {
  /** 是否返回对象属性和关系 */
  includeDetails?: boolean;
}

export type ElevoObjectApi_ListServiceObjectsResponseItem =
  Partial<ModelServiceObject>;

export type ElevoObjectApi_ListServiceObjectsResponseBody =
  ResponseListWrapper<ElevoObjectApi_ListServiceObjectsResponseItem>;

/**
 * @description 获取协作空间内的服务对象列表
 * @endpoint list /api/v1/elevo/workspaces/:workspaceId/service-objects
 */
export const ElevoObjectApi_listServiceObjects = async (
  workspaceId: string | number,
  params: ElevoObjectApi_ListServiceObjectsRequestParams,
  options?: HttpOptions
): Promise<ElevoObjectApi_ListServiceObjectsResponseBody> =>
  /**! @contract easyops.api.llm.elevo_object.ListServiceObjects@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoObjectApi_ListServiceObjectsResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/workspaces/${workspaceId}/service-objects`,
      { ...options, params }
    )
  ).data;
