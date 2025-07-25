import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface AgentFlowApi_ListAllMcpToolsResponseBody {
  /** mcp工具列表 */
  data?: AgentFlowApi_ListAllMcpToolsResponseBody_data_item[];
}

/**
 * @description 列出所有mcp工具
 * @endpoint POST /api/v1/llm/agent/flow/mcp_tools/list_all
 */
export const AgentFlowApi_listAllMcpTools = async (
  options?: HttpOptions
): Promise<AgentFlowApi_ListAllMcpToolsResponseBody> =>
  /**! @contract easyops.api.llm.agent_flow.ListAllMcpTools@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AgentFlowApi_ListAllMcpToolsResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/agent/flow/mcp_tools/list_all",
      undefined,
      options
    )
  ).data;

export interface AgentFlowApi_ListAllMcpToolsResponseBody_data_item {
  /** mcp工具名称 */
  name?: string;

  /** mcp工具描述 */
  description?: string;

  /** mcp工具标题 */
  title?: string;

  /** mcp工具server */
  server?: AgentFlowApi_ListAllMcpToolsResponseBody_data_item_server;
}

export interface AgentFlowApi_ListAllMcpToolsResponseBody_data_item_server {
  /** mcp工具server id */
  id?: string;

  /** mcp工具server name */
  name?: string;
}
