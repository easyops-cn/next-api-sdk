import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_GetElevoSimpleMemoriesByConversationResponseBody {
  /** 简单记忆信息列表 */
  memories?: ElevoApi_GetElevoSimpleMemoriesByConversationResponseBody_memories_item[];
}

/**
 * @description 根据会话ID获取elevo简单记忆列表
 * @endpoint GET /api/v1/elevo/conversations/:conversationId/memories
 */
export const ElevoApi_getElevoSimpleMemoriesByConversation = async (
  conversationId: string | number,
  options?: HttpOptions
): Promise<ElevoApi_GetElevoSimpleMemoriesByConversationResponseBody> =>
  /**! @contract easyops.api.llm.elevo.GetElevoSimpleMemoriesByConversation@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoApi_GetElevoSimpleMemoriesByConversationResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/conversations/${conversationId}/memories`,
      options
    )
  ).data;

export interface ElevoApi_GetElevoSimpleMemoriesByConversationResponseBody_memories_item {
  /** 步骤ID */
  stepId?: string;

  /** 简单信息 */
  simple?: string;
}
