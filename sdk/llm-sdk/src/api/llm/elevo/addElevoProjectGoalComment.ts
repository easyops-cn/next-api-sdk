import { http, HttpOptions } from "@next-core/http";

export interface ElevoApi_AddElevoProjectGoalCommentRequestBody {
  /** 评论内容 */
  comment: string;
}

/**
 * @description 添加elevo项目目标评论
 * @endpoint POST /api/v1/elevo/projects/:projectInstanceId/goals/:goalInstanceId/comments
 */
export const ElevoApi_addElevoProjectGoalComment = (
  projectInstanceId: string | number,
  goalInstanceId: string | number,
  data: ElevoApi_AddElevoProjectGoalCommentRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo.AddElevoProjectGoalComment@1.0.0 */ http.post<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/projects/${projectInstanceId}/goals/${goalInstanceId}/comments`,
    data,
    options
  );
