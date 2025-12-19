/** 连接器凭证模型 (CONNECTOR_CREDENTIAL@AI) */
export interface ModelConnectorCredential {
  /** 实例ID */
  instanceId: string;

  /** 所有者类型 */
  ownerType: "personal" | "org";

  /** 加密后的凭证数据 */
  credentialData: string;

  /** 凭证状态 */
  status: "active" | "expired" | "invalid";

  /** 过期时间 (ISO 8601格式) */
  expiresAt: string;

  /** 创建者 */
  creator: string;

  /** 创建时间 */
  ctime: string;

  /** 修改者 */
  modifier: string;

  /** 修改时间 */
  mtime: string;
}
