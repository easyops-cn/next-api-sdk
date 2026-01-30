import { http, HttpOptions } from "@next-core/http";
import { ModelPolicyWithRelation } from "../../../model/permission/index.js";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper.js";

export interface PolicyApi_SearchPolicyRequestParams {
  /** page */
  page: number;

  /** page_size */
  pageSize: number;

  /** 策略名模糊查询，和其他查询条件共存时与关系 */
  likeName?: string;

  /** 备注模糊查询，和其他查询条件共存时与关系 */
  likeMemo?: string;

  /** 策略关联的资源，格式为：{resourceType}:{resource} */
  relationResource?: string;

  /** 关联角色的id */
  relationRoleId?: string;

  /** 关联用户组id */
  relationUserGroupId?: string;

  /** 规则效果 */
  effect?: "allow" | "deny";

  /** 策略类型 */
  policyType?: "system" | "custom";

  /** 为空时不设置allUser条件；为true时查询allUser=true的策略；为false时查询allUser=false的策略 */
  allUser?: string;

  /** 是否禁用 */
  disable?: string;

  /** 排除的用户组id */
  excludeUserGroupId?: string;
}

/** 返回权限策略列表 */
export type PolicyApi_SearchPolicyResponseItem =
  Partial<ModelPolicyWithRelation>;

export type PolicyApi_SearchPolicyResponseBody =
  ResponseListWrapper<PolicyApi_SearchPolicyResponseItem>;

/**
 * @description 搜索权限策略
 * @endpoint LIST /api/v1/policy/search
 */
export const PolicyApi_searchPolicy = async (
  params: PolicyApi_SearchPolicyRequestParams,
  options?: HttpOptions
): Promise<PolicyApi_SearchPolicyResponseBody> =>
  /**! @contract easyops.api.permission.policy.SearchPolicy@1.0.0 */ (
    await http.get<ResponseBodyWrapper<PolicyApi_SearchPolicyResponseBody>>(
      "api/gateway/logic.permission/api/v1/policy/search",
      { ...options, params }
    )
  ).data;
