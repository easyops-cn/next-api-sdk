import { http, HttpOptions } from "@next-core/http";
import {
  ModelConnectorCredential,
  ModelConnector,
} from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoConnectorApi_ListConnectorCredentialRequestParams {
  /** 连接器ID过滤(可选) */
  connectorId?: string;

  /** 所有者类型过滤: personal, team */
  ownerType?: string;
}

export interface ElevoConnectorApi_ListConnectorCredentialResponseBody {
  /** 凭证列表 */
  list?: (Partial<ModelConnectorCredential> &
    ElevoConnectorApi_ListConnectorCredentialResponseBody_list_item)[];
}

/**
 * @description 查询用户已配置的连接器凭证列表
 * @endpoint GET /api/v1/connector/credential/list
 */
export const ElevoConnectorApi_listConnectorCredential = async (
  params: ElevoConnectorApi_ListConnectorCredentialRequestParams,
  options?: HttpOptions
): Promise<ElevoConnectorApi_ListConnectorCredentialResponseBody> =>
  /**! @contract easyops.api.llm.elevo_connector.ListConnectorCredential@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoConnectorApi_ListConnectorCredentialResponseBody>
    >("api/gateway/logic.llm.aiops_service/api/v1/connector/credential/list", {
      ...options,
      params,
    })
  ).data;

export interface ElevoConnectorApi_ListConnectorCredentialResponseBody_list_item {
  /** 关联的连接器信息 */
  connector?: Partial<ModelConnector>;
}
