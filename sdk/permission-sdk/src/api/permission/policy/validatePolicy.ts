import { http, HttpOptions } from "@next-core/http";
import { ModelPolicyStatementGroupByResource } from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface PolicyApi_ValidatePolicyRequestBody {
  /** 权限策略文本, 格式为yaml */
  statement: string;
}

export interface PolicyApi_ValidatePolicyResponseBody {
  /** 策略规则, 以资源进行分类 */
  statement?: Partial<ModelPolicyStatementGroupByResource>[];
}

/**
 * @description 验证权限策略合法性
 * @endpoint POST /api/v1/policy/statement/validate
 */
export const PolicyApi_validatePolicy = async (
  data: PolicyApi_ValidatePolicyRequestBody,
  options?: HttpOptions
): Promise<PolicyApi_ValidatePolicyResponseBody> =>
  /**! @contract easyops.api.permission.policy.ValidatePolicy@1.0.0 */ (
    await http.post<ResponseBodyWrapper<PolicyApi_ValidatePolicyResponseBody>>(
      "api/gateway/logic.permission/api/v1/policy/statement/validate",
      data,
      options
    )
  ).data;
