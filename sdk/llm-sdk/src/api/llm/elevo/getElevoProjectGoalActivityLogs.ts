import { http, HttpOptions } from "@next-core/http";
import { ModelElevoGoalActivitesLog } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_GetElevoProjectGoalActivityLogsResponseBody {
  /** 操作日志列表 */
  logs?: Partial<ModelElevoGoalActivitesLog>[];
}

/**
 * @description 获取elevo项目目标活动日志
 * @endpoint GET /api/v1/elevo/projects/:instanceId/goals/:goalInstanceId/activity-logs
 */
export const ElevoApi_getElevoProjectGoalActivityLogs = async (
  instanceId: string | number,
  goalInstanceId: string | number,
  options?: HttpOptions
): Promise<ElevoApi_GetElevoProjectGoalActivityLogsResponseBody> =>
  /**! @contract easyops.api.llm.elevo.GetElevoProjectGoalActivityLogs@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoApi_GetElevoProjectGoalActivityLogsResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/projects/${instanceId}/goals/${goalInstanceId}/activity-logs`,
      options
    )
  ).data;
