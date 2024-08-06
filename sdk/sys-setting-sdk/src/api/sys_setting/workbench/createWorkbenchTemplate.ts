import { http, HttpOptions } from "@next-core/http";
import { ModelWorkbenchHubTemplate } from "../../../model/sys_setting/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type WorkbenchApi_CreateWorkbenchTemplateRequestBody =
  Partial<ModelWorkbenchHubTemplate>;

export type WorkbenchApi_CreateWorkbenchTemplateResponseBody =
  Partial<ModelWorkbenchHubTemplate>;

/**
 * @description 新增工作台模板
 * @endpoint POST /api/sys_setting/v1/workbench/template
 */
export const WorkbenchApi_createWorkbenchTemplate = async (
  data: WorkbenchApi_CreateWorkbenchTemplateRequestBody,
  options?: HttpOptions
): Promise<WorkbenchApi_CreateWorkbenchTemplateResponseBody> =>
  /**! @contract easyops.api.sys_setting.workbench.CreateWorkbenchTemplate@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<WorkbenchApi_CreateWorkbenchTemplateResponseBody>
    >(
      "api/gateway/sys_setting.workbench.CreateWorkbenchTemplate/api/sys_setting/v1/workbench/template",
      data,
      options
    )
  ).data;
