import { http, HttpOptions } from "@next-core/http";
import { ModelCmdbObject } from "../../../model/cmdb/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ModelApi_GenerateModelsDefinitionRequestParams {
  /** projectId */
  projectId?: string;
}

export interface ModelApi_GenerateModelsDefinitionResponseBody {
  /** projectId */
  projectId?: string;

  /** 模型列表 */
  objectList?: Partial<ModelCmdbObject>[];
}

/**
 * @description 由模型定义生成ModelsDefinition
 * @endpoint GET /api/v1/model/generate_models_definition
 */
export const ModelApi_generateModelsDefinition = async (
  params: ModelApi_GenerateModelsDefinitionRequestParams,
  options?: HttpOptions
): Promise<ModelApi_GenerateModelsDefinitionResponseBody> =>
  /**! @contract easyops.api.next_builder.model.GenerateModelsDefinition@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ModelApi_GenerateModelsDefinitionResponseBody>
    >(
      "api/gateway/next_builder.model.GenerateModelsDefinition/api/v1/model/generate_models_definition",
      { ...options, params }
    )
  ).data;
