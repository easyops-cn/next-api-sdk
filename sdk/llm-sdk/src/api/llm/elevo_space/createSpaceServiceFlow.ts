import { http, HttpOptions } from "@next-core/http";
import { ModelServiceFlow } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoSpaceApi_CreateSpaceServiceFlowRequestBody {
  /** 业务流名称 */
  name: string;

  /** 业务流描述 */
  description: string;

  /** 前置条件 */
  prerequisite?: string;

  /** 业务流配置 */
  spec?: ModelServiceFlow["spec"];

  /** 是否需求确认执行 */
  needConfirm?: boolean;
}

export type ElevoSpaceApi_CreateSpaceServiceFlowResponseBody =
  Partial<ModelServiceFlow>;

/**
 * @description 在协作空间中创建业务流
 * @endpoint POST /api/v1/elevo/spaces/:spaceId/service-flows
 */
export const ElevoSpaceApi_createSpaceServiceFlow = async (
  spaceId: string | number,
  data: ElevoSpaceApi_CreateSpaceServiceFlowRequestBody,
  options?: HttpOptions
): Promise<ElevoSpaceApi_CreateSpaceServiceFlowResponseBody> =>
  /**! @contract easyops.api.llm.elevo_space.CreateSpaceServiceFlow@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoSpaceApi_CreateSpaceServiceFlowResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/spaces/${spaceId}/service-flows`,
      data,
      options
    )
  ).data;
