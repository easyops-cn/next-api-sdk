import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoKnowledgeApi_GetElevoKnowledgeDocumentResponseBody {
  /** 文档实例ID */
  instanceId?: string;

  /** 文档名称 */
  name?: string;

  /** 文档描述 */
  description?: string;

  /** 所属项目ID */
  projectId?: string;

  /** 文档内容 */
  content?: string;

  /** OpenAPI URL */
  openApiUrl?: string;

  /** 使用条件描述 */
  useCondition?: string;

  /** 状态 */
  state?: string;

  /** 知识片段数量 */
  knowledgeCount?: number;
}

/**
 * @description 获取elevo知识文档详情
 * @endpoint GET /api/v1/llm/elevo_knowledge/documents/:documentId
 */
export const ElevoKnowledgeApi_getElevoKnowledgeDocument = async (
  documentId: string | number,
  options?: HttpOptions
): Promise<ElevoKnowledgeApi_GetElevoKnowledgeDocumentResponseBody> =>
  /**! @contract easyops.api.llm.elevo_knowledge.GetElevoKnowledgeDocument@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoKnowledgeApi_GetElevoKnowledgeDocumentResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/llm/elevo_knowledge/documents/${documentId}`,
      options
    )
  ).data;
