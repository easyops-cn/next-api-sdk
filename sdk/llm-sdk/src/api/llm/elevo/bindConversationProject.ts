import { http, HttpOptions } from "@next-core/http";

export interface ElevoApi_BindConversationProjectRequestBody {
  /** 项目实例ID */
  projectInstanceId: string;
}

/**
 * @description 绑定会话所属的项目
 * @endpoint POST /api/v1/elevo/conversation/:conversationId/bind-project
 */
export const ElevoApi_bindConversationProject = (
  conversationId: string | number,
  data: ElevoApi_BindConversationProjectRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo.BindConversationProject@1.0.0 */ http.post<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/conversation/${conversationId}/bind-project`,
    data,
    options
  );
