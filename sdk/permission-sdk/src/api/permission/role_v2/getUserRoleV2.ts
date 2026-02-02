import { http, HttpOptions } from "@next-core/http";

export interface RoleV2Api_GetUserRoleV2RequestParams {
  /** 用户名 */
  user?: string;

  /** 根据角色名称模糊查询 */
  role?: string;

  /** 页码 */
  page?: number;

  /** 分页大小 */
  page_size?: number;
}

export interface RoleV2Api_GetUserRoleV2ResponseBody {
  /** code */
  code?: number;

  /** api message */
  msg?: string;

  /** page */
  page?: number;

  /** page_size */
  page_size?: number;

  /** total */
  total?: number;

  /** data */
  data?: RoleV2Api_GetUserRoleV2ResponseBody_data;
}

/**
 * @description 获取用户关联的角色
 * @endpoint GET /api/v2/permission_role/user_role
 */
export const RoleV2Api_getUserRoleV2 = (
  params: RoleV2Api_GetUserRoleV2RequestParams,
  options?: HttpOptions
): Promise<RoleV2Api_GetUserRoleV2ResponseBody> =>
  /**! @contract easyops.api.permission.role_v2.GetUserRoleV2@1.0.0 */ http.get<RoleV2Api_GetUserRoleV2ResponseBody>(
    "api/gateway/logic.permission/api/v2/permission_role/user_role",
    { ...options, params }
  );

export interface RoleV2Api_GetUserRoleV2ResponseBody_data {
  /** role name */
  roles?: string[];
}
