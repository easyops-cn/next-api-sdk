import { http, HttpOptions } from "@next-core/http";
import {
  ModelServiceObjectRelation,
  ModelServiceObject,
  ModelServiceFlow,
} from "../../../model/llm/index.js";

export interface ElevoSpaceApi_ImportSpaceSchemaRequestBody {
  /** 业务对象定义列表 */
  businessObjects?: ElevoSpaceApi_ImportSpaceSchemaRequestBody_businessObjects_item[];

  /** 业务对象关系定义列表 */
  objectRelations?: Partial<ModelServiceObjectRelation>[];

  /** 业务流定义列表 */
  businessFlows?: ElevoSpaceApi_ImportSpaceSchemaRequestBody_businessFlows_item[];

  /** 需删除的业务对象ID数组 */
  deleteObjects?: string[];

  /** 需删除的关系名称数组 */
  deleteRelations?: string[];

  /** 需删除的业务流名称数组 */
  deleteFlows?: string[];
}

/**
 * @description 导入协作空间模式定义（业务对象、关系、业务流）
 * @endpoint POST /api/v1/elevo/spaces/:spaceId/import
 */
export const ElevoSpaceApi_importSpaceSchema = (
  spaceId: string | number,
  data: ElevoSpaceApi_ImportSpaceSchemaRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo_space.ImportSpaceSchema@1.0.0 */ http.post<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/spaces/${spaceId}/import`,
    data,
    options
  );

export interface ElevoSpaceApi_ImportSpaceSchemaRequestBody_businessObjects_item {
  /** CMDB模型ID（带命名空间） */
  objectId?: string;

  /** 服务对象名称 */
  objectName?: string;

  /** 服务对象描述 */
  description?: string;

  /** 字段定义列表 */
  attributes?: ModelServiceObject["attributes"];

  /** 生命周期定义（mermaid graph格式） */
  lifecycle?: string;
}

export interface ElevoSpaceApi_ImportSpaceSchemaRequestBody_businessFlows_item {
  /** 业务流名称 */
  name?: string;

  /** 业务流描述 */
  description?: string;

  /** 前置条件 */
  prerequisite?: string;

  /** 业务流配置 */
  spec?: ModelServiceFlow["spec"];

  /** 是否需求确认执行 */
  needConfirm?: boolean;
}
