import { http, HttpOptions } from "@next-core/http";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoKnowledgeApi_ListElevoKnowledgeDocumentsRequestParams {
  /** 项目ID */
  projectId?: string;

  /** 协作空间实例ID */
  spaceId?: string;

  /** 关键字搜索 */
  keyword?: string;

  /** 状态过滤，可选值：active, inactive */
  state?: string;

  /** 页码，默认1 */
  page?: number;

  /** 页大小，默认20 */
  pageSize?: number;
}

export interface ElevoKnowledgeApi_ListElevoKnowledgeDocumentsResponseItem {
  /** 文档实例ID（主键） */
  instanceId?: string;

  /** 文档名称 */
  name?: string;

  /** 文档描述 */
  description?: string;

  /** 所属elevo项目ID */
  projectId?: string;

  /** 文档内容（与openApiUrl二选一） */
  content?: string;

  /** OpenAPI文档URL（与content二选一） */
  openApiUrl?: string;

  /** 何时使用该知识的描述 */
  useCondition?: string;

  /** 状态，可选值：active, inactive */
  state?: string;

  /** 知识片段数量 */
  knowledgeCount?: number;

  /** 创建者 */
  creator?: string;

  /** 创建时间 */
  ctime?: string;

  /** 修改时间 */
  mtime?: string;

  /** 修改者 */
  modifier?: string;
}

export type ElevoKnowledgeApi_ListElevoKnowledgeDocumentsResponseBody =
  ResponseListWrapper<ElevoKnowledgeApi_ListElevoKnowledgeDocumentsResponseItem>;

/**
 * @description 获取elevo知识文档列表
 * @endpoint list /api/v1/llm/elevo_knowledge/documents
 */
export const ElevoKnowledgeApi_listElevoKnowledgeDocuments = async (
  params: ElevoKnowledgeApi_ListElevoKnowledgeDocumentsRequestParams,
  options?: HttpOptions
): Promise<ElevoKnowledgeApi_ListElevoKnowledgeDocumentsResponseBody> =>
  /**! @contract easyops.api.llm.elevo_knowledge.ListElevoKnowledgeDocuments@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoKnowledgeApi_ListElevoKnowledgeDocumentsResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/elevo_knowledge/documents",
      { ...options, params }
    )
  ).data;
