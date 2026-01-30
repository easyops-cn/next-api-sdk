import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface RoleApi_PutPermissionRoleRequestBody {
  /** 角色名，必填，但是必填校验不在controller层做校验，所以不在契约上做必填声明 */
  role?: string;
}

export interface RoleApi_PutPermissionRoleResponseBody {
  /** 修改用户数量 */
  count?: number;
}

/**
 * @description 修改角色名
 * @endpoint PUT /api/v1/permission_role/rename_role/:id
 */
export const RoleApi_putPermissionRole = async (
  id: string | number,
  data: RoleApi_PutPermissionRoleRequestBody,
  options?: HttpOptions
): Promise<RoleApi_PutPermissionRoleResponseBody> =>
  /**! @contract easyops.api.permission.role.PutPermissionRole@1.0.0 */ (
    await http.put<ResponseBodyWrapper<RoleApi_PutPermissionRoleResponseBody>>(
      `api/gateway/logic.permission/api/v1/permission_role/rename_role/${id}`,
      data,
      options
    )
  ).data;
