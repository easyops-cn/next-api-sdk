import { http, HttpOptions } from "@next-core/http";
import { ModelInstanceRelationRequest } from "../../../model/cmdb/index.js";

export type StoryboardApi_RemoveRelationRequestBody =
  Partial<ModelInstanceRelationRequest> &
    StoryboardApi_RemoveRelationRequestBody_2;

/**
 * @description 批量移除关系
 * @endpoint POST /api/v1/next-builder/app/:appId/object/:objectId/relation/:relationSideId/remove
 */
export const StoryboardApi_removeRelation = (
  appId: string | number,
  objectId: string | number,
  relationSideId: string | number,
  data: StoryboardApi_RemoveRelationRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.storyboard.RemoveRelation@1.1.0 */ http.post<void>(
    `api/gateway/next_builder.storyboard.RemoveRelation/api/v1/next-builder/app/${appId}/object/${objectId}/relation/${relationSideId}/remove`,
    data,
    options
  );

export interface StoryboardApi_RemoveRelationRequestBody_2 {
  /** 关系Id */
  relationId: string;

  /** 是否记录变更历史 */
  isRecordChangeHistory?: boolean;
}
