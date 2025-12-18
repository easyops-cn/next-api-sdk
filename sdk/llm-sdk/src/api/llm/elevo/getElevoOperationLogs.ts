import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_GetElevoOperationLogsRequestParams {
  /** 任务ID */
  taskId?: string;

  /** 操作类型 */
  operationType?: string;

  /** 操作子类型 */
  operationSubType?: string;
}

export interface ElevoApi_GetElevoOperationLogsResponseBody {
  /** 操作日志列表 */
  logs?: ElevoApi_GetElevoOperationLogsResponseBody_logs_item[];
}

/**
 * @description 获取elevo会话操作日志
 * @endpoint GET /api/v1/elevo/conversations/:conversationId/operation-logs
 */
export const ElevoApi_getElevoOperationLogs = async (
  conversationId: string | number,
  params: ElevoApi_GetElevoOperationLogsRequestParams,
  options?: HttpOptions
): Promise<ElevoApi_GetElevoOperationLogsResponseBody> =>
  /**! @contract easyops.api.llm.elevo.GetElevoOperationLogs@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoApi_GetElevoOperationLogsResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/conversations/${conversationId}/operation-logs`,
      { ...options, params }
    )
  ).data;

export interface ElevoApi_GetElevoOperationLogsResponseBody_logs_item {
  /** 日志ID */
  logId?: string;

  /** traceId */
  traceId?: string;

  /** spanId */
  spanId?: string;

  /** 会话ID */
  conversationId?: string;

  /** 任务ID */
  taskId?: string;

  /** 步骤ID */
  stepId?: string;

  /** 操作类型(state_change, message, tool_call, handoff, compression) */
  opType?: string;

  /** 操作子类型 */
  opSubType?: string;

  /** 操作数据 */
  data?: string;

  /** 时间戳 */
  time?: number;
}
