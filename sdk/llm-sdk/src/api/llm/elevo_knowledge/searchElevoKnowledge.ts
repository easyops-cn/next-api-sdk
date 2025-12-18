import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoKnowledgeApi_SearchElevoKnowledgeRequestBody {
  /** 文档实例ID（可选，不传则搜索项目所有文档） */
  documentId?: string;

  /** 项目ID */
  projectId?: string;

  /** 协作空间实例ID */
  spaceId?: string;

  /** 会话ID */
  conversationId?: string;

  /** 查询内容 */
  query: string;

  /** 返回数量限制，默认5，最大20 */
  limit?: number;

  /** 相似度阈值，默认0.5，范围0-1 */
  scoreThreshold?: number;
}

export interface ElevoKnowledgeApi_SearchElevoKnowledgeResponseBody {
  /** 搜索结果 */
  docs?: ElevoKnowledgeApi_SearchElevoKnowledgeResponseBody_docs_item[];

  /** 命中总数 */
  total?: number;

  /** 分页token */
  token?: string;
}

/**
 * @description elevo知识向量检索
 * @endpoint POST /api/v1/llm/elevo_knowledge/knowledge/search
 */
export const ElevoKnowledgeApi_searchElevoKnowledge = async (
  data: ElevoKnowledgeApi_SearchElevoKnowledgeRequestBody,
  options?: HttpOptions
): Promise<ElevoKnowledgeApi_SearchElevoKnowledgeResponseBody> =>
  /**! @contract easyops.api.llm.elevo_knowledge.SearchElevoKnowledge@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoKnowledgeApi_SearchElevoKnowledgeResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/elevo_knowledge/knowledge/search",
      data,
      options
    )
  ).data;

export interface ElevoKnowledgeApi_SearchElevoKnowledgeResponseBody_docs_item {
  /** 文档片段内容 */
  pageContent?: string;

  /** 片段唯一标识 */
  id?: string;

  /** 元数据，键值对 */
  metadata?: Record<string, any>;

  /** pageContent长度 */
  len?: number;

  /** 与输入的相似度分数 */
  score?: number;
}
