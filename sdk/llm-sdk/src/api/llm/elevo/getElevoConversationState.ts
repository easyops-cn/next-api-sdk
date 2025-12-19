import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_GetElevoConversationStateResponseBody {
  /** 会话ID */
  conversationId?: string;

  /** 会话状态 */
  state?: string;

  /** 更新时间(时间戳，单位：秒) */
  updatedAt?: number;
}

/**
 * @description 获取elevo会话状态
 * @endpoint GET /api/v1/elevo/conversations/:conversationId/state
 */
export const ElevoApi_getElevoConversationState = async (
  conversationId: string | number,
  options?: HttpOptions
): Promise<ElevoApi_GetElevoConversationStateResponseBody> =>
  /**! @contract easyops.api.llm.elevo.GetElevoConversationState@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoApi_GetElevoConversationStateResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/conversations/${conversationId}/state`,
      options
    )
  ).data;
