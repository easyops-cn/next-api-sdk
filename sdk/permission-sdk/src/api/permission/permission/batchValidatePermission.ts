import { http, HttpOptions } from "@next-core/http";

export interface PermissionApi_BatchValidatePermissionRequestBody {
  /** 需要鉴权的用户名 */
  user: string;

  /** 需要鉴权的权限点列表 */
  actions: string[];

  /** 如果一个权限点有数据权限,但是不想校验数据权限,这个参数传true，默认为false, 须传false */
  validate_action_only?: boolean;

  /** 扩展数据，补充多个组件权限检验需要用到的字段，目前只支持同一system(权限点resource字段下的system值)下的数据权限校验 */
  extra_data?: Record<string, any>;
}

export interface PermissionApi_BatchValidatePermissionResponseBody {
  /** 返回码 */
  code?: number;

  /** 错误信息 */
  error?: string;

  /** 返回消息 */
  message?: string;

  /** 批量校验权限结果 */
  data?: PermissionApi_BatchValidatePermissionResponseBody_data;
}

/**
 * @description 批量校验权限，response.code等于0不代表所有权限校验都通过，需遍历response.data.actions下每个action的accepted状态是为true
 * @endpoint POST /api/v1/permission/validate
 */
export const PermissionApi_batchValidatePermission = (
  data: PermissionApi_BatchValidatePermissionRequestBody,
  options?: HttpOptions
): Promise<PermissionApi_BatchValidatePermissionResponseBody> =>
  /**! @contract easyops.api.permission.permission.BatchValidatePermission@1.0.0 */ http.post<PermissionApi_BatchValidatePermissionResponseBody>(
    "api/gateway/logic.permission_go_service/api/v1/permission/validate",
    data,
    options
  );

export interface PermissionApi_BatchValidatePermissionResponseBody_data {
  /** 是否为管理员 */
  is_admin?: boolean;

  /** 是否只校验action */
  validate_action_only?: boolean;

  /** 有权限的实例，[用户, :用户所属组ID] */
  authorizers?: string[];

  /** 权限列表 */
  actions?: PermissionApi_BatchValidatePermissionResponseBody_data_actions_item[];
}

export interface PermissionApi_BatchValidatePermissionResponseBody_data_actions_item {
  /** 权限点 */
  action?: string;

  /** 是否鉴权成功 */
  accepted?: boolean;

  /** 权限是否被禁用 */
  disable?: boolean;
}
