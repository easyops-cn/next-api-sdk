import { http, HttpOptions } from "@next-core/http";
import { ModelElevoMemory } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_UpdateElevoMemoryRequestBody {
  /** 会话ID */
  conversationId?: string;

  /** 任务ID */
  taskId?: string;

  /** 步骤ID */
  stepId?: string;

  /** 详细信息 */
  detail?: string;

  /** 简单信息 */
  simple?: string;
}

export type ElevoApi_UpdateElevoMemoryResponseBody = Partial<ModelElevoMemory>;

/**
 * @description 更新elevo记忆
 * @endpoint PUT /api/v1/elevo/memories/:rowId
 */
export const ElevoApi_updateElevoMemory = async (
  rowId: string | number,
  data: ElevoApi_UpdateElevoMemoryRequestBody,
  options?: HttpOptions
): Promise<ElevoApi_UpdateElevoMemoryResponseBody> =>
  /**! @contract easyops.api.llm.elevo.UpdateElevoMemory@1.0.0 */ (
    await http.put<ResponseBodyWrapper<ElevoApi_UpdateElevoMemoryResponseBody>>(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/memories/${rowId}`,
      data,
      options
    )
  ).data;
