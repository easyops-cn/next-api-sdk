import { http, HttpOptions } from "@next-core/http";
import { ModelWorkbenchCustomEntry } from "../../../model/sys_setting/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface WorkbenchApi_EditWorkbenchCustomEntryRequestBody {
  /** 标题 */
  title?: string;

  /** 类型: example: normal/small/iframe */
  type?: string;

  /** 卡片内容 */
  list?: Record<string, any>[];
}

export type WorkbenchApi_EditWorkbenchCustomEntryResponseBody =
  Partial<ModelWorkbenchCustomEntry>;

/**
 * @description 编辑工作台自定义入口
 * @endpoint PUT /api/sys_setting/v1/workbench_custom_entry/:instanceId
 */
export const WorkbenchApi_editWorkbenchCustomEntry = async (
  instanceId: string | number,
  data: WorkbenchApi_EditWorkbenchCustomEntryRequestBody,
  options?: HttpOptions
): Promise<WorkbenchApi_EditWorkbenchCustomEntryResponseBody> =>
  /**! @contract easyops.api.sys_setting.workbench.EditWorkbenchCustomEntry@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<WorkbenchApi_EditWorkbenchCustomEntryResponseBody>
    >(
      `api/gateway/sys_setting.workbench.EditWorkbenchCustomEntry/api/sys_setting/v1/workbench_custom_entry/${instanceId}`,
      data,
      options
    )
  ).data;
