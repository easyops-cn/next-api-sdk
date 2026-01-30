import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface PolicyApi_UserGroupAttachPoliciesRequestBody {
  /** 用户组实例id */
  userGroupId?: string;

  /** 用户组名称 */
  userGroupName?: string;

  /** 权限策略实例id列表 */
  policyIdList?: string[];
}

export interface PolicyApi_UserGroupAttachPoliciesResponseBody {
  /** 绑定失败的策略实例id列表 */
  failedPolicyIdList?: string[];
}

/**
 * @description 用户组关联权限策略
 * @endpoint POST /api/v1/policy/user_group/attach_policies
 */
export const PolicyApi_userGroupAttachPolicies = async (
  data: PolicyApi_UserGroupAttachPoliciesRequestBody,
  options?: HttpOptions
): Promise<PolicyApi_UserGroupAttachPoliciesResponseBody> =>
  /**! @contract easyops.api.permission.policy.UserGroupAttachPolicies@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<PolicyApi_UserGroupAttachPoliciesResponseBody>
    >(
      "api/gateway/logic.permission/api/v1/policy/user_group/attach_policies",
      data,
      options
    )
  ).data;
