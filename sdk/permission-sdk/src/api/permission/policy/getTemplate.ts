import { http, HttpOptions } from "@next-core/http";
import { ModelPolicyTemplateGroupByResource } from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

/** 返回权限策略模板 */
export type PolicyApi_GetTemplateResponseBody =
  Partial<ModelPolicyTemplateGroupByResource>;

/**
 * @description 获取权限策略模板
 * @endpoint GET /api/v1/policy/template/:instanceId
 */
export const PolicyApi_getTemplate = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<PolicyApi_GetTemplateResponseBody> =>
  /**! @contract easyops.api.permission.policy.GetTemplate@1.0.0 */ (
    await http.get<ResponseBodyWrapper<PolicyApi_GetTemplateResponseBody>>(
      `api/gateway/logic.permission/api/v1/policy/template/${instanceId}`,
      options
    )
  ).data;
