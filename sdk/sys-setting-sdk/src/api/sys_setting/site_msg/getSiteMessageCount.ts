import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface SiteMsgApi_GetSiteMessageCountResponseBody {
  /** 总数 */
  total?: number;
}

/**
 * @description 获取当前用户的站内信数量
 * @endpoint GET /api/sys_setting/v1/site_msg_count
 */
export const SiteMsgApi_getSiteMessageCount = async (
  options?: HttpOptions
): Promise<SiteMsgApi_GetSiteMessageCountResponseBody> =>
  /**! @contract easyops.api.sys_setting.site_msg.GetSiteMessageCount@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<SiteMsgApi_GetSiteMessageCountResponseBody>
    >(
      "api/gateway/sys_setting.site_msg.GetSiteMessageCount/api/sys_setting/v1/site_msg_count",
      options
    )
  ).data;
