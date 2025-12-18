import { http, HttpOptions } from "@next-core/http";
import { ModelConnector } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoConnectorApi_ListConnectorRequestParams {
  /** 连接器分类过滤,如'代码管理'、'协作工具'等 */
  category?: string;

  /** 连接器类型过滤: personal, team, dual */
  connectorType?: string;

  /** 当前用户/组织是否已配置: configured, unconfigured. 如果是空，则不过滤 */
  configured?: string;
}

export interface ElevoConnectorApi_ListConnectorResponseBody {
  /** 连接器列表 */
  list?: (Partial<ModelConnector> &
    ElevoConnectorApi_ListConnectorResponseBody_list_item)[];
}

/**
 * @description 查询可用的连接器列表
 * @endpoint GET /api/v1/connector/list
 */
export const ElevoConnectorApi_listConnector = async (
  params: ElevoConnectorApi_ListConnectorRequestParams,
  options?: HttpOptions
): Promise<ElevoConnectorApi_ListConnectorResponseBody> =>
  /**! @contract easyops.api.llm.elevo_connector.ListConnector@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoConnectorApi_ListConnectorResponseBody>
    >("api/gateway/logic.llm.aiops_service/api/v1/connector/list", {
      ...options,
      params,
    })
  ).data;

export interface ElevoConnectorApi_ListConnectorResponseBody_list_item {
  /** 当前用户/组织是否已配置 */
  isConfigured?: boolean;
}
