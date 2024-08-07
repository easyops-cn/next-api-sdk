import { http, HttpOptions } from "@next-core/http";

/**
 * @description 批量删除通知公告
 * @endpoint DELETE /api/sys_setting/v1/announce/:instanceIds
 */
export const AnnounceApi_deleteAnnounce = (
  instanceIds: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.sys_setting.announce.DeleteAnnounce@1.0.1 */ http.delete<void>(
    `api/gateway/sys_setting.announce.DeleteAnnounce/api/sys_setting/v1/announce/${instanceIds}`,
    options
  );
