import { http, HttpOptions } from "@next-core/http";
import { ModelPermissionChangeHistoryData } from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

/** 返回的变更记录 */
export type ChangeHistoryApi_GetChangeHistoryDetailResponseBody =
  Partial<ModelPermissionChangeHistoryData>;

/**
 * @description 获取permission变更记录详情
 * @endpoint GET /api/v1/change_history/:id
 */
export const ChangeHistoryApi_getChangeHistoryDetail = async (
  id: string | number,
  options?: HttpOptions
): Promise<ChangeHistoryApi_GetChangeHistoryDetailResponseBody> =>
  /**! @contract easyops.api.permission.change_history.GetChangeHistoryDetail@1.1.0 */ (
    await http.get<
      ResponseBodyWrapper<ChangeHistoryApi_GetChangeHistoryDetailResponseBody>
    >(`api/gateway/logic.permission/api/v1/change_history/${id}`, options)
  ).data;
