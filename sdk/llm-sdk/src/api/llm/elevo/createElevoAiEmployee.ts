import { http, HttpOptions } from "@next-core/http";
import { ModelElevoAiEmployee } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoApi_CreateElevoAiEmployeeRequestBody =
  Partial<ModelElevoAiEmployee>;

export type ElevoApi_CreateElevoAiEmployeeResponseBody =
  Partial<ModelElevoAiEmployee>;

/**
 * @description 创建elevo数字人
 * @endpoint POST /api/v1/elevo/ai-employees
 */
export const ElevoApi_createElevoAiEmployee = async (
  data: ElevoApi_CreateElevoAiEmployeeRequestBody,
  options?: HttpOptions
): Promise<ElevoApi_CreateElevoAiEmployeeResponseBody> =>
  /**! @contract easyops.api.llm.elevo.CreateElevoAiEmployee@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoApi_CreateElevoAiEmployeeResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/elevo/ai-employees",
      data,
      options
    )
  ).data;
