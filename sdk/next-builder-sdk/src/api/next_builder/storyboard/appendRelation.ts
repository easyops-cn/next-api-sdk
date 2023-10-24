import { http, HttpOptions } from "@next-core/http";
import { ModelInstanceRelationRequest } from "../../../model/cmdb/index.js";

export type StoryboardApi_AppendRelationRequestBody =
  Partial<ModelInstanceRelationRequest> &
    StoryboardApi_AppendRelationRequestBody_2;

/**
 * @description 批量添加关系
 * @endpoint POST /api/v1/next-builder/app/:appId/object/:objectId/relation/:relationSideId/append
 */
export const StoryboardApi_appendRelation = (
  appId: string | number,
  objectId: string | number,
  relationSideId: string | number,
  data: StoryboardApi_AppendRelationRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.storyboard.AppendRelation@1.0.0 */ http.post<void>(
    `api/gateway/next_builder.storyboard.AppendRelation/api/v1/next-builder/app/${appId}/object/${objectId}/relation/${relationSideId}/append`,
    data,
    options
  );

export interface StoryboardApi_AppendRelationRequestBody_2 {
  /** 关系Id */
  relationId: string;

  /** 是否记录变更历史 */
  isRecordChangeHistory?: boolean;
}
