import { http, HttpOptions } from "@next-core/http";

/**
 * @description redo operation of workspace
 * @endpoint POST /api/v1/next-builder/git/:appId/redo
 */
export const WorkspaceApi_redo = (
  appId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.workspace.Redo@1.0.0 */ http.post<void>(
    `api/gateway/next_builder.workspace.Redo/api/v1/next-builder/git/${appId}/redo`,
    undefined,
    options
  );
