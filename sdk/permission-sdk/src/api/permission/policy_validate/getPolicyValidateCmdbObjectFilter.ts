import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface PolicyValidateApi_GetPolicyValidateCmdbObjectFilterRequestParams {
  /** 校验角色 */
  user: string;

  /** 权限点 */
  action: string;
}

export interface PolicyValidateApi_GetPolicyValidateCmdbObjectFilterResponseBody {
  /** 权限校验是否通过 */
  accepted?: boolean;

  /** 校验用户是否为管理员 */
  is_admin?: boolean;

  /** 权限点是否被禁用 */
  actionDisable?: boolean;

  /** 资源查询filter */
  filter?: Record<string, any>;
}

/**
 * @description 根据ABAC权限点获取CMDB资源模型访问的filter
 * @endpoint GET /api/v1/policy_validate/object_filter
 */
export const PolicyValidateApi_getPolicyValidateCmdbObjectFilter = async (
  params: PolicyValidateApi_GetPolicyValidateCmdbObjectFilterRequestParams,
  options?: HttpOptions
): Promise<PolicyValidateApi_GetPolicyValidateCmdbObjectFilterResponseBody> =>
  /**! @contract easyops.api.permission.policy_validate.GetPolicyValidateCmdbObjectFilter@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<PolicyValidateApi_GetPolicyValidateCmdbObjectFilterResponseBody>
    >("api/gateway/logic.permission/api/v1/policy_validate/object_filter", {
      ...options,
      params,
    })
  ).data;
