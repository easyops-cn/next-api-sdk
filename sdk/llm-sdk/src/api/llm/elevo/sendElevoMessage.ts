import { http, HttpOptions } from "@next-core/http";
import { ModelElevoConversionResponse } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_SendElevoMessageRequestBody {
  /** 用户输入内容 */
  content?: string;
}

/** SSE流式数据 */
export type ElevoApi_SendElevoMessageResponseBody =
  Partial<ModelElevoConversionResponse> &
    ElevoApi_SendElevoMessageResponseBody_2;

/**
 * @description 发送elevo会话消息
 * @endpoint POST /api/v1/elevo/conversations/:conversationId/messages
 */
export const ElevoApi_sendElevoMessage = async (
  conversationId: string | number,
  data: ElevoApi_SendElevoMessageRequestBody,
  options?: HttpOptions
): Promise<ElevoApi_SendElevoMessageResponseBody> =>
  /**! @contract easyops.api.llm.elevo.SendElevoMessage@1.0.0 */ (
    await http.post<ResponseBodyWrapper<ElevoApi_SendElevoMessageResponseBody>>(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/conversations/${conversationId}/messages`,
      data,
      options
    )
  ).data;

export interface ElevoApi_SendElevoMessageResponseBody_2 {
  /** 流式数据列表 */
  sseDataList?: any[];
}
