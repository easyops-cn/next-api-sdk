import { http, HttpOptions } from "@next-core/http";
import { ModelElevoActivityLog } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoSpaceApi_UpdateActivityLogRequestBody {
  /** 动态参数体，根据 actionType 解析为不同的结构。如字段名称、评论内容、会话标题、会话ID、状态值等 */
  payload: Record<string, any>;
}

export type ElevoSpaceApi_UpdateActivityLogResponseBody =
  Partial<ModelElevoActivityLog>;

/**
 * @description 更新活动记录
 * @endpoint PUT /api/v1/elevo/spaces/:spaceId/activities/:activityId
 */
export const ElevoSpaceApi_updateActivityLog = async (
  spaceId: string | number,
  activityId: string | number,
  data: ElevoSpaceApi_UpdateActivityLogRequestBody,
  options?: HttpOptions
): Promise<ElevoSpaceApi_UpdateActivityLogResponseBody> =>
  /**! @contract easyops.api.llm.elevo_space.UpdateActivityLog@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<ElevoSpaceApi_UpdateActivityLogResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/spaces/${spaceId}/activities/${activityId}`,
      data,
      options
    )
  ).data;
