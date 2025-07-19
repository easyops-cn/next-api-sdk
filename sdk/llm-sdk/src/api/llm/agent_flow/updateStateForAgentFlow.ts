import { http, HttpOptions } from "@next-core/http";

export interface AgentFlowApi_UpdateStateForAgentFlowRequestBody {
  /** 调整任务状态，可以设置为 stopped， paused, working(paused的任务状态时，可以继续) */
  state?: string;
}

/**
 * @description flow agent更新任务状态，支持暂停、停止和重启任务
 * @endpoint POST /api/v1/llm/agent/flow/:taskId/updateState
 */
export const AgentFlowApi_updateStateForAgentFlow = (
  taskId: string | number,
  data: AgentFlowApi_UpdateStateForAgentFlowRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.agent_flow.UpdateStateForAgentFlow@1.0.0 */ http.post<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/llm/agent/flow/${taskId}/updateState`,
    data,
    options
  );
