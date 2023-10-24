import { http, HttpOptions } from "@next-core/http";

export interface WorkspaceApi_RollbackRequestBody {
  /** 变更时间戳 */
  ts: number;
}

/**
 * @description rollback of workspace
 * @endpoint POST /api/v1/next-builder/workspace/:appId/rollback
 */
export const WorkspaceApi_rollback = (
  appId: string | number,
  data: WorkspaceApi_RollbackRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.workspace.Rollback@1.0.0 */ http.post<void>(
    `api/gateway/next_builder.workspace.Rollback/api/v1/next-builder/workspace/${appId}/rollback`,
    data,
    options
  );
