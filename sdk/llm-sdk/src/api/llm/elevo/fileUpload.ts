import { http, HttpOptions } from "@next-core/http";
import { ModelElevoFile } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_FileUploadRequestBody {
  /** 文件内容 */
  file?: File;

  /** 会话ID */
  conversationId?: string;
}

export type ElevoApi_FileUploadResponseBody = Partial<ModelElevoFile>;

/**
 * @description 文件上传接口，接收上传文件，解析文件内容，向量化存储
 * @endpoint POST /api/v1/elevo/files/upload
 */
export const ElevoApi_fileUpload = async (
  data: ElevoApi_FileUploadRequestBody,
  options?: HttpOptions
): Promise<ElevoApi_FileUploadResponseBody> => {
  /**! @contract easyops.api.llm.elevo.FileUpload@1.0.0 */ const _formData =
    new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      const k = `${key}[]`;
      value.forEach((v) => {
        _formData.append(k, v);
      });
    } else {
      _formData.append(key, value);
    }
  }
  return (
    await http.post<ResponseBodyWrapper<ElevoApi_FileUploadResponseBody>>(
      "api/gateway/logic.llm.aiops_service/api/v1/elevo/files/upload",
      _formData,
      options
    )
  ).data;
};
