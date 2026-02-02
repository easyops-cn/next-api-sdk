import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface RoleApi_RoleDeleteUserRequestBody {
  /** 用户名列表 */
  operate_user?: string[];
}

export interface RoleApi_RoleDeleteUserResponseBody {
  /** 新加用户数量 */
  count?: number;
}

/**
 * @description 角色删除用户
 * @endpoint PUT /api/v1/permission_role/role_delete_user/:id
 */
export const RoleApi_roleDeleteUser = async (
  id: string | number,
  data: RoleApi_RoleDeleteUserRequestBody,
  options?: HttpOptions
): Promise<RoleApi_RoleDeleteUserResponseBody> =>
  /**! @contract easyops.api.permission.role.RoleDeleteUser@1.0.0 */ (
    await http.put<ResponseBodyWrapper<RoleApi_RoleDeleteUserResponseBody>>(
      `api/gateway/logic.permission/api/v1/permission_role/role_delete_user/${id}`,
      data,
      options
    )
  ).data;
