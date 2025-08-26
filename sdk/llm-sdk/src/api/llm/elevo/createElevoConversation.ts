import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_CreateElevoConversationRequestBody {
  /** 项目ID */
  projectId?: string;

  /** 指定数字人ID（可选） */
  aiEmployeeId?: string;
}

export interface ElevoApi_CreateElevoConversationResponseBody {
  /** 会话ID */
  conversationId?: string;

  /** 项目ID */
  projectId?: string;

  /** 会话状态 */
  state?: string;

  /** 标题 */
  title?: string;

  /** 分配的数字人ID */
  aiEmployeeId?: string;
}

/**
 * @description 创建elevo空会话
 * @endpoint POST /api/v1/elevo/conversations
 */
export const ElevoApi_createElevoConversation = async (
  data: ElevoApi_CreateElevoConversationRequestBody,
  options?: HttpOptions
): Promise<ElevoApi_CreateElevoConversationResponseBody> =>
  /**! @contract easyops.api.llm.elevo.CreateElevoConversation@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoApi_CreateElevoConversationResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/elevo/conversations",
      data,
      options
    )
  ).data;
