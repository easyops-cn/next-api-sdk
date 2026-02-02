import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface RoleApi_CreateRoleRequestBody {
  /** 角色名称 */
  role?: string;

  /** 角色下用户列表 */
  user?: string[];

  /** 角色下用户组列表 */
  user_group?: string[];

  /** 赋予的权限点的id列表 */
  permission?: string[];

  /** 角色禁用菜单列表，新站点已经废弃 */
  forbidden_menu?: string[];
}

export interface RoleApi_CreateRoleResponseBody {
  /** role id */
  id?: string;
}

/**
 * @description 新增角色权限配置
 * @endpoint POST /api/v1/permission_role/config
 */
export const RoleApi_createRole = async (
  data: RoleApi_CreateRoleRequestBody,
  options?: HttpOptions
): Promise<RoleApi_CreateRoleResponseBody> =>
  /**! @contract easyops.api.permission.role.CreateRole@1.0.0 */ (
    await http.post<ResponseBodyWrapper<RoleApi_CreateRoleResponseBody>>(
      "api/gateway/logic.permission/api/v1/permission_role/config",
      data,
      options
    )
  ).data;
