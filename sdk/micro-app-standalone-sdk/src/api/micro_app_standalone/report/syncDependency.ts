import { http, HttpOptions } from "@next-core/http";

export interface ReportApi_SyncDependencyRequestBody {
  /** 依赖的压缩打包文件, 格式为tar.gz */
  file: File;

  /** 依赖名称 */
  depName: string;

  /** 依赖版本 */
  depVersion: string;

  /** 依赖类型 */
  depType: "bricks" | "templates" | "core" | "appResources";
}

/**
 * @description 同步依赖(包括框架、构件、图片)
 * @endpoint POST /api/v1/micro_app_standalone/sync_dependency
 */
export const ReportApi_syncDependency = (
  data: ReportApi_SyncDependencyRequestBody,
  options?: HttpOptions
): Promise<void> => {
  /**! @contract easyops.api.micro_app_standalone.report.SyncDependency@1.0.0 */ const _formData =
    new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      const k = `${key}[]`;
      value.forEach((v) => {
        _formData.append(k, v);
      });
    } else {
      _formData.append(key, value);
    }
  }
  return http.post<void>(
    "api/gateway/micro_app_standalone.report.SyncDependency/api/v1/micro_app_standalone/sync_dependency",
    _formData,
    options
  );
};
