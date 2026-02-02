import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface InheritanceApi_DeleteRuleResponseBody {
  /** 规则id */
  instanceId?: string;
}

/**
 * @description 删除规则
 * @endpoint DELETE /api/v1/inherit/rule/:instanceId
 */
export const InheritanceApi_deleteRule = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<InheritanceApi_DeleteRuleResponseBody> =>
  /**! @contract easyops.api.permission.inheritance.DeleteRule@1.0.0 */ (
    await http.delete<
      ResponseBodyWrapper<InheritanceApi_DeleteRuleResponseBody>
    >(
      `api/gateway/logic.permission_go_service/api/v1/inherit/rule/${instanceId}`,
      options
    )
  ).data;
