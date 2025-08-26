import { http, HttpOptions } from "@next-core/http";

export interface ElevoApi_UnbindProjectUsersRequestBody {
  /** 用户instanceId列表 */
  instanceIds: string[];
}

/**
 * @description 解绑项目与用户关系
 * @endpoint POST /api/v1/elevo/project-users/:projectInstanceId/unbind-users
 */
export const ElevoApi_unbindProjectUsers = (
  projectInstanceId: string | number,
  data: ElevoApi_UnbindProjectUsersRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo.UnbindProjectUsers@1.0.0 */ http.post<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/project-users/${projectInstanceId}/unbind-users`,
    data,
    options
  );
