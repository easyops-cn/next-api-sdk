import { http, HttpOptions } from "@next-core/http";

/**
 * @description 获取组织架构相关导入模板，模板中有填写规则
 * @endpoint GET /api/sys_setting/v1/file/organization/import_template/:object
 */
export const OrganizationApi_getImportTemplate = (
  object: string | number,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.sys_setting.organization.GetImportTemplate@1.0.0 */ http.get<Blob>(
    `api/gateway/sys_setting.organization.GetImportTemplate/api/sys_setting/v1/file/organization/import_template/${object}`,
    { ...options, responseType: "blob" }
  );
