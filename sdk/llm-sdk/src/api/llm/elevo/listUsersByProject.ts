import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_ListUsersByProjectRequestParams {
  /** 页码 */
  page?: number;

  /** 每页数量 */
  page_size?: number;
}

export interface ElevoApi_ListUsersByProjectResponseBody {
  /** 项目内的成员 */
  users?: ElevoApi_ListUsersByProjectResponseBody_users_item[];

  /** 页码 */
  page?: number;

  /** 每页数量 */
  page_size?: number;

  /** 总数 */
  total?: number;
}

/**
 * @description 获取指定项目的用户列表
 * @endpoint GET /api/v1/elevo/project-users/:projectInstanceId/list-users
 */
export const ElevoApi_listUsersByProject = async (
  projectInstanceId: string | number,
  params: ElevoApi_ListUsersByProjectRequestParams,
  options?: HttpOptions
): Promise<ElevoApi_ListUsersByProjectResponseBody> =>
  /**! @contract easyops.api.llm.elevo.ListUsersByProject@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoApi_ListUsersByProjectResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/project-users/${projectInstanceId}/list-users`,
      { ...options, params }
    )
  ).data;

export interface ElevoApi_ListUsersByProjectResponseBody_users_item {
  /** 用户的instanceId */
  instanceId?: string;

  /** 用户的名称 */
  name?: string;

  /** 用户联系电话 */
  user_tel?: string;

  /** 用户的头像 */
  user_icon?: string;
}
