import { http, HttpOptions } from "@next-core/http";
import { ModelElevoAgent } from "../../../model/llm/index.js";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_ListElevoAgentsRequestParams {
  /** 页码 */
  page?: number;

  /** 每页数量 */
  page_size?: number;

  /** 搜索关键词 */
  key?: string;

  /** 状态过滤 */
  state?: string;
}

export type ElevoApi_ListElevoAgentsResponseItem = Partial<ModelElevoAgent>;

export type ElevoApi_ListElevoAgentsResponseBody =
  ResponseListWrapper<ElevoApi_ListElevoAgentsResponseItem>;

/**
 * @description 获取elevo智能体列表
 * @endpoint list /api/v1/elevo/agents
 */
export const ElevoApi_listElevoAgents = async (
  params: ElevoApi_ListElevoAgentsRequestParams,
  options?: HttpOptions
): Promise<ElevoApi_ListElevoAgentsResponseBody> =>
  /**! @contract easyops.api.llm.elevo.ListElevoAgents@1.0.0 */ (
    await http.get<ResponseBodyWrapper<ElevoApi_ListElevoAgentsResponseBody>>(
      "api/gateway/logic.llm.aiops_service/api/v1/elevo/agents",
      { ...options, params }
    )
  ).data;
