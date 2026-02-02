import { http, HttpOptions } from "@next-core/http";

export interface RoleApi_DeletePermissionRoleResponseBody {
  /** api code */
  code?: number;

  /** api msg */
  msg?: string;

  /** api data */
  data?: RoleApi_DeletePermissionRoleResponseBody_data;
}

/**
 * @description 删除角色权限
 * @endpoint DELETE /api/v1/permission_role/config/:id
 */
export const RoleApi_deletePermissionRole = (
  id: string | number,
  options?: HttpOptions
): Promise<RoleApi_DeletePermissionRoleResponseBody> =>
  /**! @contract easyops.api.permission.role.DeletePermissionRole@1.0.0 */ http.delete<RoleApi_DeletePermissionRoleResponseBody>(
    `api/gateway/logic.permission/api/v1/permission_role/config/${id}`,
    options
  );

export interface RoleApi_DeletePermissionRoleResponseBody_data {
  /** 固定返回1，表示删除了1个角色实例，没意义的返回值，但是要保留它的特征 */
  id?: number;
}
