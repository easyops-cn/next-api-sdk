import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoConnectorApi_ConnectConnectorRequestBody {
  /** 连接器ID，如notion、google_calendar */
  connectorId: string;

  /** 凭证所有者类型：personal或org */
  ownerType?: string;
}

export interface ElevoConnectorApi_ConnectConnectorResponseBody {
  /** OAuth授权URL，包含PKCE参数 */
  authUrl: string;
}

/**
 * @description 生成OAuth授权URL，用于连接第三方连接器
 * @endpoint POST /api/v1/connector/connect
 */
export const ElevoConnectorApi_connectConnector = async (
  data: ElevoConnectorApi_ConnectConnectorRequestBody,
  options?: HttpOptions
): Promise<ElevoConnectorApi_ConnectConnectorResponseBody> =>
  /**! @contract easyops.api.llm.elevo_connector.ConnectConnector@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoConnectorApi_ConnectConnectorResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/connector/connect",
      data,
      options
    )
  ).data;
