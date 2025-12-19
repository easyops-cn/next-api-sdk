import { http, HttpOptions } from "@next-core/http";
import { ModelServiceFlow } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoSpaceApi_ListServiceFlowRequestParams {
  /** 页码 */
  page?: number;

  /** 每页数量 */
  pageSize?: number;
}

export interface ElevoSpaceApi_ListServiceFlowResponseBody {
  /** 业务流列表 */
  list?: Partial<ModelServiceFlow>[];

  /** 总数 */
  total?: number;

  /** 当前页码 */
  page?: number;

  /** 每页数量 */
  pageSize?: number;
}

/**
 * @description 查询协作空间业务流列表
 * @endpoint GET /api/v1/elevo/spaces/:spaceId/service-flows
 */
export const ElevoSpaceApi_listServiceFlow = async (
  spaceId: string | number,
  params: ElevoSpaceApi_ListServiceFlowRequestParams,
  options?: HttpOptions
): Promise<ElevoSpaceApi_ListServiceFlowResponseBody> =>
  /**! @contract easyops.api.llm.elevo_space.ListServiceFlow@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoSpaceApi_ListServiceFlowResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/spaces/${spaceId}/service-flows`,
      { ...options, params }
    )
  ).data;
