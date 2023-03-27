import { http, HttpOptions } from "@next-core/http";
import {
  ModelLaunchpadSettings,
  ModelLaunchpadDesktop,
  ModelLaunchpadStoryboard,
  ModelLaunchpadSiteMap,
} from "../../../model/micro_app_standalone/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface LaunchpadApi_GetLaunchpadInfoRequestParams {
  /** 指定查询storyboard下的app字段，不指定则默认返回 appId,name,position,homepage,menuIcon,icons */
  appFields?: string;
}

export interface LaunchpadApi_GetLaunchpadInfoResponseBody {
  /** 配置 */
  settings?: Partial<ModelLaunchpadSettings>;

  /** 桌面列表 */
  desktops?: Partial<ModelLaunchpadDesktop>[];

  /** storyboards */
  storyboards?: Partial<ModelLaunchpadStoryboard>[];

  /** 系统地图 */
  siteSort?: Partial<ModelLaunchpadSiteMap>[];
}

/**
 * @description Launchpad信息
 * @endpoint GET /api/v1/micro_app_standalone/launchpad_info
 */
export const LaunchpadApi_getLaunchpadInfo = async (
  params: LaunchpadApi_GetLaunchpadInfoRequestParams,
  options?: HttpOptions
): Promise<LaunchpadApi_GetLaunchpadInfoResponseBody> =>
  /**! @contract easyops.api.micro_app_standalone.launchpad.GetLaunchpadInfo@1.1.0 */ (
    await http.get<
      ResponseBodyWrapper<LaunchpadApi_GetLaunchpadInfoResponseBody>
    >(
      "api/gateway/micro_app_standalone.launchpad.GetLaunchpadInfo/api/v1/micro_app_standalone/launchpad_info",
      { ...options, params }
    )
  ).data;
