import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface RoleApi_DetachPolicyRequestBody {
  /** 角色id, cmdb实例id */
  id?: string;

  /** 绑定的策略id列表 */
  policyIdList?: string[];
}

export interface RoleApi_DetachPolicyResponseBody {
  /** 解绑失败的策略列表 */
  failedPolicyIdList?: string[];
}

/**
 * @description 角色解绑策略
 * @endpoint POST /api/v1/permission_role/detach_policy
 */
export const RoleApi_detachPolicy = async (
  data: RoleApi_DetachPolicyRequestBody,
  options?: HttpOptions
): Promise<RoleApi_DetachPolicyResponseBody> =>
  /**! @contract easyops.api.permission.role.DetachPolicy@1.0.0 */ (
    await http.post<ResponseBodyWrapper<RoleApi_DetachPolicyResponseBody>>(
      "api/gateway/logic.permission/api/v1/permission_role/detach_policy",
      data,
      options
    )
  ).data;
