import { http, HttpOptions } from "@next-core/http";
import { ModelPolicy } from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface PolicyApi_UpdatePolicyRequestBody {
  /** 备注 */
  memo?: string;

  /** 策略规则 */
  statement?: ModelPolicy["statement"];

  /** 规则效果 */
  effect?: "allow" | "deny";

  /** 是否作用到所有用户, 为true时策略对所有的user都会生效 */
  allUser?: boolean;

  /** 编辑模式 */
  editMode?: "normal" | "highLevel";

  /** 是否禁用, 为空则不修改 */
  disable?: string;
}

/** 返回创建的策略结果 */
export type PolicyApi_UpdatePolicyResponseBody = Partial<ModelPolicy>;

/**
 * @description 更新自定义策略
 * @endpoint PUT /api/v1/policy/:instanceId
 */
export const PolicyApi_updatePolicy = async (
  instanceId: string | number,
  data: PolicyApi_UpdatePolicyRequestBody,
  options?: HttpOptions
): Promise<PolicyApi_UpdatePolicyResponseBody> =>
  /**! @contract easyops.api.permission.policy.UpdatePolicy@1.0.0 */ (
    await http.put<ResponseBodyWrapper<PolicyApi_UpdatePolicyResponseBody>>(
      `api/gateway/logic.permission/api/v1/policy/${instanceId}`,
      data,
      options
    )
  ).data;
