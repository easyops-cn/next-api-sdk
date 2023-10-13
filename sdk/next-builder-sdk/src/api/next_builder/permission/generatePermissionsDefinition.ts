import { http, HttpOptions } from "@next-core/http";
import { ModelPermission } from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface PermissionApi_GeneratePermissionsDefinitionResponseBody {
  /** 权限点列表 */
  permissionList?: Partial<ModelPermission>[];
}

/**
 * @description 由模型定义生成PermissionsDefinition
 * @endpoint GET /api/v1/permissions/generate_permissions_definition/:instanceId
 */
export const PermissionApi_generatePermissionsDefinition = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<PermissionApi_GeneratePermissionsDefinitionResponseBody> =>
  /**! @contract easyops.api.next_builder.permission.GeneratePermissionsDefinition@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<PermissionApi_GeneratePermissionsDefinitionResponseBody>
    >(
      `api/gateway/next_builder.permission.GeneratePermissionsDefinition/api/v1/permissions/generate_permissions_definition/${instanceId}`,
      options
    )
  ).data;
