import { http, HttpOptions } from "@next-core/http";
import { ModelElevoAgent } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoApi_GetElevoAgentResponseBody = Partial<ModelElevoAgent>;

/**
 * @description 获取elevo智能体详情
 * @endpoint GET /api/v1/elevo/agents/:instanceId
 */
export const ElevoApi_getElevoAgent = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<ElevoApi_GetElevoAgentResponseBody> =>
  /**! @contract easyops.api.llm.elevo.GetElevoAgent@1.0.0 */ (
    await http.get<ResponseBodyWrapper<ElevoApi_GetElevoAgentResponseBody>>(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/agents/${instanceId}`,
      options
    )
  ).data;
