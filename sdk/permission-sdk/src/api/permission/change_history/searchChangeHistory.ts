import { http, HttpOptions } from "@next-core/http";
import { ModelPermissionChangeHistoryData } from "../../../model/permission/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ChangeHistoryApi_SearchChangeHistoryRequestParams {
  /** 查询数量 */
  limit: number;

  /** 查询的业务唯一值 */
  name?: string;

  /** 变更记录类型 */
  objectId: "PERMISSION_POLICY@ONEMODEL";

  /** 起始时间戳 */
  startTime: number;

  /** 操作用戶 */
  user?: string;

  /** 操作類型 */
  event?:
    | "event.policy.create"
    | "event.policy.modify"
    | "event.policy.delete"
    | "event.policy.modify_role";

  /** 结束时间戳 */
  endTime: number;

  /** 分页token */
  token?: string;
}

export interface ChangeHistoryApi_SearchChangeHistoryResponseBody {
  /** 变更列表 */
  list?: Partial<ModelPermissionChangeHistoryData>[];

  /** 分页token */
  token?: string;
}

/**
 * @description 查询permission变更记录
 * @endpoint GET /api/v1/change_history/search
 */
export const ChangeHistoryApi_searchChangeHistory = async (
  params: ChangeHistoryApi_SearchChangeHistoryRequestParams,
  options?: HttpOptions
): Promise<ChangeHistoryApi_SearchChangeHistoryResponseBody> =>
  /**! @contract easyops.api.permission.change_history.SearchChangeHistory@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ChangeHistoryApi_SearchChangeHistoryResponseBody>
    >("api/gateway/logic.permission/api/v1/change_history/search", {
      ...options,
      params,
    })
  ).data;
