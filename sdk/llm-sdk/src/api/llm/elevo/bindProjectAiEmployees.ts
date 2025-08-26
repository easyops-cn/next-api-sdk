import { http, HttpOptions } from "@next-core/http";

export interface ElevoApi_BindProjectAiEmployeesRequestBody {
  /** 数字人实例ID列表 */
  aiEmployeeInstanceIds: string[];
}

/**
 * @description 绑定项目与数字人关系
 * @endpoint POST /api/v1/elevo/projects/:projectInstanceId/bind-ai-employees
 */
export const ElevoApi_bindProjectAiEmployees = (
  projectInstanceId: string | number,
  data: ElevoApi_BindProjectAiEmployeesRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo.BindProjectAiEmployees@1.0.0 */ http.post<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/projects/${projectInstanceId}/bind-ai-employees`,
    data,
    options
  );
