import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_ListElevoConversationsRequestParams {
  /** 项目ID */
  projectId?: string;

  /** 用户名 */
  username?: string;

  /** 会话状态（submitted, working, completed） */
  state?: string;

  /** 标题搜索关键词 */
  title?: string;

  /** 分页token */
  token?: string;

  /** 每页数量 */
  limit?: number;

  /** 是否只查询当前用户的会话 */
  onlyOwner?: boolean;

  /** 是否只查询有项目关联的会话 */
  onlyRelatedProject?: boolean;

  /** 是否只查询无项目关联的会话 */
  onlyUnrelatedProject?: boolean;

  /** 协作空间的instanceId */
  spaceInstanceId?: string;

  /** 业务流的instanceId */
  serviceFlowInstanceId?: string;

  /** 触发器的instanceId */
  triggerInstanceId?: string;
}

export interface ElevoApi_ListElevoConversationsResponseBody {
  /** 会话列表 */
  conversations?: ElevoApi_ListElevoConversationsResponseBody_conversations_item[];

  /** 下一页token */
  nextToken?: string;

  /** 上一页token */
  previousToken?: string;
}

/**
 * @description 获取elevo会话列表
 * @endpoint GET /api/v1/elevo/conversations
 */
export const ElevoApi_listElevoConversations = async (
  params: ElevoApi_ListElevoConversationsRequestParams,
  options?: HttpOptions
): Promise<ElevoApi_ListElevoConversationsResponseBody> =>
  /**! @contract easyops.api.llm.elevo.ListElevoConversations@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoApi_ListElevoConversationsResponseBody>
    >("api/gateway/logic.llm.aiops_service/api/v1/elevo/conversations", {
      ...options,
      params,
    })
  ).data;

export interface ElevoApi_ListElevoConversationsResponseBody_conversations_item {
  /** 会话ID */
  conversationId?: string;

  /** 项目ID */
  projectId?: string;

  /** 会话标题 */
  title?: string;

  /** 会话状态 */
  state?: string;

  /** 创建时间(时间戳) */
  startTime?: number;

  /** 会话关联的目标ID */
  goalInstanceId?: string;

  /** 创建者的用户名 */
  username?: string;

  /** 会话描述 */
  description?: string;

  /** 更新时间(时间戳) */
  updatedAt?: number;

  /** 绑定的业务流实例id列表 */
  serviceFlowIds?: string[];
}
