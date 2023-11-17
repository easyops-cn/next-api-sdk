import { http, HttpOptions } from "@next-core/http";
import { ModelLaunchpadCollectionV2 } from "../../../model/user_service/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface LaunchpadApi_CreateCollectionV2RequestBody {
  /** microApp:微应用;customItem:自定义菜单项;link:自定义链接 */
  type: "microApp" | "customItem" | "link";

  /** 关联的microApp或者customItem的实例Id */
  relatedInstanceId: string;
}

export type LaunchpadApi_CreateCollectionV2ResponseBody =
  Partial<ModelLaunchpadCollectionV2>;

/**
 * @description 新增我的收藏V2
 * @endpoint POST /api/v2/launchpad/collection
 */
export const LaunchpadApi_createCollectionV2 = async (
  data: LaunchpadApi_CreateCollectionV2RequestBody,
  options?: HttpOptions
): Promise<LaunchpadApi_CreateCollectionV2ResponseBody> =>
  /**! @contract easyops.api.user_service.launchpad.CreateCollectionV2@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<LaunchpadApi_CreateCollectionV2ResponseBody>
    >(
      "api/gateway/user_service.launchpad.CreateCollectionV2/api/v2/launchpad/collection",
      data,
      options
    )
  ).data;
