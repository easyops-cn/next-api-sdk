import { http, HttpOptions } from "@next-core/http";
import { ModelFlowAgentTaskResponse } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface AgentFlowApi_ChatForAgentFlowRequestBody {
  /** 用户输入 */
  input: string;

  /** 任务id, 如果为空, 则创建新任务 */
  taskId: string;
}

/** 流式返回的数据 */
export type AgentFlowApi_ChatForAgentFlowResponseBody =
  Partial<ModelFlowAgentTaskResponse> &
    AgentFlowApi_ChatForAgentFlowResponseBody_2;

/**
 * @description agent flow 连续对话聊天, 流式返回, 则继续执行任务。只返回新的消息
 * @endpoint POST /api/v1/llm/agent/flow/chat
 */
export const AgentFlowApi_chatForAgentFlow = async (
  data: AgentFlowApi_ChatForAgentFlowRequestBody,
  options?: HttpOptions
): Promise<AgentFlowApi_ChatForAgentFlowResponseBody> =>
  /**! @contract easyops.api.llm.agent_flow.ChatForAgentFlow@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AgentFlowApi_ChatForAgentFlowResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/agent/flow/chat",
      data,
      options
    )
  ).data;

export interface AgentFlowApi_ChatForAgentFlowResponseBody_2 {
  /** 流式数据列表 */
  sseDataList?: any[];
}
