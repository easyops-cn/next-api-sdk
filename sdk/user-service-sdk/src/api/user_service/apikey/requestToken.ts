import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ApikeyApi_RequestTokenRequestParams {
  /** 签名信息 */
  signature: string;

  /** 用户名 */
  user: string;

  /** 组织id */
  org: number;
}

export interface ApikeyApi_RequestTokenResponseBody {
  /** token */
  token?: string;

  /** refreshToken */
  refreshToken?: string;
}

/**
 * @description 组件根据 clientId 和 signature 来申请 token
 * @endpoint GET /api/v1/apikey/request_token/client_id/:clientId
 */
export const ApikeyApi_requestToken = async (
  clientId: string | number,
  params: ApikeyApi_RequestTokenRequestParams,
  options?: HttpOptions
): Promise<ApikeyApi_RequestTokenResponseBody> =>
  /**! @contract easyops.api.user_service.apikey.RequestToken@1.0.0 */ (
    await http.get<ResponseBodyWrapper<ApikeyApi_RequestTokenResponseBody>>(
      `api/gateway/logic.user_service/api/v1/apikey/request_token/client_id/${clientId}`,
      { ...options, params }
    )
  ).data;
