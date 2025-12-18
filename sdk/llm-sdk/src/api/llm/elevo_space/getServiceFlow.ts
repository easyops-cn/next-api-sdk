import { http, HttpOptions } from "@next-core/http";
import { ModelServiceFlow } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoSpaceApi_GetServiceFlowResponseBody =
  Partial<ModelServiceFlow>;

/**
 * @description 获取业务流详情
 * @endpoint GET /api/v1/elevo/spaces/:spaceId/service-flows/:instanceId
 */
export const ElevoSpaceApi_getServiceFlow = async (
  spaceId: string | number,
  instanceId: string | number,
  options?: HttpOptions
): Promise<ElevoSpaceApi_GetServiceFlowResponseBody> =>
  /**! @contract easyops.api.llm.elevo_space.GetServiceFlow@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoSpaceApi_GetServiceFlowResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/spaces/${spaceId}/service-flows/${instanceId}`,
      options
    )
  ).data;
