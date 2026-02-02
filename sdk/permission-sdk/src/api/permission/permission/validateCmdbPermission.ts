import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface PermissionApi_ValidateCmdbPermissionRequestParams {
  /** 需要鉴权的用户名 */
  user: string;

  /** 需要鉴权的权限点 */
  action: string;

  /** 需要鉴权的object_id */
  object_id: string;

  /** 需要鉴权的instance_id */
  instance_id?: string;

  /** 如果一个权限点有数据权限,但是不想校验数据权限,这个参数传true，默认为false */
  validate_action_only?: boolean;
}

export interface PermissionApi_ValidateCmdbPermissionResponseBody {
  /** 是否鉴权成功 */
  accepted?: boolean;

  /** 权限是否被禁用 */
  disable?: boolean;

  /** 是否为管理员 */
  is_admin?: boolean;

  /** 有权限的用户(组) */
  authorizers?: string[];
}

/**
 * @description 校验cmdb权限
 * @endpoint GET /api/v1/permission/validate
 */
export const PermissionApi_validateCmdbPermission = async (
  params: PermissionApi_ValidateCmdbPermissionRequestParams,
  options?: HttpOptions
): Promise<PermissionApi_ValidateCmdbPermissionResponseBody> =>
  /**! @contract easyops.api.permission.permission.ValidateCmdbPermission@1.2.0 */ (
    await http.get<
      ResponseBodyWrapper<PermissionApi_ValidateCmdbPermissionResponseBody>
    >("api/gateway/logic.permission/api/v1/permission/validate", {
      ...options,
      params,
    })
  ).data;
