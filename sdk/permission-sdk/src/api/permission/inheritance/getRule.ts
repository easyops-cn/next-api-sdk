import { http, HttpOptions } from "@next-core/http";
import { ModelInheritRule } from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type InheritanceApi_GetRuleResponseBody = Partial<ModelInheritRule>;

/**
 * @description 获取规则
 * @endpoint GET /api/v1/inherit/rule/:instanceId
 */
export const InheritanceApi_getRule = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<InheritanceApi_GetRuleResponseBody> =>
  /**! @contract easyops.api.permission.inheritance.GetRule@1.1.0 */ (
    await http.get<ResponseBodyWrapper<InheritanceApi_GetRuleResponseBody>>(
      `api/gateway/logic.permission_go_service/api/v1/inherit/rule/${instanceId}`,
      options
    )
  ).data;
