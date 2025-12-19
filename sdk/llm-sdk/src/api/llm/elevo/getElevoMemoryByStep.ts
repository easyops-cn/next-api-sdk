import { http, HttpOptions } from "@next-core/http";
import { ModelElevoMemory } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoApi_GetElevoMemoryByStepResponseBody =
  Partial<ModelElevoMemory>;

/**
 * @description 根据步骤ID获取elevo记忆
 * @endpoint GET /api/v1/elevo/memories/step/:stepId
 */
export const ElevoApi_getElevoMemoryByStep = async (
  stepId: string | number,
  options?: HttpOptions
): Promise<ElevoApi_GetElevoMemoryByStepResponseBody> =>
  /**! @contract easyops.api.llm.elevo.GetElevoMemoryByStep@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoApi_GetElevoMemoryByStepResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/memories/step/${stepId}`,
      options
    )
  ).data;
