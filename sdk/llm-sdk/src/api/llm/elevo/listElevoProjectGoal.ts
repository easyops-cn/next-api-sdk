import { http, HttpOptions } from "@next-core/http";
import { ModelElevoProjectGoal } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_ListElevoProjectGoalResponseBody {
  /** 项目目标列表 */
  goals?: Partial<ModelElevoProjectGoal>[];
}

/**
 * @description 获取elevo项目目标列表
 * @endpoint GET /api/v1/elevo/projects/:instanceId/goals
 */
export const ElevoApi_listElevoProjectGoal = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<ElevoApi_ListElevoProjectGoalResponseBody> =>
  /**! @contract easyops.api.llm.elevo.ListElevoProjectGoal@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoApi_ListElevoProjectGoalResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/projects/${instanceId}/goals`,
      options
    )
  ).data;
