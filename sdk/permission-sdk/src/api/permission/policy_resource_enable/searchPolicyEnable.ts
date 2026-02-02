import { http, HttpOptions } from "@next-core/http";
import { ModelPermissionResourceEnable } from "../../../model/permission/index.js";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper.js";

export interface PolicyResourceEnableApi_SearchPolicyEnableRequestParams {
  /** 模块id精确查询条件 */
  moduleId?: string;

  /** 资源模糊查询条件 */
  resourceLike?: string;

  /** page */
  page: number;

  /** page_size */
  pageSize: number;
}

export type PolicyResourceEnableApi_SearchPolicyEnableResponseItem =
  Partial<ModelPermissionResourceEnable>;

export type PolicyResourceEnableApi_SearchPolicyEnableResponseBody =
  ResponseListWrapper<PolicyResourceEnableApi_SearchPolicyEnableResponseItem>;

/**
 * @description 查询资源配置表实例
 * @endpoint LIST /api/v1/policy_resource_enable/search
 */
export const PolicyResourceEnableApi_searchPolicyEnable = async (
  params: PolicyResourceEnableApi_SearchPolicyEnableRequestParams,
  options?: HttpOptions
): Promise<PolicyResourceEnableApi_SearchPolicyEnableResponseBody> =>
  /**! @contract easyops.api.permission.policy_resource_enable.SearchPolicyEnable@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<PolicyResourceEnableApi_SearchPolicyEnableResponseBody>
    >("api/gateway/logic.permission/api/v1/policy_resource_enable/search", {
      ...options,
      params,
    })
  ).data;
