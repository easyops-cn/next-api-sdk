import { http, HttpOptions } from "@next-core/http";
import {
  ModelPermissionSystemModule,
  ModelResourceAction,
  ModelPolicyWithRelation,
} from "../../../model/permission/index.js";

export interface PolicyApi_ImportPolicyRequestBody {
  /** 导入的系统模块 */
  importSystemModule?: Partial<ModelPermissionSystemModule>[];

  /** 导入的系统权限点 */
  importAction?: Partial<ModelResourceAction>[];

  /** 导入的系统策略 */
  importPolicy?: Partial<ModelPolicyWithRelation>[];
}

/**
 * @description 系统策略、权限点导入接口
 * @endpoint POST /api/v1/policy_validate/import
 */
export const PolicyApi_importPolicy = (
  data: PolicyApi_ImportPolicyRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.permission.policy.ImportPolicy@1.0.0 */ http.post<void>(
    "api/gateway/logic.permission/api/v1/policy_validate/import",
    data,
    options
  );
