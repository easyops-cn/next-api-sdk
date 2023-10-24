import { http, HttpOptions } from "@next-core/http";

export interface StoryboardApi_DeleteStoryboardNodeRequestParams {
  /** 是否记录变更历史 */
  isRecordChangeHistory?: boolean;
}

/**
 * @description storyboard节点删除
 * @endpoint DELETE /api/v1/nextBuilder/storyboard/:nodeId
 */
export const StoryboardApi_deleteStoryboardNode = (
  nodeId: string | number,
  params: StoryboardApi_DeleteStoryboardNodeRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.storyboard.DeleteStoryboardNode@1.0.0 */ http.delete<void>(
    `api/gateway/next_builder.storyboard.DeleteStoryboardNode/api/v1/nextBuilder/storyboard/${nodeId}`,
    { ...options, params }
  );
