import { http, HttpOptions } from "@next-core/http";

/**
 * @description 删除工作台模板
 * @endpoint DELETE /api/sys_setting/v1/workbench/template/:instanceId
 */
export const WorkbenchApi_deleteWorkbenchTemplate = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.sys_setting.workbench.DeleteWorkbenchTemplate@1.0.0 */ http.delete<void>(
    `api/gateway/sys_setting.workbench.DeleteWorkbenchTemplate/api/sys_setting/v1/workbench/template/${instanceId}`,
    options
  );
