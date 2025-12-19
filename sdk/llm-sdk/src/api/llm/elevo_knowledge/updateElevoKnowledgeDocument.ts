import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoKnowledgeApi_UpdateElevoKnowledgeDocumentRequestBody {
  /** 文档名称 */
  name?: string;

  /** 文档描述 */
  description?: string;

  /** 文档内容 */
  content?: string;

  /** OpenAPI URL */
  openApiUrl?: string;

  /** 使用条件描述 */
  useCondition?: string;

  /** 状态，可选值：active, inactive */
  state?: string;
}

export interface ElevoKnowledgeApi_UpdateElevoKnowledgeDocumentResponseBody {
  /** 知识片段数（如果重新处理） */
  knowledgeCount?: number;
}

/**
 * @description 更新elevo知识文档
 * @endpoint PUT /api/v1/llm/elevo_knowledge/documents/:documentId
 */
export const ElevoKnowledgeApi_updateElevoKnowledgeDocument = async (
  documentId: string | number,
  data: ElevoKnowledgeApi_UpdateElevoKnowledgeDocumentRequestBody,
  options?: HttpOptions
): Promise<ElevoKnowledgeApi_UpdateElevoKnowledgeDocumentResponseBody> =>
  /**! @contract easyops.api.llm.elevo_knowledge.UpdateElevoKnowledgeDocument@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<ElevoKnowledgeApi_UpdateElevoKnowledgeDocumentResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/llm/elevo_knowledge/documents/${documentId}`,
      data,
      options
    )
  ).data;
