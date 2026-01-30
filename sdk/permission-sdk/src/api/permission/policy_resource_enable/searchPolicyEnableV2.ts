import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface PolicyResourceEnableApi_SearchPolicyEnableV2RequestBody {
  /** 模块id精确查询条件 */
  moduleId?: string;

  /** 资源模糊查询条件 */
  resourceLike?: string;

  /** 资源分类，为空则搜索所有资源分类 */
  resourceCategory?: PolicyResourceEnableApi_SearchPolicyEnableV2RequestBody_resourceCategory;

  /** page */
  page: number;

  /** page_size */
  pageSize: number;
}

export interface PolicyResourceEnableApi_SearchPolicyEnableV2ResponseBody {
  /** 资源配置表开关列表 */
  list?: PolicyResourceEnableApi_SearchPolicyEnableV2ResponseBody_list_item[];

  /** page */
  page?: number;

  /** page_size */
  pageSize?: number;

  /** total */
  total?: number;

  /** 资源分类,目前只有cmdb会有模型相关的分类 */
  resourceCategory?: PolicyResourceEnableApi_SearchPolicyEnableV2ResponseBody_resourceCategory_item[];
}

/**
 * @description 查询资源配置表开关，开关不再读资源配置模型，直接判断是否配置abac策略
 * @endpoint POST /api/v2/policy_resource_enable/search
 */
export const PolicyResourceEnableApi_searchPolicyEnableV2 = async (
  data: PolicyResourceEnableApi_SearchPolicyEnableV2RequestBody,
  options?: HttpOptions
): Promise<PolicyResourceEnableApi_SearchPolicyEnableV2ResponseBody> =>
  /**! @contract easyops.api.permission.policy_resource_enable.SearchPolicyEnableV2@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<PolicyResourceEnableApi_SearchPolicyEnableV2ResponseBody>
    >(
      "api/gateway/logic.permission/api/v2/policy_resource_enable/search",
      data,
      options
    )
  ).data;

export interface PolicyResourceEnableApi_SearchPolicyEnableV2RequestBody_resourceCategory {
  /** 一级分类 */
  name?: string;

  /** 二级分类名称，为空则搜索所有一级分类 */
  child?: string;
}

export interface PolicyResourceEnableApi_SearchPolicyEnableV2ResponseBody_list_item {
  /** 模块id */
  moduleId?: string;

  /** 模块名称 */
  moduleName?: string;

  /** 资源对象 */
  resource?: string;

  /** 资源名称 */
  resourceName?: string;

  /** 资源分类 */
  resourceCategory?: string;

  /** 策略列表 */
  policyList?: PolicyResourceEnableApi_SearchPolicyEnableV2ResponseBody_list_item_policyList_item[];
}

export interface PolicyResourceEnableApi_SearchPolicyEnableV2ResponseBody_resourceCategory_item {
  /** 一级分类 */
  name?: string;

  /** 二级分类 */
  child?: string[];

  /** 分类类型,目前只有cmdb */
  type?: string;
}

export interface PolicyResourceEnableApi_SearchPolicyEnableV2ResponseBody_list_item_policyList_item {
  /** 策略id */
  policyId?: string;

  /** 策略名称 */
  policyName?: string;
}
