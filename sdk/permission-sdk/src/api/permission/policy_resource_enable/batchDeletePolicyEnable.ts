import { http, HttpOptions } from "@next-core/http";

export interface PolicyResourceEnableApi_BatchDeletePolicyEnableRequestBody {
  /** 删除的id列表 */
  deleteInstanceIdList?: string[];
}

/**
 * @description 批量删除资源配置表实例
 * @endpoint POST /api/v1/policy_resource_enable/batch_delete
 */
export const PolicyResourceEnableApi_batchDeletePolicyEnable = (
  data: PolicyResourceEnableApi_BatchDeletePolicyEnableRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.permission.policy_resource_enable.BatchDeletePolicyEnable@1.0.0 */ http.post<void>(
    "api/gateway/logic.permission/api/v1/policy_resource_enable/batch_delete",
    data,
    options
  );
