import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ApikeyApi_CreateServerApiKeyRequestBody {
  /** clientId, 一般为组件的 appId */
  clientId: string;

  /** 内部生成的签名信息, 用于校验请求是否合法, 防止接口被随意调用 */
  signature: string;
}

export interface ApikeyApi_CreateServerApiKeyResponseBody {
  /** clientId 对应的实例是否存在 */
  isExisting?: boolean;

  /** api 账号的 access_key */
  secret?: string;
}

/**
 * @description 创建服务类型的 apiKey
 * @endpoint POST /api/v1/apikey/server
 */
export const ApikeyApi_createServerApiKey = async (
  data: ApikeyApi_CreateServerApiKeyRequestBody,
  options?: HttpOptions
): Promise<ApikeyApi_CreateServerApiKeyResponseBody> =>
  /**! @contract easyops.api.user_service.apikey.CreateServerApiKey@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ApikeyApi_CreateServerApiKeyResponseBody>
    >("api/gateway/logic.user_service/api/v1/apikey/server", data, options)
  ).data;
