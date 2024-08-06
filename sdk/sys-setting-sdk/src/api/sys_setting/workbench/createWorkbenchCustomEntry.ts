import { http, HttpOptions } from "@next-core/http";
import { ModelWorkbenchCustomEntry } from "../../../model/sys_setting/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface WorkbenchApi_CreateWorkbenchCustomEntryRequestBody {
  /** 标题 */
  title?: string;

  /** 类型: example: normal/small/iframe */
  type?: string;

  /** 卡片内容 */
  list?: Record<string, any>[];
}

export type WorkbenchApi_CreateWorkbenchCustomEntryResponseBody =
  Partial<ModelWorkbenchCustomEntry>;

/**
 * @description 创建工作台自定义入口
 * @endpoint POST /api/sys_setting/v1/workbench_custom_entry
 */
export const WorkbenchApi_createWorkbenchCustomEntry = async (
  data: WorkbenchApi_CreateWorkbenchCustomEntryRequestBody,
  options?: HttpOptions
): Promise<WorkbenchApi_CreateWorkbenchCustomEntryResponseBody> =>
  /**! @contract easyops.api.sys_setting.workbench.CreateWorkbenchCustomEntry@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<WorkbenchApi_CreateWorkbenchCustomEntryResponseBody>
    >(
      "api/gateway/sys_setting.workbench.CreateWorkbenchCustomEntry/api/sys_setting/v1/workbench_custom_entry",
      data,
      options
    )
  ).data;
