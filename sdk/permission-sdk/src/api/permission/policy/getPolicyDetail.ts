import { http, HttpOptions } from "@next-core/http";
import { ModelPolicyWithRelation } from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

/** 返回策略详情 */
export type PolicyApi_GetPolicyDetailResponseBody =
  Partial<ModelPolicyWithRelation>;

/**
 * @description 获取权限策略详情
 * @endpoint GET /api/v1/policy/:instanceId
 */
export const PolicyApi_getPolicyDetail = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<PolicyApi_GetPolicyDetailResponseBody> =>
  /**! @contract easyops.api.permission.policy.GetPolicyDetail@1.0.0 */ (
    await http.get<ResponseBodyWrapper<PolicyApi_GetPolicyDetailResponseBody>>(
      `api/gateway/logic.permission/api/v1/policy/${instanceId}`,
      options
    )
  ).data;
