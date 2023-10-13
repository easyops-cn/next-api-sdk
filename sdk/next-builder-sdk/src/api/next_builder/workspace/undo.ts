import { http, HttpOptions } from "@next-core/http";

/**
 * @description undo operation of workspace
 * @endpoint POST /api/v1/next-builder/git/:appId/undo
 */
export const WorkspaceApi_undo = (
  appId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.workspace.Undo@1.0.0 */ http.post<void>(
    `api/gateway/next_builder.workspace.Undo/api/v1/next-builder/git/${appId}/undo`,
    undefined,
    options
  );
