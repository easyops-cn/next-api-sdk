import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoConnectorApi_DisconnectConnectorResponseBody {
  /** 删除是否成功 */
  success?: boolean;
}

/**
 * @description 删除连接器凭证,断开连接
 * @endpoint DELETE /api/v1/connector/credential/:instanceId
 */
export const ElevoConnectorApi_disconnectConnector = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<ElevoConnectorApi_DisconnectConnectorResponseBody> =>
  /**! @contract easyops.api.llm.elevo_connector.DisconnectConnector@1.0.0 */ (
    await http.delete<
      ResponseBodyWrapper<ElevoConnectorApi_DisconnectConnectorResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/connector/credential/${instanceId}`,
      options
    )
  ).data;
