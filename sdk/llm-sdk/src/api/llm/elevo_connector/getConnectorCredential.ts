import { http, HttpOptions } from "@next-core/http";
import { ModelConnector } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoConnectorApi_GetConnectorCredentialResponseBody {
  /** 凭证实例ID */
  instanceId: string;

  /** 凭证所有者类型：personal或org */
  ownerType: string;

  /** 加密的凭证数据（永远不返回解密后的token） */
  credentialData: string;

  /** 凭证状态：active、expired、revoked */
  status: string;

  /** 凭证过期时间（RFC3339格式） */
  expiresAt?: string;

  /** 创建者 */
  creator?: string;

  /** 创建时间 */
  ctime?: string;

  /** 修改者 */
  modifier?: string;

  /** 修改时间 */
  mtime?: string;

  /** 关联的连接器信息 */
  connector?: Partial<ModelConnector>;

  /** 凭证字段的展示数据（仅用于前端回填），password类型字段脱敏显示 */
  credentialFields?: Record<string, any>;
}

/**
 * @description 查询单个连接器凭证详情，返回加密的凭证数据
 * @endpoint GET /api/v1/connector/credential/:instanceId
 */
export const ElevoConnectorApi_getConnectorCredential = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<ElevoConnectorApi_GetConnectorCredentialResponseBody> =>
  /**! @contract easyops.api.llm.elevo_connector.GetConnectorCredential@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoConnectorApi_GetConnectorCredentialResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/connector/credential/${instanceId}`,
      options
    )
  ).data;
