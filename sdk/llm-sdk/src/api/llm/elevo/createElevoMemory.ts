import { http, HttpOptions } from "@next-core/http";
import { ModelElevoMemory } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoApi_CreateElevoMemoryRequestBody = Partial<ModelElevoMemory>;

export type ElevoApi_CreateElevoMemoryResponseBody = Partial<ModelElevoMemory>;

/**
 * @description 创建elevo记忆
 * @endpoint POST /api/v1/elevo/memories
 */
export const ElevoApi_createElevoMemory = async (
  data: ElevoApi_CreateElevoMemoryRequestBody,
  options?: HttpOptions
): Promise<ElevoApi_CreateElevoMemoryResponseBody> =>
  /**! @contract easyops.api.llm.elevo.CreateElevoMemory@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoApi_CreateElevoMemoryResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/elevo/memories",
      data,
      options
    )
  ).data;
