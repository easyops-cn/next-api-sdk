import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoKnowledgeApi_CreateElevoKnowledgeDocumentRequestBody {
  /** 文档名称 */
  name: string;

  /** 文档描述 */
  description?: string;

  /** elevo项目ID */
  projectId?: string;

  /** 协作空间实例ID */
  spaceId?: string;

  /** 文档内容（与openApiUrl二选一） */
  content?: string;

  /** OpenAPI URL（与content二选一） */
  openApiUrl?: string;

  /** 使用条件描述 */
  useCondition?: string;

  /** 状态， 默认为active */
  state?: "active" | "inactive";
}

export interface ElevoKnowledgeApi_CreateElevoKnowledgeDocumentResponseBody {
  /** 文档ID */
  documentId?: string;

  /** 生成的知识片段数 */
  knowledgeCount?: number;
}

/**
 * @description 创建elevo知识文档
 * @endpoint POST /api/v1/llm/elevo_knowledge/documents
 */
export const ElevoKnowledgeApi_createElevoKnowledgeDocument = async (
  data: ElevoKnowledgeApi_CreateElevoKnowledgeDocumentRequestBody,
  options?: HttpOptions
): Promise<ElevoKnowledgeApi_CreateElevoKnowledgeDocumentResponseBody> =>
  /**! @contract easyops.api.llm.elevo_knowledge.CreateElevoKnowledgeDocument@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoKnowledgeApi_CreateElevoKnowledgeDocumentResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/elevo_knowledge/documents",
      data,
      options
    )
  ).data;
