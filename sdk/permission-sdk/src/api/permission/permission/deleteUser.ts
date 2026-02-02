import { http, HttpOptions } from "@next-core/http";

export interface PermissionApi_DeleteUserRequestParams {
  /** 用户名或用户组ID(:userGroupID) */
  name: string;
}

export interface PermissionApi_DeleteUserResponseBody {
  /** 返回码 */
  code?: number;

  /** 结果信息 */
  msg?: string;

  /** 数据 */
  data?: Record<string, any>;
}

/**
 * @description 删除用户时取消用户所有的权限
 * @endpoint DELETE /api/v1/permission/delete_user
 */
export const PermissionApi_deleteUser = (
  params: PermissionApi_DeleteUserRequestParams,
  options?: HttpOptions
): Promise<PermissionApi_DeleteUserResponseBody> =>
  /**! @contract easyops.api.permission.permission.DeleteUser@1.0.0 */ http.delete<PermissionApi_DeleteUserResponseBody>(
    "api/gateway/logic.permission/api/v1/permission/delete_user",
    { ...options, params }
  );
