import { http, HttpOptions } from "@next-core/http";
import {
  ModelElevoConversionResponse,
  ModelElevoCmd,
  ModelElevoFile,
} from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_SendElevoMessageRequestBody {
  /** 用户输入内容 */
  content?: string;

  /** 用户具体的操作，与content二选一，例如：确定 */
  action?: string;

  /** 聊天指令，用于指定特定的业务流或目标执行 */
  cmd?: Partial<ModelElevoCmd>;

  /** 执行任务引擎的版本号 */
  engineVersion?: string;

  /** 指定数字人ID（可选） */
  aiEmployeeId?: string;

  /** 指定agent的ID（可选） */
  agentId?: string;

  /** 文件列表（可选） */
  files?: Partial<ModelElevoFile>[];
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
