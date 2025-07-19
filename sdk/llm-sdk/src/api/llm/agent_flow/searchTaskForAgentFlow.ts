import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface AgentFlowApi_SearchTaskForAgentFlowRequestBody {
  /** 对标题进行关键字搜索 */
  query?: string;

  /** 数据数量大小限制， 默认30 */
  limit?: number;

  /** 分页token，字符串；向上翻页或向下翻页的token都在这个参数传入。 */
  next_token?: string;
}

export interface AgentFlowApi_SearchTaskForAgentFlowResponseBody {
  /** 下一页，查询的token，为空时，没有下一页 */
  next_token?: string;

  /** 上一页，查询的token，为空时，没有上一页 */
  previous_token?: string;

  /** 任务列表 */
  data?: AgentFlowApi_SearchTaskForAgentFlowResponseBody_data_item[];
}

/**
 * @description 分页查询agent flow, 默认只查询最近三个页的数据
 * @endpoint POST /api/v1/llm/agent/flow/search
 */
export const AgentFlowApi_searchTaskForAgentFlow = async (
  data: AgentFlowApi_SearchTaskForAgentFlowRequestBody,
  options?: HttpOptions
): Promise<AgentFlowApi_SearchTaskForAgentFlowResponseBody> =>
  /**! @contract easyops.api.llm.agent_flow.SearchTaskForAgentFlow@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AgentFlowApi_SearchTaskForAgentFlowResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/agent/flow/search",
      data,
      options
    )
  ).data;

export interface AgentFlowApi_SearchTaskForAgentFlowResponseBody_data_item {
  /** 任务id */
  id?: string;

  /** 创建时间戳，单位秒 */
  startTime?: number;

  /** 结束时间戳，单位秒 */
  endTime?: number;

  /** 任务状态，"submitted",  "working", "input-required","completed","canceled","failed", "unknown" */
  state?: string;

  /** 标题 */
  title?: string;
}
