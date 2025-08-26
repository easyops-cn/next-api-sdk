import { http, HttpOptions } from "@next-core/http";
import { ModelElevoAiEmployee } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoApi_UpdateElevoAiEmployeeRequestBody =
  Partial<ModelElevoAiEmployee>;

export type ElevoApi_UpdateElevoAiEmployeeResponseBody =
  Partial<ModelElevoAiEmployee>;

/**
 * @description 更新elevo数字人
 * @endpoint PUT /api/v1/elevo/ai-employees/:instanceId
 */
export const ElevoApi_updateElevoAiEmployee = async (
  instanceId: string | number,
  data: ElevoApi_UpdateElevoAiEmployeeRequestBody,
  options?: HttpOptions
): Promise<ElevoApi_UpdateElevoAiEmployeeResponseBody> =>
  /**! @contract easyops.api.llm.elevo.UpdateElevoAiEmployee@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<ElevoApi_UpdateElevoAiEmployeeResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/ai-employees/${instanceId}`,
      data,
      options
    )
  ).data;
