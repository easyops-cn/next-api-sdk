import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoSpaceApi_DeleteActivityLogResponseBody {
  /** 删除是否成功 */
  success?: boolean;
}

/**
 * @description 删除活动记录
 * @endpoint DELETE /api/v1/elevo/spaces/:spaceId/activities/:activityId
 */
export const ElevoSpaceApi_deleteActivityLog = async (
  spaceId: string | number,
  activityId: string | number,
  options?: HttpOptions
): Promise<ElevoSpaceApi_DeleteActivityLogResponseBody> =>
  /**! @contract easyops.api.llm.elevo_space.DeleteActivityLog@1.0.0 */ (
    await http.delete<
      ResponseBodyWrapper<ElevoSpaceApi_DeleteActivityLogResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/spaces/${spaceId}/activities/${activityId}`,
      options
    )
  ).data;
