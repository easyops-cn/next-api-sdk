import { http, HttpOptions } from "@next-core/http";
import { ModelBaseUserGroup } from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface PolicyApi_PolicyAttachUserGroupRequestBody {
  /** 绑定的用户组信息 */
  userGroupList?: Partial<ModelBaseUserGroup>[];
}

export interface PolicyApi_PolicyAttachUserGroupResponseBody {
  /** 绑定失败的用户组实例的id列表 */
  failedUserGroupIdList?: string[];
}

/**
 * @description 策略关联用户组
 * @endpoint POST /api/v1/policy/attach_policy/:policyId
 */
export const PolicyApi_policyAttachUserGroup = async (
  policyId: string | number,
  data: PolicyApi_PolicyAttachUserGroupRequestBody,
  options?: HttpOptions
): Promise<PolicyApi_PolicyAttachUserGroupResponseBody> =>
  /**! @contract easyops.api.permission.policy.PolicyAttachUserGroup@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<PolicyApi_PolicyAttachUserGroupResponseBody>
    >(
      `api/gateway/logic.permission/api/v1/policy/attach_policy/${policyId}`,
      data,
      options
    )
  ).data;
