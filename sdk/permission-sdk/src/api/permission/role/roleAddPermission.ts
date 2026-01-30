import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface RoleApi_RoleAddPermissionRequestBody {
  /** 新增权限点列表 */
  permission?: string[];
}

export interface RoleApi_RoleAddPermissionResponseBody {
  /** 新增权限点数量 */
  count?: number;
}

/**
 * @description 角色添加权限点
 * @endpoint PUT /api/v1/permission_role/role_add_permission/:id
 */
export const RoleApi_roleAddPermission = async (
  id: string | number,
  data: RoleApi_RoleAddPermissionRequestBody,
  options?: HttpOptions
): Promise<RoleApi_RoleAddPermissionResponseBody> =>
  /**! @contract easyops.api.permission.role.RoleAddPermission@1.0.0 */ (
    await http.put<ResponseBodyWrapper<RoleApi_RoleAddPermissionResponseBody>>(
      `api/gateway/logic.permission/api/v1/permission_role/role_add_permission/${id}`,
      data,
      options
    )
  ).data;
