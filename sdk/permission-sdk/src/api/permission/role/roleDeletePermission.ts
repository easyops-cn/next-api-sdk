import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface RoleApi_RoleDeletePermissionRequestBody {
  /** 删除的权限点列表 */
  permission?: string[];
}

export interface RoleApi_RoleDeletePermissionResponseBody {
  /** 修改的 */
  count?: number;
}

/**
 * @description 角色删除权限点
 * @endpoint PUT /api/v1/permission_role/role_delete_permission/:id
 */
export const RoleApi_roleDeletePermission = async (
  id: string | number,
  data: RoleApi_RoleDeletePermissionRequestBody,
  options?: HttpOptions
): Promise<RoleApi_RoleDeletePermissionResponseBody> =>
  /**! @contract easyops.api.permission.role.RoleDeletePermission@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<RoleApi_RoleDeletePermissionResponseBody>
    >(
      `api/gateway/logic.permission/api/v1/permission_role/role_delete_permission/${id}`,
      data,
      options
    )
  ).data;
