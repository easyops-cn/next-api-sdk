import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoConnectorApi_CreateConnectorCredentialRequestBody {
  /** 连接器ID，如dingtalk_bot */
  connectorId: string;

  /** 凭证所有者类型：personal或org */
  ownerType: string;

  /** 凭证数据，根据连接器的authConfig.fields定义 */
  credentials?: Record<string, any>;
}

export interface ElevoConnectorApi_CreateConnectorCredentialResponseBody {
  /** 创建的凭证实例ID */
  credentialId: string;

  /** 创建是否成功 */
  success: boolean;
}

/**
 * @description 创建连接器凭证（API Key认证方式），用于团队连接器如钉钉机器人
 * @endpoint POST /api/v1/connector/credential
 */
export const ElevoConnectorApi_createConnectorCredential = async (
  data: ElevoConnectorApi_CreateConnectorCredentialRequestBody,
  options?: HttpOptions
): Promise<ElevoConnectorApi_CreateConnectorCredentialResponseBody> =>
  /**! @contract easyops.api.llm.elevo_connector.CreateConnectorCredential@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoConnectorApi_CreateConnectorCredentialResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/connector/credential",
      data,
      options
    )
  ).data;
