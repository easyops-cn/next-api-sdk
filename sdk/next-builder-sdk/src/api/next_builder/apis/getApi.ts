import { http, HttpOptions } from "@next-core/http";
import { ModelMicroappapiorchestration } from "../../../model/micro_app/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ApisApi_GetApiRequestParams {
  /** projectId */
  projectId?: string;
}

export interface ApisApi_GetApiResponseBody {
  /** api列表 */
  apis?: Partial<ModelMicroappapiorchestration>[];
}

/**
 * @description 获取开发环境的api编排信息。
 * @endpoint GET /api/v1/api/get
 */
export const ApisApi_getApi = async (
  params: ApisApi_GetApiRequestParams,
  options?: HttpOptions
): Promise<ApisApi_GetApiResponseBody> =>
  /**! @contract easyops.api.next_builder.apis.GetApi@1.0.0 */ (
    await http.get<ResponseBodyWrapper<ApisApi_GetApiResponseBody>>(
      "api/gateway/next_builder.apis.GetApi/api/v1/api/get",
      { ...options, params }
    )
  ).data;
