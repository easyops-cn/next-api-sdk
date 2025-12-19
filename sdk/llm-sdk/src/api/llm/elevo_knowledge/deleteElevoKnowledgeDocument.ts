import { http, HttpOptions } from "@next-core/http";

/**
 * @description 删除elevo知识文档
 * @endpoint DELETE /api/v1/llm/elevo_knowledge/documents/:documentId
 */
export const ElevoKnowledgeApi_deleteElevoKnowledgeDocument = (
  documentId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo_knowledge.DeleteElevoKnowledgeDocument@1.0.0 */ http.delete<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/llm/elevo_knowledge/documents/${documentId}`,
    options
  );
