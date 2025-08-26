import { http, HttpOptions } from "@next-core/http";
import { ModelElevoAgent } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoApi_UpdateElevoAgentRequestBody = Partial<ModelElevoAgent>;

export type ElevoApi_UpdateElevoAgentResponseBody = Partial<ModelElevoAgent>;

/**
 * @description 更新elevo智能体
 * @endpoint PUT /api/v1/elevo/agents/:instanceId
 */
export const ElevoApi_updateElevoAgent = async (
  instanceId: string | number,
  data: ElevoApi_UpdateElevoAgentRequestBody,
  options?: HttpOptions
): Promise<ElevoApi_UpdateElevoAgentResponseBody> =>
  /**! @contract easyops.api.llm.elevo.UpdateElevoAgent@1.0.0 */ (
    await http.put<ResponseBodyWrapper<ElevoApi_UpdateElevoAgentResponseBody>>(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/agents/${instanceId}`,
      data,
      options
    )
  ).data;
