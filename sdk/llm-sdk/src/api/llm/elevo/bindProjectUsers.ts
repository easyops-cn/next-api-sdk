import { http, HttpOptions } from "@next-core/http";

export interface ElevoApi_BindProjectUsersRequestBody {
  /** 用户列表 */
  users: ElevoApi_BindProjectUsersRequestBody_users_item[];
}

/**
 * @description 绑定项目与用户的关系
 * @endpoint POST /api/v1/elevo/project-users/:projectInstanceId/bind-users
 */
export const ElevoApi_bindProjectUsers = (
  projectInstanceId: string | number,
  data: ElevoApi_BindProjectUsersRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo.BindProjectUsers@1.0.0 */ http.post<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/project-users/${projectInstanceId}/bind-users`,
    data,
    options
  );

export interface ElevoApi_BindProjectUsersRequestBody_users_item {
  /** 用户的instanceId */
  instanceId?: string;
}
