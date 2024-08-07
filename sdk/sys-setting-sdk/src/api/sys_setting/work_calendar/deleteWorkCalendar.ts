import { http, HttpOptions } from "@next-core/http";

/**
 * @description 删除工作日历
 * @endpoint DELETE /api/sys_setting/v1/work/calendar/:ids
 */
export const WorkCalendarApi_deleteWorkCalendar = (
  ids: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.sys_setting.work_calendar.DeleteWorkCalendar@1.0.0 */ http.delete<void>(
    `api/gateway/sys_setting.work_calendar.DeleteWorkCalendar/api/sys_setting/v1/work/calendar/${ids}`,
    options
  );
