import { http, HttpOptions } from "@next-core/http";

export interface DocumentApi_MoveDocumentRequestBody {
  /** 要移动的documentId */
  sourceDocumentId: string;

  /** 移动到的目标id下，为空时，移动到根目录下 */
  targetDocumentId?: string;
}

/**
 * @description 小产品文档移动
 * @endpoint POST /api/v1/document/move
 */
export const DocumentApi_moveDocument = (
  data: DocumentApi_MoveDocumentRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.document.MoveDocument@1.1.0 */ http.post<void>(
    "api/gateway/next_builder.document.MoveDocument/api/v1/document/move",
    data,
    options
  );
