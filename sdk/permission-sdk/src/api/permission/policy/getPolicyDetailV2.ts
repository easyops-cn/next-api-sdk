import { http, HttpOptions } from "@next-core/http";
import {
  ModelPolicy,
  ModelPolicyStatementGroupByResource,
  ModelBaseRole,
  ModelBaseUserGroup,
} from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

/** 返回策略详情 */
export interface PolicyApi_GetPolicyDetailV2ResponseBody {
  /** instance id */
  instanceId?: string;

  /** 策略名 */
  name?: string;

  /** 策略类型 */
  policyType?: "system" | "custom";

  /** 规则效果 */
  effect?: "allow" | "deny";

  /** 备注 */
  memo?: string;

  /** ctime */
  ctime?: string;

  /** mtime */
  mtime?: string;

  /** creator */
  creator?: string;

  /** modifier */
  modifier?: string;

  /** 是否作用到所有用户, 为true时策略对所有的user都会生效 */
  allUser?: boolean;

  /** columnDB辅助关联查询 */
  columnDBSearchPrepare?: ModelPolicy["columnDBSearchPrepare"];

  /** 是否禁用 */
  disable?: boolean;

  /** 编辑模式 */
  editMode?: "normal" | "highLevel";

  /** 策略规则, 以资源进行分类 */
  statement?: Partial<ModelPolicyStatementGroupByResource>[];

  /** 关系角色 */
  role?: Partial<ModelBaseRole>[];

  /** 关系用户组 */
  user_group?: Partial<ModelBaseUserGroup>[];
}

/**
 * @description 获取权限策略详情v2
 * @endpoint GET /api/v2/policy/:instanceId
 */
export const PolicyApi_getPolicyDetailV2 = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<PolicyApi_GetPolicyDetailV2ResponseBody> =>
  /**! @contract easyops.api.permission.policy.GetPolicyDetailV2@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<PolicyApi_GetPolicyDetailV2ResponseBody>
    >(`api/gateway/logic.permission/api/v2/policy/${instanceId}`, options)
  ).data;
