import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoSpaceApi_GenerateSpaceCapabilitiesRequestBody {
  /** 是否强制刷新（为true时无论数据库是否有缓存都会使用大模型重新生成） */
  forceRefresh?: boolean;
}

export interface ElevoSpaceApi_GenerateSpaceCapabilitiesResponseBody {
  /** 【管理业务实例】核心能力说明 */
  manageInstancesCapability?: string;

  /** 【发起业务流】核心能力说明 */
  initiateFlowCapability?: string;

  /** 【检索空间知识】核心能力说明 */
  searchKnowledgeCapability?: string;

  /** 是否从缓存获取（false表示本次调用使用大模型生成） */
  fromCache?: boolean;
}

/**
 * @description 生成协作空间核心能力说明
 * @endpoint POST /api/v1/elevo/spaces/:spaceId/capabilities/generate
 */
export const ElevoSpaceApi_generateSpaceCapabilities = async (
  spaceId: string | number,
  data: ElevoSpaceApi_GenerateSpaceCapabilitiesRequestBody,
  options?: HttpOptions
): Promise<ElevoSpaceApi_GenerateSpaceCapabilitiesResponseBody> =>
  /**! @contract easyops.api.llm.elevo_space.GenerateSpaceCapabilities@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoSpaceApi_GenerateSpaceCapabilitiesResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/spaces/${spaceId}/capabilities/generate`,
      data,
      options
    )
  ).data;
