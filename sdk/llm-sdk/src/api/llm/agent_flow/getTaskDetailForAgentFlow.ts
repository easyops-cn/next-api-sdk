import { http, HttpOptions } from "@next-core/http";
import { ModelFlowAgentTaskResponse } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

/** 流式返回的数据 */
export type AgentFlowApi_GetTaskDetailForAgentFlowResponseBody =
  Partial<ModelFlowAgentTaskResponse> &
    AgentFlowApi_GetTaskDetailForAgentFlowResponseBody_2;

/**
 * @description 获取agent flow任务详情，流式返回
 * @endpoint GET /api/v1/llm/agent/flow/:taskId
 */
export const AgentFlowApi_getTaskDetailForAgentFlow = async (
  taskId: string | number,
  options?: HttpOptions
): Promise<AgentFlowApi_GetTaskDetailForAgentFlowResponseBody> =>
  /**! @contract easyops.api.llm.agent_flow.GetTaskDetailForAgentFlow@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<AgentFlowApi_GetTaskDetailForAgentFlowResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/llm/agent/flow/${taskId}`,
      options
    )
  ).data;

export interface AgentFlowApi_GetTaskDetailForAgentFlowResponseBody_2 {
  /** 流式数据列表 */
  sseDataList?: any[];
}
