import { http, HttpOptions } from "@next-core/http";

export interface ElevoConnectorApi_HandleOAuth2CallbackRequestParams {
  /** OAuth授权码 */
  code: string;

  /** state参数，用于验证请求来源和获取PKCE session */
  state: string;
}

/**
 * @description 处理OAuth2回调，验证state、交换token、存储凭证，然后重定向到前端
 * @endpoint GET /api/v1/connector/oauth2/callback
 */
export const ElevoConnectorApi_handleOAuth2Callback = (
  params: ElevoConnectorApi_HandleOAuth2CallbackRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo_connector.HandleOAuth2Callback@1.0.0 */ http.get<void>(
    "api/gateway/logic.llm.aiops_service/api/v1/connector/oauth2/callback",
    { ...options, params }
  );
