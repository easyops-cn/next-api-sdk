import { http, HttpOptions } from "@next-core/http";
import { ModelElevoActivityLog } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoSpaceApi_CreateActivityLogRequestBody {
  /** 业务对象ID（可选） */
  objectId?: string;

  /** 业务对象实例ID（可选） */
  objectInstanceId?: string;

  /** 会话ID（可选） */
  conversationId?: string;

  /** 操作类型：create_instance(创建实例)、edit_instance(编辑实例)、comment(评论)、start_conversation(发起会话)、status_change(状态变更) */
  actionType: string;

  /** 操作用户名称 */
  userName?: string;

  /** 动态参数体，根据 actionType 解析为不同的结构。如字段名称、评论内容、会话标题、会话ID、状态值等 */
  payload: Record<string, any>;
}

export type ElevoSpaceApi_CreateActivityLogResponseBody =
  Partial<ModelElevoActivityLog>;

/**
 * @description 创建活动记录
 * @endpoint POST /api/v1/elevo/spaces/:spaceId/activities
 */
export const ElevoSpaceApi_createActivityLog = async (
  spaceId: string | number,
  data: ElevoSpaceApi_CreateActivityLogRequestBody,
  options?: HttpOptions
): Promise<ElevoSpaceApi_CreateActivityLogResponseBody> =>
  /**! @contract easyops.api.llm.elevo_space.CreateActivityLog@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoSpaceApi_CreateActivityLogResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/spaces/${spaceId}/activities`,
      data,
      options
    )
  ).data;
