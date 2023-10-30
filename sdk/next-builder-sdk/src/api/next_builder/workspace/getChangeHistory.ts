import { http, HttpOptions } from "@next-core/http";
import { ModelWorkspaceChangeHistory } from "../../../model/next_builder/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface WorkspaceApi_GetChangeHistoryRequestParams {
  /** 时间戳, 返回比这时间戳更早的变更历史, '' 则表示从最新的变更开始查询 */
  ts?: string;

  /** 最大返回条目数 */
  limit?: number;
}

export interface WorkspaceApi_GetChangeHistoryResponseBody {
  /** 最后一条变更历史的时间戳，可用作下一次查询 */
  ts?: string;

  /** 变更历史列表 */
  list?: Partial<ModelWorkspaceChangeHistory>[];
}

/**
 * @description 获取变更历史（从上一次commit开始）
 * @endpoint GET /api/v1/next-builder/workspace/:appId/changes
 */
export const WorkspaceApi_getChangeHistory = async (
  appId: string | number,
  params: WorkspaceApi_GetChangeHistoryRequestParams,
  options?: HttpOptions
): Promise<WorkspaceApi_GetChangeHistoryResponseBody> =>
  /**! @contract easyops.api.next_builder.workspace.GetChangeHistory@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<WorkspaceApi_GetChangeHistoryResponseBody>
    >(
      `api/gateway/next_builder.workspace.GetChangeHistory/api/v1/next-builder/workspace/${appId}/changes`,
      { ...options, params }
    )
  ).data;
