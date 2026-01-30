import { http, HttpOptions } from "@next-core/http";
import { ModelPolicy } from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

/** 返回删除的策略 */
export type PolicyApi_DeletePolicyResponseBody = Partial<ModelPolicy>;

/**
 * @description 删除自定义策略
 * @endpoint DELETE /api/v1/policy/:instanceId
 */
export const PolicyApi_deletePolicy = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<PolicyApi_DeletePolicyResponseBody> =>
  /**! @contract easyops.api.permission.policy.DeletePolicy@1.0.0 */ (
    await http.delete<ResponseBodyWrapper<PolicyApi_DeletePolicyResponseBody>>(
      `api/gateway/logic.permission/api/v1/policy/${instanceId}`,
      options
    )
  ).data;
