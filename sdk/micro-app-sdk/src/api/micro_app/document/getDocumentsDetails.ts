import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

/** 详细文档，不返回parent和children */
export interface DocumentApi_GetDocumentsDetailsResponseBody {
  /** 实例Id */
  instanceId?: string;

  /** 文档Id，全局唯一 */
  documentId?: string;

  /** 作者 */
  author?: string;

  /** 文档标题 */
  name?: string;

  /** 文档内容 */
  content?: string;

  /** 关联小产品 id */
  relatedMicroAppId?: string;

  /** 关联路由别名数组 */
  relatedRouteAliases?: string[];

  /** 文档顺序 */
  sort?: number;
}

/**
 * @description 获取已安装小产品的文档详情
 * @endpoint GET /api/micro_app/v1/document/details/:documentId
 */
export const DocumentApi_getDocumentsDetails = async (
  documentId: string | number,
  options?: HttpOptions
): Promise<DocumentApi_GetDocumentsDetailsResponseBody> =>
  /**! @contract easyops.api.micro_app.document.GetDocumentsDetails@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<DocumentApi_GetDocumentsDetailsResponseBody>
    >(
      `api/gateway/micro_app.document.GetDocumentsDetails/api/micro_app/v1/document/details/${documentId}`,
      options
    )
  ).data;
