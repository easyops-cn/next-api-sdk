import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface PolicyResourceEnableApi_CreatePolicyEnableRequestBody {
  /** 模块id */
  moduleId?: string;

  /** 模块名称 */
  moduleName?: string;

  /** 资源对象列表 */
  resourceList?: string[];
}

export interface PolicyResourceEnableApi_CreatePolicyEnableResponseBody {
  /** 创建数量 */
  createCount?: number;
}

/**
 * @description 创建资源配置表实例
 * @endpoint POST /api/v1/policy_resource_enable
 */
export const PolicyResourceEnableApi_createPolicyEnable = async (
  data: PolicyResourceEnableApi_CreatePolicyEnableRequestBody,
  options?: HttpOptions
): Promise<PolicyResourceEnableApi_CreatePolicyEnableResponseBody> =>
  /**! @contract easyops.api.permission.policy_resource_enable.CreatePolicyEnable@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<PolicyResourceEnableApi_CreatePolicyEnableResponseBody>
    >(
      "api/gateway/logic.permission/api/v1/policy_resource_enable",
      data,
      options
    )
  ).data;
