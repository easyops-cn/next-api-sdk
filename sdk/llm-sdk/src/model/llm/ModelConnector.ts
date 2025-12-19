/** 连接器定义模型 (CONNECTOR@AI) */
export interface ModelConnector {
  /** 实例ID */
  instanceId: string;

  /** 连接器唯一标识 */
  connectorId: string;

  /** 连接器名称(中文) */
  name: string;

  /** 连接器名称(英文) */
  nameEn: string;

  /** 连接器描述(中文) */
  description: string;

  /** 连接器描述(英文) */
  descriptionEn: string;

  /** 连接器详细说明(中文，Markdown格式) */
  detail: string;

  /** 连接器详细说明(英文，Markdown格式) */
  detailEn: string;

  /** 图标URL */
  icon: string;

  /** 认证类型 */
  authType: "oauth2" | "apikey" | "basic";

  /** 认证配置 */
  authConfig: ModelConnector_authConfig;

  /** 连接器类型 */
  connectorType: "personal" | "team" | "dual";

  /** MCP Server类型 */
  mcpServerType: "builtin" | "thirdparty";

  /** MCP Server标识 */
  mcpServerId: string;

  /** MCP Server配置(仅thirdparty需要) */
  mcpServerConfig: ModelConnector_mcpServerConfig;

  /** 创建者 */
  creator: string;

  /** 创建时间 */
  ctime: string;

  /** 修改者 */
  modifier: string;

  /** 修改时间 */
  mtime: string;
}

export interface ModelConnector_authConfig {
  /** OAuth2授权URL */
  authorizationUrl?: string;

  /** OAuth2 Token URL */
  tokenUrl?: string;

  /** 客户端ID */
  clientId?: string;

  /** 客户端密钥 */
  clientSecret?: string;

  /** OAuth2权限范围 */
  scopes?: string[];

  /** 帮助文本(中文) */
  helpText?: string;

  /** 帮助文本(英文) */
  helpTextEn?: string;

  /** API Key字段配置 */
  fields?: ModelConnector_authConfig_fields_item[];
}

export interface ModelConnector_mcpServerConfig {
  /** SSE端点 */
  endpoint?: string;

  /** 协议类型 */
  protocol?: string;

  /** 认证类型(oauth2/bearer/none) */
  authenticationType?: string;

  /** 来源类型(official/github/npm/binary) */
  sourceType?: string;
}

export interface ModelConnector_authConfig_fields_item {
  /** 字段名 */
  name?: string;

  /** 字段标签 */
  label?: string;

  /** 字段类型 */
  type?: string;

  /** 是否必填 */
  required?: boolean;

  /** 占位符 */
  placeholder?: string;

  /** 帮助文档链接 */
  helpDoc?: string;

  /** 帮助文本(中文) */
  helpText?: string;

  /** 帮助文本(英文) */
  helpTextEn?: string;
}
