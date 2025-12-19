import { http, HttpOptions } from "@next-core/http";

export interface ElevoApi_UpdateElevoConversationDescriptionRequestBody {
  /** 会话标题，若传入为空不会更新 */
  title?: string;

  /** 会话描述，若传入为空不会更新 */
  description?: string;
}

/**
 * @description 更新elevo会话描述
 * @endpoint PUT /api/v1/elevo/conversations/:conversationId/description
 */
export const ElevoApi_updateElevoConversationDescription = (
  conversationId: string | number,
  data: ElevoApi_UpdateElevoConversationDescriptionRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo.UpdateElevoConversationDescription@1.0.0 */ http.put<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/conversations/${conversationId}/description`,
    data,
    options
  );
