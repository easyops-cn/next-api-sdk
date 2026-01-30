import { http, HttpOptions } from "@next-core/http";
import { ModelPermissionMenu } from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type MenuApi_GetPermissionMenuDetailResponseBody =
  Partial<ModelPermissionMenu>;

/**
 * @description 获取菜单详情
 * @endpoint GET /api/v1/permission/menu/:menu_id
 */
export const MenuApi_getPermissionMenuDetail = async (
  menu_id: string | number,
  options?: HttpOptions
): Promise<MenuApi_GetPermissionMenuDetailResponseBody> =>
  /**! @contract easyops.api.permission.menu.GetPermissionMenuDetail@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<MenuApi_GetPermissionMenuDetailResponseBody>
    >(`api/gateway/logic.permission/api/v1/permission/menu/${menu_id}`, options)
  ).data;
