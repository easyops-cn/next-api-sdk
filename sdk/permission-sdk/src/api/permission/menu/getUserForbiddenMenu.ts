import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface MenuApi_GetUserForbiddenMenuResponseBody {
  /** 不可见菜单列表 */
  forbidden_menu?: string[];
}

/**
 * @description 获取用户的不可访问菜单列表
 * @endpoint GET /api/v1/permission/menu/forbidden/:username
 */
export const MenuApi_getUserForbiddenMenu = async (
  username: string | number,
  options?: HttpOptions
): Promise<MenuApi_GetUserForbiddenMenuResponseBody> =>
  /**! @contract easyops.api.permission.menu.GetUserForbiddenMenu@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<MenuApi_GetUserForbiddenMenuResponseBody>
    >(
      `api/gateway/logic.permission/api/v1/permission/menu/forbidden/${username}`,
      options
    )
  ).data;
