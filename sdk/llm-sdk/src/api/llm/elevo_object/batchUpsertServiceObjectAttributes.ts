import { http, HttpOptions } from "@next-core/http";
import { ModelServiceObjectAttribute } from "../../../model/llm/index.js";

export interface ElevoObjectApi_BatchUpsertServiceObjectAttributesRequestBody {
  /** 属性列表（存在则更新，不存在则创建） */
  attributes: Partial<ModelServiceObjectAttribute>[];
}

/**
 * @description 批量添加或更新服务对象属性
 * @endpoint PUT /api/v1/elevo/service-objects/:objectId/attributes
 */
export const ElevoObjectApi_batchUpsertServiceObjectAttributes = (
  objectId: string | number,
  data: ElevoObjectApi_BatchUpsertServiceObjectAttributesRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo_object.BatchUpsertServiceObjectAttributes@1.0.0 */ http.put<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/service-objects/${objectId}/attributes`,
    data,
    options
  );
