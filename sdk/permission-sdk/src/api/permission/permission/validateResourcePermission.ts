import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface PermissionApi_ValidateResourcePermissionRequestParams {
  /** 校验角色 */
  user: string;

  /** 权限点 */
  action: string;

  /** 校验对象 */
  resource: string;

  /** 校验数据id */
  resourceId?: string;

  /** 是否只校验权限点, 为false时校验数据权限 */
  validate_action_only?: boolean;
}

export interface PermissionApi_ValidateResourcePermissionResponseBody {
  /** 权限校验是否通过 */
  accepted?: boolean;

  /** 动作点类型 */
  accessLevel?: "Read" | "Write" | "List";

  /** accessLevel: List类型返回的数据控制条件 */
  filter?: Record<string, any>[];
}

/**
 * @description 校验策略数据权限
 * @endpoint GET /api/v1/policy_validate/validate
 */
export const PermissionApi_validateResourcePermission = async (
  params: PermissionApi_ValidateResourcePermissionRequestParams,
  options?: HttpOptions
): Promise<PermissionApi_ValidateResourcePermissionResponseBody> =>
  /**! @contract easyops.api.permission.permission.ValidateResourcePermission@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<PermissionApi_ValidateResourcePermissionResponseBody>
    >("api/gateway/logic.permission/api/v1/policy_validate/validate", {
      ...options,
      params,
    })
  ).data;
