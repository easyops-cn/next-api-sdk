import { http, HttpOptions } from "@next-core/http";
import { ModelLaunchpadCollection } from "../../../model/user_service/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface LaunchpadApi_CreateCollectionRequestBody {
  /** LaunchpadCollection */
  launchpadCollection?: Partial<ModelLaunchpadCollection>;

  /** microApp Id, 当type为microApp时必填 */
  microAppId?: string;
}

export interface LaunchpadApi_CreateCollectionResponseBody {
  /** LaunchpadCollection instanceId */
  launchpadInstanceId: string;
}

/**
 * @description 新增我的收藏
 * @endpoint POST /api/v1/launchpad/collection
 */
export const LaunchpadApi_createCollection = async (
  data: LaunchpadApi_CreateCollectionRequestBody,
  options?: HttpOptions
): Promise<LaunchpadApi_CreateCollectionResponseBody> =>
  /**! @contract easyops.api.user_service.launchpad.CreateCollection@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<LaunchpadApi_CreateCollectionResponseBody>
    >(
      "api/gateway/user_service.launchpad.CreateCollection/api/v1/launchpad/collection",
      data,
      options
    )
  ).data;
