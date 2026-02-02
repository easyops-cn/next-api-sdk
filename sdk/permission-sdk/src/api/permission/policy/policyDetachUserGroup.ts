import { http, HttpOptions } from "@next-core/http";
import { ModelBaseUserGroup } from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface PolicyApi_PolicyDetachUserGroupRequestBody {
  /** 解绑的用户组 */
  userGroupList?: Partial<ModelBaseUserGroup>[];
}

export interface PolicyApi_PolicyDetachUserGroupResponseBody {
  /** 解绑失败的用户组id列表 */
  failedUserGroupIdList?: string[];
}

/**
 * @description 角色解绑策略
 * @endpoint POST /api/v1/policy/detach_policy/:policyId
 */
export const PolicyApi_policyDetachUserGroup = async (
  policyId: string | number,
  data: PolicyApi_PolicyDetachUserGroupRequestBody,
  options?: HttpOptions
): Promise<PolicyApi_PolicyDetachUserGroupResponseBody> =>
  /**! @contract easyops.api.permission.policy.PolicyDetachUserGroup@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<PolicyApi_PolicyDetachUserGroupResponseBody>
    >(
      `api/gateway/logic.permission/api/v1/policy/detach_policy/${policyId}`,
      data,
      options
    )
  ).data;
