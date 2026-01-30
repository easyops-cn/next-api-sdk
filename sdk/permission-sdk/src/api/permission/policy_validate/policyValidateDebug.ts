import { http, HttpOptions } from "@next-core/http";
import { ModelPolicy } from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface PolicyValidateApi_PolicyValidateDebugRequestBody {
  /** 校验角色 */
  user: string;

  /** 权限点 */
  action: string;

  /** 校验对象 */
  resource: string;

  /** 校验数据id */
  resourceIds?: string[];

  /** resourceId查询的key值，不设置则为instanceId */
  resourceKey?: string;
}

export interface PolicyValidateApi_PolicyValidateDebugResponseBody {
  /** 当前校验用户是否为管理员 */
  is_admin?: boolean;

  /** 权限点是否被禁用 */
  actionDisable?: boolean;

  /** 资源判定结果 */
  resourceResults?: PolicyValidateApi_PolicyValidateDebugResponseBody_resourceResults_item[];
}

/**
 * @description 策略权限校验debug
 * @endpoint POST /api/v1/policy_validate/debug
 */
export const PolicyValidateApi_policyValidateDebug = async (
  data: PolicyValidateApi_PolicyValidateDebugRequestBody,
  options?: HttpOptions
): Promise<PolicyValidateApi_PolicyValidateDebugResponseBody> =>
  /**! @contract easyops.api.permission.policy_validate.PolicyValidateDebug@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<PolicyValidateApi_PolicyValidateDebugResponseBody>
    >(
      "api/gateway/logic.permission/api/v1/policy_validate/debug",
      data,
      options
    )
  ).data;

export interface PolicyValidateApi_PolicyValidateDebugResponseBody_resourceResults_item {
  /** 校验数据id */
  resourceId?: string;

  /** 权限判定状态 */
  validateStatus?: "Allow" | "ExplicitDeny" | "ImplicitDeny";

  /** 是否匹配策略 */
  isMatchPolicy?: boolean;

  /** 结果判定的策略 */
  policy?: Partial<ModelPolicy>;

  /** 异常信息 */
  errorMsg?: string;
}
