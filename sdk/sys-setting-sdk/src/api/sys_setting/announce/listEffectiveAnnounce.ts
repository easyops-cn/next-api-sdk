import { http, HttpOptions } from "@next-core/http";
import { ModelSysAnnounce } from "../../../model/sys_setting/index.js";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper.js";

export interface AnnounceApi_ListEffectiveAnnounceRequestParams {
  /** 页码 */
  page?: number;

  /** 每页数据量 */
  pageSize?: number;
}

export type AnnounceApi_ListEffectiveAnnounceResponseItem =
  Partial<ModelSysAnnounce>;

export type AnnounceApi_ListEffectiveAnnounceResponseBody =
  ResponseListWrapper<AnnounceApi_ListEffectiveAnnounceResponseItem>;

/**
 * @description 查找当前用户的有效公告
 * @endpoint LIST /api/sys_setting/v1/announce/effective
 */
export const AnnounceApi_listEffectiveAnnounce = async (
  params: AnnounceApi_ListEffectiveAnnounceRequestParams,
  options?: HttpOptions
): Promise<AnnounceApi_ListEffectiveAnnounceResponseBody> =>
  /**! @contract easyops.api.sys_setting.announce.ListEffectiveAnnounce@1.0.1 */ (
    await http.get<
      ResponseBodyWrapper<AnnounceApi_ListEffectiveAnnounceResponseBody>
    >(
      "api/gateway/sys_setting.announce.ListEffectiveAnnounce/api/sys_setting/v1/announce/effective",
      { ...options, params }
    )
  ).data;
