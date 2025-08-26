import { http, HttpOptions } from "@next-core/http";

export interface ElevoApi_UnbindProjectAiEmployeesRequestBody {
  /** 数字人实例ID列表 */
  aiEmployeeInstanceIds: string[];
}

/**
 * @description 解绑项目与数字人关系
 * @endpoint POST /api/v1/elevo/projects/:projectInstanceId/unbind-ai-employees
 */
export const ElevoApi_unbindProjectAiEmployees = (
  projectInstanceId: string | number,
  data: ElevoApi_UnbindProjectAiEmployeesRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo.UnbindProjectAiEmployees@1.0.0 */ http.post<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/projects/${projectInstanceId}/unbind-ai-employees`,
    data,
    options
  );
