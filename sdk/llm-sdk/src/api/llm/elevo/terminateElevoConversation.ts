import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_TerminateElevoConversationRequestBody {
  /** 终止原因 */
  reason?: string;
}

export interface ElevoApi_TerminateElevoConversationResponseBody {
  /** 会话ID */
  conversation_id?: string;
}

/**
 * @description 终止elevo会话
 * @endpoint PUT /api/v1/elevo/conversations/:conversationId/terminate
 */
export const ElevoApi_terminateElevoConversation = async (
  conversationId: string | number,
  data: ElevoApi_TerminateElevoConversationRequestBody,
  options?: HttpOptions
): Promise<ElevoApi_TerminateElevoConversationResponseBody> =>
  /**! @contract easyops.api.llm.elevo.TerminateElevoConversation@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<ElevoApi_TerminateElevoConversationResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/conversations/${conversationId}/terminate`,
      data,
      options
    )
  ).data;
