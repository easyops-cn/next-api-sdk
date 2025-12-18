import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoConnectorApi_GetConnectorMcpTokenResponseBody {
  /** MCP JWT Token */
  mcpToken: string;

  /** Token有效期（秒） */
  expiresIn: number;

  /** Token类型，固定为Bearer */
  tokenType: string;
}

/** 
 * @description 获取连接器的 MCP Token。连接器有三种模式，根据不同模式返回不同类型的 Token：

| 模式        | 判断条件                                    | 凭证来源                     | Token 刷新 |
|-------------|---------------------------------------------|------------------------------|------------|
| 直连模式    | authType == "oauth2" && mcpServerType == "" | CMDB credentialData          | 需要       |
| 伪装模式    | authType == "oauth2" && mcpServerType != "" | 签发 MCP JWT Token           | 不需要     |
| apikey 模式 | authType == "apikey"                        | 签发 MCP JWT Token           | 不需要     |

- 直连模式：用于 Notion 等直接对接外部 MCP server 的 OAuth 连接器，返回存储在 CMDB 中的外部 OAuth Token，过期时自动刷新
- 伪装模式：用于 Google Calendar 等通过我们 MCP Server 代理的连接器，MCP Server 内部持有外部 Token，客户端使用系统签发的 JWT
- apikey 模式：用于 API Key 认证的连接器，返回系统签发的 MCP JWT Token

* @endpoint GET /api/v1/elevo_connector/connector/:connectorId/mcp_token 
 */
export const ElevoConnectorApi_getConnectorMcpToken = async (
  connectorId: string | number,
  options?: HttpOptions
): Promise<ElevoConnectorApi_GetConnectorMcpTokenResponseBody> =>
  /**! @contract easyops.api.llm.elevo_connector.GetConnectorMCPToken@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoConnectorApi_GetConnectorMcpTokenResponseBody>
    >(
      `api/gateway/logic.llm_service/api/v1/elevo_connector/connector/${connectorId}/mcp_token`,
      options
    )
  ).data;
