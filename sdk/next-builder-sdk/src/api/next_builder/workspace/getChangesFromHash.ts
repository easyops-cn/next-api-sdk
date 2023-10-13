import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface WorkspaceApi_GetChangesFromHashRequestBody {
  /** 变更的hash值 */
  hashes: string[];
}

export interface WorkspaceApi_GetChangesFromHashResponseBody {
  /** 变更内容map, key 是 hash 值, value 是内容 */
  changes?: Record<string, any>;
}

/**
 * @description 根据Hash获取变更内容
 * @endpoint POST /api/v1/next-builder/workspace/:appId/get_changes_from_hash
 */
export const WorkspaceApi_getChangesFromHash = async (
  appId: string | number,
  data: WorkspaceApi_GetChangesFromHashRequestBody,
  options?: HttpOptions
): Promise<WorkspaceApi_GetChangesFromHashResponseBody> =>
  /**! @contract easyops.api.next_builder.workspace.GetChangesFromHash@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<WorkspaceApi_GetChangesFromHashResponseBody>
    >(
      `api/gateway/next_builder.workspace.GetChangesFromHash/api/v1/next-builder/workspace/${appId}/get_changes_from_hash`,
      data,
      options
    )
  ).data;
