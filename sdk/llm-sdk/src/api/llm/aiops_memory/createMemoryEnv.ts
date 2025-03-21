import { http, HttpOptions } from "@next-core/http";
import { ModelLlmMemoryEnv } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type AiopsMemoryApi_CreateMemoryEnvRequestBody =
  Partial<ModelLlmMemoryEnv>;

export type AiopsMemoryApi_CreateMemoryEnvResponseBody =
  Partial<ModelLlmMemoryEnv>;

/**
 * @description 创建大模型记忆的调试环境
 * @endpoint POST /api/v1/llm/aiops_service/memory/env/create
 */
export const AiopsMemoryApi_createMemoryEnv = async (
  data: AiopsMemoryApi_CreateMemoryEnvRequestBody,
  options?: HttpOptions
): Promise<AiopsMemoryApi_CreateMemoryEnvResponseBody> =>
  /**! @contract easyops.api.llm.aiops_memory.CreateMemoryEnv@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AiopsMemoryApi_CreateMemoryEnvResponseBody>
    >(
      "api/gateway/llm.aiops_memory.CreateMemoryEnv/api/v1/llm/aiops_service/memory/env/create",
      data,
      options
    )
  ).data;
