import { http, HttpOptions } from "@next-core/http";
import { ModelPermissionSystemModule } from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type PermissionSystemModuleApi_GetPermissionSystemModuleResponseBody =
  Partial<ModelPermissionSystemModule> &
    PermissionSystemModuleApi_GetPermissionSystemModuleResponseBody_2;

/**
 * @description 获取系统模块详情
 * @endpoint GET /api/v1/policy_system_module/:id
 */
export const PermissionSystemModuleApi_getPermissionSystemModule = async (
  id: string | number,
  options?: HttpOptions
): Promise<PermissionSystemModuleApi_GetPermissionSystemModuleResponseBody> =>
  /**! @contract easyops.api.permission.permission_system_module.GetPermissionSystemModule@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<PermissionSystemModuleApi_GetPermissionSystemModuleResponseBody>
    >(`api/gateway/logic.permission/api/v1/policy_system_module/${id}`, options)
  ).data;

export interface PermissionSystemModuleApi_GetPermissionSystemModuleResponseBody_2 {
  /** 模块关联的权限点的资源对象集合统计 */
  relationResource?: string[];
}
