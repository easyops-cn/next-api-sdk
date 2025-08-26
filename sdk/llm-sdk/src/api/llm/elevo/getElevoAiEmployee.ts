import { http, HttpOptions } from "@next-core/http";
import { ModelElevoAiEmployee } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoApi_GetElevoAiEmployeeResponseBody =
  Partial<ModelElevoAiEmployee>;

/**
 * @description 获取elevo数字人详情
 * @endpoint GET /api/v1/elevo/ai-employees/:instanceId
 */
export const ElevoApi_getElevoAiEmployee = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<ElevoApi_GetElevoAiEmployeeResponseBody> =>
  /**! @contract easyops.api.llm.elevo.GetElevoAiEmployee@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoApi_GetElevoAiEmployeeResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/ai-employees/${instanceId}`,
      options
    )
  ).data;
