import { http, HttpOptions } from "@next-core/http";

export interface AgentFlowApi_AddJobMessageForAgentFlowRequestBody {
  /** 补充输入 */
  input?: string;
}

/**
 * @description flow agent补充消息
 * @endpoint POST /api/v1/llm/agent/flow/:taskId/job/:jobId
 */
export const AgentFlowApi_addJobMessageForAgentFlow = (
  taskId: string | number,
  jobId: string | number,
  data: AgentFlowApi_AddJobMessageForAgentFlowRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.agent_flow.AddJobMessageForAgentFlow@1.0.0 */ http.post<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/llm/agent/flow/${taskId}/job/${jobId}`,
    data,
    options
  );
