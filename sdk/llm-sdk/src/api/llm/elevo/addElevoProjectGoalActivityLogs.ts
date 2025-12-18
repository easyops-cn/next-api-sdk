import { http, HttpOptions } from "@next-core/http";
import { ModelElevoGoalActivitesLog } from "../../../model/llm/index.js";

export interface ElevoApi_AddElevoProjectGoalActivityLogsRequestBody {
  /** 操作日志列表 */
  logs: Partial<ModelElevoGoalActivitesLog>[];

  /** 会话ID，如果是通过会话创建的，则需要传入 */
  conversationId?: string;
}

/**
 * @description 添加elevo项目目标活动日志
 * @endpoint POST /api/v1/elevo/projects/:projectInstanceId/goals/:goalInstanceId/activity-logs
 */
export const ElevoApi_addElevoProjectGoalActivityLogs = (
  projectInstanceId: string | number,
  goalInstanceId: string | number,
  data: ElevoApi_AddElevoProjectGoalActivityLogsRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo.AddElevoProjectGoalActivityLogs@1.0.0 */ http.post<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/projects/${projectInstanceId}/goals/${goalInstanceId}/activity-logs`,
    data,
    options
  );
