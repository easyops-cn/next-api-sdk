import { http, HttpOptions } from "@next-core/http";

/**
 * @description 标记所有消息已读
 * @endpoint PUT /api/sys_setting/v1/site_msg
 */
export const SiteMsgApi_markAllSiteMessageRead = (
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.sys_setting.site_msg.MarkAllSiteMessageRead@1.0.0 */ http.put<void>(
    "api/gateway/sys_setting.site_msg.MarkAllSiteMessageRead/api/sys_setting/v1/site_msg",
    undefined,
    options
  );
