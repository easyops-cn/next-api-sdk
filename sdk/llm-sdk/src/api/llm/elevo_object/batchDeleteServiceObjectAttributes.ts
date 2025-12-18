import { http, HttpOptions } from "@next-core/http";

export interface ElevoObjectApi_BatchDeleteServiceObjectAttributesRequestParams {
  /** 要删除的属性ID列表 */
  attributeIds: string[];
}

/**
 * @description 批量删除服务对象属性
 * @endpoint DELETE /api/v1/elevo/service-objects/:objectId/attributes
 */
export const ElevoObjectApi_batchDeleteServiceObjectAttributes = (
  objectId: string | number,
  params: ElevoObjectApi_BatchDeleteServiceObjectAttributesRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo_object.BatchDeleteServiceObjectAttributes@1.0.0 */ http.delete<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/service-objects/${objectId}/attributes`,
    { ...options, params }
  );
