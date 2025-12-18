import { http, HttpOptions } from "@next-core/http";
import {
  ModelServiceObject,
  ModelServiceObjectRelation,
  ModelServiceFlow,
} from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

/** 协作空间模式信息 */
export interface ElevoSpaceApi_GetSpaceSchemaResponseBody {
  /** 业务对象列表，其中的objectId作为唯一项 */
  businessObjects?: Partial<ModelServiceObject>[];

  /** 业务对象关系列表，其中的name作为唯一项 */
  objectRelations?: Partial<ModelServiceObjectRelation>[];

  /** 业务流列表，其中的name作为唯一项 */
  businessFlows?: Partial<ModelServiceFlow>[];
}

/**
 * @description 获取协作空间的模式定义（业务对象、关系、业务流）
 * @endpoint GET /api/v1/elevo/spaces/:spaceId/schema
 */
export const ElevoSpaceApi_getSpaceSchema = async (
  spaceId: string | number,
  options?: HttpOptions
): Promise<ElevoSpaceApi_GetSpaceSchemaResponseBody> =>
  /**! @contract easyops.api.llm.elevo_space.GetSpaceSchema@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoSpaceApi_GetSpaceSchemaResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/spaces/${spaceId}/schema`,
      options
    )
  ).data;
