import { http, HttpOptions } from "@next-core/http";
import { ModelServiceObjectRelation } from "../../../model/llm/index.js";

export interface ElevoObjectApi_BatchUpsertServiceObjectRelationsRequestBody {
  /** 关系列表（存在则更新，不存在则创建） */
  relations: Partial<ModelServiceObjectRelation>[];
}

/**
 * @description 批量添加或更新服务对象关系
 * @endpoint PUT /api/v1/elevo/service-objects/relations
 */
export const ElevoObjectApi_batchUpsertServiceObjectRelations = (
  data: ElevoObjectApi_BatchUpsertServiceObjectRelationsRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo_object.BatchUpsertServiceObjectRelations@1.0.0 */ http.put<void>(
    "api/gateway/logic.llm.aiops_service/api/v1/elevo/service-objects/relations",
    data,
    options
  );
