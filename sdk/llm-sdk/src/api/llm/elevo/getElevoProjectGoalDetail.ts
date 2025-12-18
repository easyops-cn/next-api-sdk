import { http, HttpOptions } from "@next-core/http";
import { ModelElevoProjectGoal } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoApi_GetElevoProjectGoalDetailResponseBody =
  Partial<ModelElevoProjectGoal>;

/**
 * @description 获取elevo项目目标详情
 * @endpoint GET /api/v1/elevo/projects/:instanceId/goals/:goalInstanceId
 */
export const ElevoApi_getElevoProjectGoalDetail = async (
  instanceId: string | number,
  goalInstanceId: string | number,
  options?: HttpOptions
): Promise<ElevoApi_GetElevoProjectGoalDetailResponseBody> =>
  /**! @contract easyops.api.llm.elevo.GetElevoProjectGoalDetail@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoApi_GetElevoProjectGoalDetailResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/projects/${instanceId}/goals/${goalInstanceId}`,
      options
    )
  ).data;
