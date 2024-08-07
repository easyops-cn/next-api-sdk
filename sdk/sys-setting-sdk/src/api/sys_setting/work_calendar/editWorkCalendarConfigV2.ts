import { http, HttpOptions } from "@next-core/http";
import { ModelWorkCalendar } from "../../../model/sys_setting/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface WorkCalendarApi_EditWorkCalendarConfigV2RequestBody {
  /** 名称 */
  name: string;

  /** 备注 */
  memo?: string;

  /** 日历配置 */
  config: ModelWorkCalendar["config"];
}

export interface WorkCalendarApi_EditWorkCalendarConfigV2ResponseBody {
  /** ID(objectId类型) */
  id?: string;
}

/**
 * @description 增量修改日历配置,重新生成日历
 * @endpoint POST /api/sys_setting/v2/work/calendar/:id
 */
export const WorkCalendarApi_editWorkCalendarConfigV2 = async (
  id: string | number,
  data: WorkCalendarApi_EditWorkCalendarConfigV2RequestBody,
  options?: HttpOptions
): Promise<WorkCalendarApi_EditWorkCalendarConfigV2ResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.EditWorkCalendarConfigV2@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<WorkCalendarApi_EditWorkCalendarConfigV2ResponseBody>
    >(
      `api/gateway/sys_setting.work_calendar.EditWorkCalendarConfigV2/api/sys_setting/v2/work/calendar/${id}`,
      data,
      options
    )
  ).data;
