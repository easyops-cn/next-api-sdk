import { http, HttpOptions } from "@next-core/http";
import { ModelElevoActivityLog } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoSpaceApi_ListActivityLogsRequestParams {
  /** 业务对象ID（可选，用于筛选） */
  objectId?: string;

  /** 业务对象实例ID（可选，用于筛选） */
  objectInstanceId?: string;

  /** 会话ID（可选，用于筛选） */
  conversationId?: string;

  /** 按操作类型筛选（可选） */
  actionTypes?: string[];

  /** 分页token */
  token?: string;

  /** 每页数量 */
  limit?: number;
}

export interface ElevoSpaceApi_ListActivityLogsResponseBody {
  /** 活动记录列表 */
  list?: Partial<ModelElevoActivityLog>[];

  /** 下一页token */
  nextToken?: string;

  /** 上一页token */
  previousToken?: string;
}

/**
 * @description 查询活动记录列表
 * @endpoint GET /api/v1/elevo/spaces/:spaceId/activities
 */
export const ElevoSpaceApi_listActivityLogs = async (
  spaceId: string | number,
  params: ElevoSpaceApi_ListActivityLogsRequestParams,
  options?: HttpOptions
): Promise<ElevoSpaceApi_ListActivityLogsResponseBody> =>
  /**! @contract easyops.api.llm.elevo_space.ListActivityLogs@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoSpaceApi_ListActivityLogsResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/spaces/${spaceId}/activities`,
      { ...options, params }
    )
  ).data;
