import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoKnowledgeApi_ScrollElevoKnowledgeRequestBody {
  /** 文档实例ID（可选，不传则查询项目所有文档） */
  documentId?: string;

  /** 项目ID */
  projectId?: string;

  /** 协作空间实例ID */
  spaceId?: string;

  /** 会话ID */
  conversationId?: string;

  /** 分页偏移量 */
  offset?: string;

  /** 返回数量限制，默认10 */
  limit?: number;
}

export interface ElevoKnowledgeApi_ScrollElevoKnowledgeResponseBody {
  /** 搜索结果 */
  docs?: ElevoKnowledgeApi_ScrollElevoKnowledgeResponseBody_docs_item[];

  /** 总数量 */
  total?: number;

  /** 下一页偏移量 */
  nextPageOffset?: string;
}

/**
 * @description elevo知识向量分页查询
 * @endpoint POST /api/v1/llm/elevo_knowledge/knowledge/scroll
 */
export const ElevoKnowledgeApi_scrollElevoKnowledge = async (
  data: ElevoKnowledgeApi_ScrollElevoKnowledgeRequestBody,
  options?: HttpOptions
): Promise<ElevoKnowledgeApi_ScrollElevoKnowledgeResponseBody> =>
  /**! @contract easyops.api.llm.elevo_knowledge.ScrollElevoKnowledge@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoKnowledgeApi_ScrollElevoKnowledgeResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/elevo_knowledge/knowledge/scroll",
      data,
      options
    )
  ).data;

export interface ElevoKnowledgeApi_ScrollElevoKnowledgeResponseBody_docs_item {
  /** 文档片段内容 */
  pageContent?: string;

  /** 片段唯一标识 */
  id?: string;

  /** 元数据，键值对 */
  metadata?: Record<string, any>;

  /** pageContent长度 */
  len?: number;
}
