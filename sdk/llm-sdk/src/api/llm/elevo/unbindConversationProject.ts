import { http, HttpOptions } from "@next-core/http";

/**
 * @description 解绑会话所属的项目
 * @endpoint POST /api/v1/elevo/conversation/:conversationId/unbind-project
 */
export const ElevoApi_unbindConversationProject = (
  conversationId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo.UnbindConversationProject@1.0.0 */ http.post<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/conversation/${conversationId}/unbind-project`,
    undefined,
    options
  );
