import { http, HttpOptions } from "@next-core/http";
import { ModelLaunchpadDesktop } from "../../../model/micro_app_standalone/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface LaunchpadApi_GetLaunchpadConfigResponseBody {
  /** 导航菜单列表 */
  desktops?: Partial<ModelLaunchpadDesktop>[];
}

/**
 * @description Launchpad 配置信息
 * @endpoint GET /api/v1/micro_app_standalone/launchpad_config
 */
export const LaunchpadApi_getLaunchpadConfig = async (
  options?: HttpOptions
): Promise<LaunchpadApi_GetLaunchpadConfigResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.launchpad.GetLaunchpadConfig@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<LaunchpadApi_GetLaunchpadConfigResponseBody>
    >(
      "api/gateway/micro_app_standalone.launchpad.GetLaunchpadConfig/api/v1/micro_app_standalone/launchpad_config",
      options
    )
  ).data;
