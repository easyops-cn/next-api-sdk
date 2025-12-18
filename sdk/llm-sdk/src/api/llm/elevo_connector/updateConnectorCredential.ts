import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoConnectorApi_UpdateConnectorCredentialRequestBody {
  /** 新的凭证数据 */
  credentials: Record<string, any>;
}

export interface ElevoConnectorApi_UpdateConnectorCredentialResponseBody {
  /** 更新是否成功 */
  success: boolean;

  /** 凭证实例ID */
  credentialId: string;
}

/**
 * @description 更新连接器凭证信息
 * @endpoint PUT /api/v1/connector/credential/:instanceId
 */
export const ElevoConnectorApi_updateConnectorCredential = async (
  instanceId: string | number,
  data: ElevoConnectorApi_UpdateConnectorCredentialRequestBody,
  options?: HttpOptions
): Promise<ElevoConnectorApi_UpdateConnectorCredentialResponseBody> =>
  /**! @contract easyops.api.llm.elevo_connector.UpdateConnectorCredential@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<ElevoConnectorApi_UpdateConnectorCredentialResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/connector/credential/${instanceId}`,
      data,
      options
    )
  ).data;
