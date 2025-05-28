import { http, HttpOptions } from "@next-core/http";
import { ModelAppApplicationDetail } from "../../../model/micro_app_standalone/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface OpenPlatformApi_GetAppLaunchpadConfigResponseBody {
  /** Launchpad Config */
  launchpadConfig?: ModelAppApplicationDetail["launchpadConfig"];
}

/**
 * @description 获取app的launchpad信息
 * @endpoint GET /api/v1/micro_app/:appId/launchpad_info
 */
export const OpenPlatformApi_getAppLaunchpadConfig = async (
  appId: string | number,
  options?: HttpOptions
): Promise<OpenPlatformApi_GetAppLaunchpadConfigResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.open_platform.GetAppLaunchpadConfig@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<OpenPlatformApi_GetAppLaunchpadConfigResponseBody>
    >(
      `api/gateway/logic.micro_app_standalone_service/api/v1/micro_app/${appId}/launchpad_info`,
      options
    )
  ).data;
