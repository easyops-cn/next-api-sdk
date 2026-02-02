import { http, HttpOptions } from "@next-core/http";
import { ModelPolicy } from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface PolicyApi_CreatPolicyRequestBody {
  /** 策略名 */
  name?: string;

  /** 规则效果 */
  effect?: "allow" | "deny";

  /** 备注 */
  memo?: string;

  /** 策略规则 */
  statement?: ModelPolicy["statement"];

  /** 是否作用到所有用户, 为true时策略对所有的user都会生效 */
  allUser?: boolean;

  /** columnDB辅助关联查询 */
  columnDBSearchPrepare?: ModelPolicy["columnDBSearchPrepare"];

  /** 是否禁用 */
  disable?: boolean;

  /** 编辑模式 */
  editMode?: "normal" | "highLevel";
}

/** 返回创建的策略结果 */
export type PolicyApi_CreatPolicyResponseBody = Partial<ModelPolicy>;

/**
 * @description 创建自定义策略
 * @endpoint POST /api/v1/policy
 */
export const PolicyApi_creatPolicy = async (
  data: PolicyApi_CreatPolicyRequestBody,
  options?: HttpOptions
): Promise<PolicyApi_CreatPolicyResponseBody> =>
  /**! @contract easyops.api.permission.policy.CreatPolicy@1.0.0 */ (
    await http.post<ResponseBodyWrapper<PolicyApi_CreatPolicyResponseBody>>(
      "api/gateway/logic.permission/api/v1/policy",
      data,
      options
    )
  ).data;
