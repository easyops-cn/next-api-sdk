import { http, HttpOptions } from "@next-core/http";
import { ModelElevoProjectGoal } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_CreateElevoProjectGoalRequestBody {
  /** 目标 */
  goal: Partial<ModelElevoProjectGoal>;

  /** 会话ID，通过会话ID创建目标时，需传入会话ID */
  conversationId?: string;
}

export type ElevoApi_CreateElevoProjectGoalResponseBody =
  Partial<ModelElevoProjectGoal>;

/**
 * @description 创建elevo项目目标
 * @endpoint POST /api/v1/elevo/projects/:projectInstanceId/goals
 */
export const ElevoApi_createElevoProjectGoal = async (
  projectInstanceId: string | number,
  data: ElevoApi_CreateElevoProjectGoalRequestBody,
  options?: HttpOptions
): Promise<ElevoApi_CreateElevoProjectGoalResponseBody> =>
  /**! @contract easyops.api.llm.elevo.CreateElevoProjectGoal@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoApi_CreateElevoProjectGoalResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/projects/${projectInstanceId}/goals`,
      data,
      options
    )
  ).data;
