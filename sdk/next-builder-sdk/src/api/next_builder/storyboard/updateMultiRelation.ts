import { http, HttpOptions } from "@next-core/http";

export interface StoryboardApi_UpdateMultiRelationRequestBody {
  /** 关系列表值 */
  list?: StoryboardApi_UpdateMultiRelationRequestBody_list_item[];
}

/**
 * @description 更新多个实例关系(可更新关系属性值)
 * @endpoint PUT /api/v1/next-builder/app/:appId/:relationId/relation_instance
 */
export const StoryboardApi_updateMultiRelation = (
  appId: string | number,
  relationId: string | number,
  data: StoryboardApi_UpdateMultiRelationRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.storyboard.UpdateMultiRelation@1.0.0 */ http.put<void>(
    `api/gateway/next_builder.storyboard.UpdateMultiRelation/api/v1/next-builder/app/${appId}/${relationId}/relation_instance`,
    data,
    options
  );

export interface StoryboardApi_UpdateMultiRelationRequestBody_list_item {
  /** 左边实例id */
  leftInstanceId?: string;

  /** 右边实例id */
  rightInstanceId?: string;

  /** 关系属性值 */
  properties?: Record<string, any>;
}
