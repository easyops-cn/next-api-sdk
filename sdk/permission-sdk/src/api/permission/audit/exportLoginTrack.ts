import { http, HttpOptions } from "@next-core/http";

export interface AuditApi_ExportLoginTrackRequestBody {
  /** 页码 */
  page: number;

  /** 页大小 */
  pageSize: number;

  /** 操作过滤条件 */
  operation?: string[];

  /** 登录用户过滤条件 */
  user?: string;

  /** IP 过滤条件 */
  ip?: string;

  /** 起始时间，支持时间戳和now-1d语义 */
  from?: string;

  /** 终止时间，支持时间戳和now-1d语义 */
  to?: string;

  /** 操作结果 */
  status?: "success" | "fail";
}

/**
 * @description 将登录轨迹列表导出为文件
 * @endpoint POST /api/v1/audit/login_track/excel
 */
export const AuditApi_exportLoginTrack = (
  data: AuditApi_ExportLoginTrackRequestBody,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.permission.audit.ExportLoginTrack@1.0.0 */ http.post<Blob>(
    "api/gateway/logic.permission/api/v1/audit/login_track/excel",
    data,
    { ...options, responseType: "blob" }
  );
