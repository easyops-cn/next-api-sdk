import { http, HttpOptions } from "@next-core/http";
import {
  ModelPolicy,
  ModelPolicyStatementGroupByResource,
} from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface PolicyApi_UpdatePolicyV2RequestBody {
  /** 备注 */
  memo?: string;

  /** 规则效果 */
  effect?: "allow" | "deny";

  /** 是否作用到所有用户, 为true时策略对所有的user都会生效 */
  allUser?: boolean;

  /** 编辑模式 */
  editMode?: "normal" | "highLevel";

  /** 策略规则, 以资源进行分类 */
  statement?: Partial<ModelPolicyStatementGroupByResource>[];

  /** 是否禁用, 为空则不修改 */
  disable?: string;
}

/** 返回创建的策略结果 */
export type PolicyApi_UpdatePolicyV2ResponseBody = Partial<ModelPolicy>;

/**
 * @description 更新自定义策略v2
 * @endpoint PUT /api/v2/policy/:instanceId
 */
export const PolicyApi_updatePolicyV2 = async (
  instanceId: string | number,
  data: PolicyApi_UpdatePolicyV2RequestBody,
  options?: HttpOptions
): Promise<PolicyApi_UpdatePolicyV2ResponseBody> =>
  /**! @contract easyops.api.permission.policy.UpdatePolicyV2@1.1.0 */ (
    await http.put<ResponseBodyWrapper<PolicyApi_UpdatePolicyV2ResponseBody>>(
      `api/gateway/logic.permission/api/v2/policy/${instanceId}`,
      data,
      options
    )
  ).data;
