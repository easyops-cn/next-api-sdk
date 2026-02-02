import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface RoleApi_AttachPolicyRequestBody {
  /** 角色id, cmdb实例id */
  id?: string;

  /** 绑定的策略id列表 */
  policyIdList?: string[];
}

export interface RoleApi_AttachPolicyResponseBody {
  /** 绑定失败的策略列表 */
  failedPolicyIdList?: string[];
}

/**
 * @description 角色关联策略
 * @endpoint POST /api/v1/permission_role/attach_policy
 */
export const RoleApi_attachPolicy = async (
  data: RoleApi_AttachPolicyRequestBody,
  options?: HttpOptions
): Promise<RoleApi_AttachPolicyResponseBody> =>
  /**! @contract easyops.api.permission.role.AttachPolicy@1.0.0 */ (
    await http.post<ResponseBodyWrapper<RoleApi_AttachPolicyResponseBody>>(
      "api/gateway/logic.permission/api/v1/permission_role/attach_policy",
      data,
      options
    )
  ).data;
