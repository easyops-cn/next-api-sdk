import { http, HttpOptions } from "@next-core/http";
import {
  ModelPolicy,
  ModelPolicyStatementGroupByResource,
  ModelBaseUserGroup,
} from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface PolicyApi_CreatPolicyV2RequestBody {
  /** 策略名 */
  name?: string;

  /** 规则效果 */
  effect?: "allow" | "deny";

  /** 备注 */
  memo?: string;

  /** 是否作用到所有用户, 为true时策略对所有的user都会生效 */
  allUser?: boolean;

  /** columnDB辅助关联查询 */
  columnDBSearchPrepare?: ModelPolicy["columnDBSearchPrepare"];

  /** 是否禁用 */
  disable?: boolean;

  /** 编辑模式 */
  editMode?: "normal" | "highLevel";

  /** 策略规则, 以资源进行分类 */
  statement: Partial<ModelPolicyStatementGroupByResource>[];

  /** 绑定的用户组信息，为空则不绑定用户组 */
  userGroupList?: Partial<ModelBaseUserGroup>[];
}

/** 返回创建的策略结果 */
export type PolicyApi_CreatPolicyV2ResponseBody = Partial<ModelPolicy>;

/**
 * @description 创建自定义策略v2
 * @endpoint POST /api/v2/policy
 */
export const PolicyApi_creatPolicyV2 = async (
  data: PolicyApi_CreatPolicyV2RequestBody,
  options?: HttpOptions
): Promise<PolicyApi_CreatPolicyV2ResponseBody> =>
  /**! @contract easyops.api.permission.policy.CreatPolicyV2@1.0.0 */ (
    await http.post<ResponseBodyWrapper<PolicyApi_CreatPolicyV2ResponseBody>>(
      "api/gateway/logic.permission/api/v2/policy",
      data,
      options
    )
  ).data;
