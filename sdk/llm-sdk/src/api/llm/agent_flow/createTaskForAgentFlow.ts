import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface AgentFlowApi_CreateTaskForAgentFlowRequestBody {
  /** 用户输入 */
  input?: string;

  /** 指定处理任务的agent */
  agentId?: string;

  /** 执行任务引擎的版本号 */
  engineVersion?: string;
}

export interface AgentFlowApi_CreateTaskForAgentFlowResponseBody {
  /** 任务id */
  taskId?: string;
}

/**
 * @description 创建agent flow的任务
 * @endpoint POST /api/v1/llm/agent/flow/create
 */
export const AgentFlowApi_createTaskForAgentFlow = async (
  data: AgentFlowApi_CreateTaskForAgentFlowRequestBody,
  options?: HttpOptions
): Promise<AgentFlowApi_CreateTaskForAgentFlowResponseBody> =>
  /**! @contract easyops.api.llm.agent_flow.CreateTaskForAgentFlow@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AgentFlowApi_CreateTaskForAgentFlowResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/agent/flow/create",
      data,
      options
    )
  ).data;
