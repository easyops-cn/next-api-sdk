import { http, HttpOptions } from "@next-core/http";
import { ModelPolicyTemplateGroupByResource } from "../../../model/permission/index.js";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper.js";

export interface PolicyApi_SearchTemplateRequestParams {
  /** page */
  page?: number;

  /** page_size */
  pageSize?: number;

  /** 策略名模糊查询，和其他查询条件共存时与关系 */
  likeName?: string;

  /** 备注模糊查询，和其他查询条件共存时与关系 */
  likeMemo?: string;
}

/** 返回权限策略模板列表 */
export type PolicyApi_SearchTemplateResponseItem =
  Partial<ModelPolicyTemplateGroupByResource>;

export type PolicyApi_SearchTemplateResponseBody =
  ResponseListWrapper<PolicyApi_SearchTemplateResponseItem>;

/**
 * @description 搜索权限策略模板
 * @endpoint LIST /api/v1/policy/search/template
 */
export const PolicyApi_searchTemplate = async (
  params: PolicyApi_SearchTemplateRequestParams,
  options?: HttpOptions
): Promise<PolicyApi_SearchTemplateResponseBody> =>
  /**! @contract easyops.api.permission.policy.SearchTemplate@1.0.0 */ (
    await http.get<ResponseBodyWrapper<PolicyApi_SearchTemplateResponseBody>>(
      "api/gateway/logic.permission/api/v1/policy/search/template",
      { ...options, params }
    )
  ).data;
