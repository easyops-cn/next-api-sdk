import { http, HttpOptions } from "@next-core/http";
import { ModelServiceFlow } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoSpaceApi_UpdateServiceFlowRequestBody =
  Partial<ModelServiceFlow> & ModelServiceFlow_partial;

export type ElevoSpaceApi_UpdateServiceFlowResponseBody =
  Partial<ModelServiceFlow>;

/**
 * @description 更新业务流
 * @endpoint PUT /api/v1/elevo/spaces/:spaceId/service-flows/:instanceId
 */
export const ElevoSpaceApi_updateServiceFlow = async (
  spaceId: string | number,
  instanceId: string | number,
  data: ElevoSpaceApi_UpdateServiceFlowRequestBody,
  options?: HttpOptions
): Promise<ElevoSpaceApi_UpdateServiceFlowResponseBody> =>
  /**! @contract easyops.api.llm.elevo_space.UpdateServiceFlow@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<ElevoSpaceApi_UpdateServiceFlowResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/spaces/${spaceId}/service-flows/${instanceId}`,
      data,
      options
    )
  ).data;

export interface ModelServiceFlow_partial {
  /** 业务流实例ID */
  instanceId: string;

  /** 业务流名称 */
  name: string;

  /** 业务流描述 */
  description: string;
}
