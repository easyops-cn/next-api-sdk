import { http, HttpOptions } from "@next-core/http";
import { ModelElevoConversionResponse } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_GetElevoConversationStreamRequestParams {
  /** 最后一条消息的索引，用于增量拉取 */
  lastIndex?: number;
}

/** SSE流式数据 */
export type ElevoApi_GetElevoConversationStreamResponseBody =
  Partial<ModelElevoConversionResponse> &
    ElevoApi_GetElevoConversationStreamResponseBody_2;

/**
 * @description 获取elevo会话流式数据
 * @endpoint GET /api/v1/elevo/conversations/:conversationId/stream
 */
export const ElevoApi_getElevoConversationStream = async (
  conversationId: string | number,
  params: ElevoApi_GetElevoConversationStreamRequestParams,
  options?: HttpOptions
): Promise<ElevoApi_GetElevoConversationStreamResponseBody> =>
  /**! @contract easyops.api.llm.elevo.GetElevoConversationStream@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoApi_GetElevoConversationStreamResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/conversations/${conversationId}/stream`,
      { ...options, params }
    )
  ).data;

export interface ElevoApi_GetElevoConversationStreamResponseBody_2 {
  /** 流式数据列表 */
  sseDataList?: any[];
}
