import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoSpaceApi_GenerateSpaceRecommendationsRequestBody {
  /** 是否强制刷新（为true时无论数据库是否有缓存都会使用大模型重新生成） */
  forceRefresh?: boolean;
}

export interface ElevoSpaceApi_GenerateSpaceRecommendationsResponseBody {
  /** 推荐问题列表 */
  recommendations?: string[];

  /** 是否从缓存获取（false表示本次调用使用大模型生成） */
  fromCache?: boolean;
}

/**
 * @description 生成协作空间推荐问题
 * @endpoint POST /api/v1/elevo/spaces/:spaceId/recommendations/generate
 */
export const ElevoSpaceApi_generateSpaceRecommendations = async (
  spaceId: string | number,
  data: ElevoSpaceApi_GenerateSpaceRecommendationsRequestBody,
  options?: HttpOptions
): Promise<ElevoSpaceApi_GenerateSpaceRecommendationsResponseBody> =>
  /**! @contract easyops.api.llm.elevo_space.GenerateSpaceRecommendations@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoSpaceApi_GenerateSpaceRecommendationsResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/spaces/${spaceId}/recommendations/generate`,
      data,
      options
    )
  ).data;
