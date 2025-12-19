import { ModelElevoCmd } from "./index.js";

/** Elevo触发器模型 */
export interface ModelElevoTrigger {
  /** 触发器实例ID */
  instanceId: string;

  /** 触发器名称 */
  name: string;

  /** 触发活动、动作 */
  action: ModelElevoTrigger_action;

  /** 触发器类型 */
  triggerType: "SCHEDULE" | "WEBHOOK" | "POLLING";

  /** 是否禁用 */
  disable: boolean;

  /** cron表达式，用于定时触发 */
  cronExpression: string;

  /** webhook配置 */
  webhookConfig: ModelElevoTrigger_webhookConfig;

  /** 轮询配置 */
  pollingConfig: ModelElevoTrigger_pollingConfig;

  /** 过滤配置列表 */
  filterConfig: ModelElevoTrigger_filterConfig_item[];

  /** 创建者 */
  creator: string;

  /** 创建时间 */
  ctime: string;

  /** 修改者 */
  modifier: string;

  /** 修改时间 */
  mtime: string;
}

export interface ModelElevoTrigger_action {
  /** 需求描述 */
  requirement?: string;

  /** 聊天指令 */
  cmd?: Partial<ModelElevoCmd>;
}

export interface ModelElevoTrigger_webhookConfig {
  /** webhook地址 */
  url?: string;
}

export interface ModelElevoTrigger_pollingConfig {
  /** 轮询地址 */
  url?: string;

  /** 请求方法 */
  method?: string;

  /** 认证类型 */
  authType?: "basic" | "oauth2" | "apiKey";

  /** Basic认证配置（authType为basic时需要） */
  basicConfig?: ModelElevoTrigger_pollingConfig_basicConfig;

  /** OAuth2认证配置（authType为oauth2时需要） */
  oauth2Config?: ModelElevoTrigger_pollingConfig_oauth2Config;

  /** API Key认证配置（authType为apiKey时需要） */
  apiKeyConfig?: ModelElevoTrigger_pollingConfig_apiKeyConfig;
}

export interface ModelElevoTrigger_filterConfig_item {
  /** 过滤字段 */
  field?: string;

  /** 操作符 */
  operator?: "EQUAL" | "NOT_EQUAL" | "CONTAINS" | "NOT_CONTAINS";

  /** 过滤值 */
  value?: string;
}

export interface ModelElevoTrigger_pollingConfig_basicConfig {
  /** 认证头部字段名，默认Authorization */
  headerKey?: string;

  /** 用户名 */
  username?: string;

  /** 密码 */
  password?: string;
}

export interface ModelElevoTrigger_pollingConfig_oauth2Config {
  /** 获取access_token的URL */
  authUrl?: string;

  /** OAuth2客户端ID */
  clientId?: string;

  /** OAuth2客户端密钥 */
  clientSecret?: string;

  /** 请求scope，多个scope以空格分隔 */
  scope?: string;

  /** 注入访问令牌的请求头字段名，默认Authorization */
  headerKey?: string;
}

export interface ModelElevoTrigger_pollingConfig_apiKeyConfig {
  /** 携带API Key的请求头字段名 */
  headerKey?: string;

  /** API Key值 */
  apiKey?: string;
}
