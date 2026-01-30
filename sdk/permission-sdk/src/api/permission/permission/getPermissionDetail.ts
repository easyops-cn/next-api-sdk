import { http, HttpOptions } from "@next-core/http";
import { ModelPermission } from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface PermissionApi_GetPermissionDetailResponseBody {
  /** 数据 */
  data?: Partial<ModelPermission>;
}

/**
 * @description 获取权限点详情信息
 * @endpoint GET /api/v1/permission/:id
 */
export const PermissionApi_getPermissionDetail = async (
  id: string | number,
  options?: HttpOptions
): Promise<PermissionApi_GetPermissionDetailResponseBody> =>
  /**! @contract easyops.api.permission.permission.GetPermissionDetail@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<PermissionApi_GetPermissionDetailResponseBody>
    >(`api/gateway/logic.permission/api/v1/permission/${id}`, options)
  ).data;
