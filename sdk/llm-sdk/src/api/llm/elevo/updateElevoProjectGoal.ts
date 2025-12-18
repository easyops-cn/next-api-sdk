import { http, HttpOptions } from "@next-core/http";
import { ModelElevoProjectGoal } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_UpdateElevoProjectGoalRequestBody {
  /** 更新的目标数据 */
  goal: Partial<ModelElevoProjectGoal>;

  /** 更新字段 */
  updateFields: string[];

  /** 会话ID，通过会话ID修改目标时，需传入会话ID */
  conversationId?: string;
}

export type ElevoApi_UpdateElevoProjectGoalResponseBody =
  Partial<ModelElevoProjectGoal>;

/**
 * @description 更新elevo项目目标
 * @endpoint PUT /api/v1/elevo/projects/:instanceId/goals/:goalInstanceId
 */
export const ElevoApi_updateElevoProjectGoal = async (
  instanceId: string | number,
  goalInstanceId: string | number,
  data: ElevoApi_UpdateElevoProjectGoalRequestBody,
  options?: HttpOptions
): Promise<ElevoApi_UpdateElevoProjectGoalResponseBody> =>
  /**! @contract easyops.api.llm.elevo.UpdateElevoProjectGoal@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<ElevoApi_UpdateElevoProjectGoalResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/projects/${instanceId}/goals/${goalInstanceId}`,
      data,
      options
    )
  ).data;
