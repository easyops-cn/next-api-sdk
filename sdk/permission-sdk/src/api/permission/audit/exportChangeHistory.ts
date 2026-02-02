import { http, HttpOptions } from "@next-core/http";

export interface AuditApi_ExportChangeHistoryRequestBody {
  /** 页码 */
  page: number;

  /** 页大小 */
  pageSize: number;

  /** 操作过滤条件 */
  operation?: string[];

  /** 执行用户过滤条件 */
  operator?: string;

  /** 变更摘要过滤条件 */
  detail?: string;

  /** 起始时间，支持时间戳和now-1d语义 */
  from?: string;

  /** 终止时间，支持时间戳和now-1d语义 */
  to?: string;

  /** 操作结果 */
  status?: "success" | "fail";
}

/**
 * @description 将变更历史列表导出为文件
 * @endpoint POST /api/v1/audit/change_history/excel
 */
export const AuditApi_exportChangeHistory = (
  data: AuditApi_ExportChangeHistoryRequestBody,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.permission.audit.ExportChangeHistory@1.0.0 */ http.post<Blob>(
    "api/gateway/logic.permission/api/v1/audit/change_history/excel",
    data,
    { ...options, responseType: "blob" }
  );
