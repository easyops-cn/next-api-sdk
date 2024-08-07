import { http, HttpOptions } from "@next-core/http";
import { ModelWorkCalendar } from "../../../model/sys_setting/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface WorkCalendarApi_GetWorkCalendarByMonthRequestParams {
  /** 年份(默认为当前年份) */
  year?: number;

  /** 月份 */
  month: number;
}

export interface WorkCalendarApi_GetWorkCalendarByMonthResponseBody {
  /** ID(objectId类型) */
  id?: string;

  /** 名称 */
  name?: string;

  /** 工作日详情 */
  days?: ModelWorkCalendar["days"];

  /** 创建人 */
  creator?: string;

  /** 创建时间 */
  ctime?: number;

  /** 备注 */
  memo?: string;
}

/**
 * @description 获取日历的按月详情
 * @endpoint GET /api/sys_setting/v1/work/calendar_month/:id
 */
export const WorkCalendarApi_getWorkCalendarByMonth = async (
  id: string | number,
  params: WorkCalendarApi_GetWorkCalendarByMonthRequestParams,
  options?: HttpOptions
): Promise<WorkCalendarApi_GetWorkCalendarByMonthResponseBody> =>
  /**! @contract easyops.api.sys_setting.work_calendar.GetWorkCalendarByMonth@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<WorkCalendarApi_GetWorkCalendarByMonthResponseBody>
    >(
      `api/gateway/sys_setting.work_calendar.GetWorkCalendarByMonth/api/sys_setting/v1/work/calendar_month/${id}`,
      { ...options, params }
    )
  ).data;
