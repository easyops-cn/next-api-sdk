import { http, HttpOptions } from "@next-core/http";
import { ModelCmdbObject } from "../../../model/cmdb/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ModelApi_ModelCenterGenerateModelsDefinitionRequestBody {
  /** 模型instanceId */
  instanceIds: string[];

  /** 只包含发布模型 */
  onlyReleased?: boolean;
}

export interface ModelApi_ModelCenterGenerateModelsDefinitionResponseBody {
  /** 模型列表 */
  objectList?: Partial<ModelCmdbObject>[];
}

/**
 * @description ModelCenter由模型定义生成ModelsDefinition
 * @endpoint POST /api/v1/model-center/generate-models-definition
 */
export const ModelApi_modelCenterGenerateModelsDefinition = async (
  data: ModelApi_ModelCenterGenerateModelsDefinitionRequestBody,
  options?: HttpOptions
): Promise<ModelApi_ModelCenterGenerateModelsDefinitionResponseBody> =>
  /**! @contract easyops.api.next_builder.model.ModelCenterGenerateModelsDefinition@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ModelApi_ModelCenterGenerateModelsDefinitionResponseBody>
    >(
      "api/gateway/next_builder.model.ModelCenterGenerateModelsDefinition/api/v1/model-center/generate-models-definition",
      data,
      options
    )
  ).data;
