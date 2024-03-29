import { http, HttpOptions } from "@next-core/http";

export interface ImportAndExportApi_ProjectImportRequestBody {
  /** 微应用的tar包 */
  file?: File;

  /** 如果APP已经存在是否允许覆盖，是则会删除和重建APP相关数据，否则会在已有基础上更新，但可能会存在部分无法使用的数据 */
  rebuild?: boolean;
}

/**
 * @description 微应用导入
 * @endpoint POST /api/v1/next_builder/project_import
 */
export const ImportAndExportApi_projectImport = (
  data: ImportAndExportApi_ProjectImportRequestBody,
  options?: HttpOptions
): Promise<void> => {
  /**! @contract easyops.api.next_builder.import_and_export.ProjectImport@1.0.0 */ const _formData =
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
    "api/gateway/next_builder.import_and_export.ProjectImport/api/v1/next_builder/project_import",
    _formData,
    options
  );
};
