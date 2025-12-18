import { http, HttpOptions } from "@next-core/http";

export interface ElevoObjectApi_BatchDeleteServiceObjectRelationsRequestParams {
  /** 要删除的关系ID列表 */
  relationIds: string[];
}

/**
 * @description 批量删除服务对象关系
 * @endpoint DELETE /api/v1/elevo/service-objects/:objectId/relations
 */
export const ElevoObjectApi_batchDeleteServiceObjectRelations = (
  objectId: string | number,
  params: ElevoObjectApi_BatchDeleteServiceObjectRelationsRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo_object.BatchDeleteServiceObjectRelations@1.0.0 */ http.delete<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/service-objects/${objectId}/relations`,
    { ...options, params }
  );
