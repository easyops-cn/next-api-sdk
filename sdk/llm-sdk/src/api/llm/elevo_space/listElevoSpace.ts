import { http, HttpOptions } from "@next-core/http";
import { ModelElevoSpace } from "../../../model/llm/index.js";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoSpaceApi_ListElevoSpaceRequestParams {
  /** 是否获取业务流列表 */
  with_service_flows?: boolean;

  /** 页码 */
  page?: number;

  /** 每页数量 */
  page_size?: number;
}

export type ElevoSpaceApi_ListElevoSpaceResponseItem =
  Partial<ModelElevoSpace> & ElevoSpaceApi_ListElevoSpaceResponseItem_2;

export type ElevoSpaceApi_ListElevoSpaceResponseBody =
  ResponseListWrapper<ElevoSpaceApi_ListElevoSpaceResponseItem>;

/**
 * @description 获取elevo协作空间列表（仅获取和当前用户相关的）
 * @endpoint list /api/v1/elevo/space
 */
export const ElevoSpaceApi_listElevoSpace = async (
  params: ElevoSpaceApi_ListElevoSpaceRequestParams,
  options?: HttpOptions
): Promise<ElevoSpaceApi_ListElevoSpaceResponseBody> =>
  /**! @contract easyops.api.llm.elevo_space.ListElevoSpace@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoSpaceApi_ListElevoSpaceResponseBody>
    >("api/gateway/logic.llm.aiops_service/api/v1/elevo/space", {
      ...options,
      params,
    })
  ).data;

export interface ElevoSpaceApi_ListElevoSpaceResponseItem_2 {
  /** 业务流列表 */
  serviceFlows?: ElevoSpaceApi_ListElevoSpaceResponseItem_serviceFlows_item[];
}

export interface ElevoSpaceApi_ListElevoSpaceResponseItem_serviceFlows_item {
  /** 业务流实例ID */
  instanceId?: string;

  /** 业务流名称 */
  name?: string;
}
