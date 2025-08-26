import { http, HttpOptions } from "@next-core/http";
import { ModelElevoAgent } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoApi_CreateElevoAgentRequestBody = Partial<ModelElevoAgent>;

export type ElevoApi_CreateElevoAgentResponseBody = Partial<ModelElevoAgent>;

/**
 * @description 创建elevo智能体
 * @endpoint POST /api/v1/elevo/agents
 */
export const ElevoApi_createElevoAgent = async (
  data: ElevoApi_CreateElevoAgentRequestBody,
  options?: HttpOptions
): Promise<ElevoApi_CreateElevoAgentResponseBody> =>
  /**! @contract easyops.api.llm.elevo.CreateElevoAgent@1.0.0 */ (
    await http.post<ResponseBodyWrapper<ElevoApi_CreateElevoAgentResponseBody>>(
      "api/gateway/logic.llm.aiops_service/api/v1/elevo/agents",
      data,
      options
    )
  ).data;
