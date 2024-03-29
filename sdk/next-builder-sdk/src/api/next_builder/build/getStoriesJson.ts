import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface BuildApi_GetStoriesJsonResponseBody {
  /** 所有stories.json整合后的数组 */
  list?: Record<string, any>[];
}

/**
 * @description 获取stories.json (stories.json是构件编译时生成的，包含了构件的文档信息。 本接口返回所有构件的stories.json文件的结构化内容。)
 * @endpoint GET /api/v1/next-builder/storiesjson
 */
export const BuildApi_getStoriesJson = async (
  options?: HttpOptions
): Promise<BuildApi_GetStoriesJsonResponseBody> =>
  /**! @contract easyops.api.next_builder.build.GetStoriesJson@1.0.0 */ (
    await http.get<ResponseBodyWrapper<BuildApi_GetStoriesJsonResponseBody>>(
      "api/gateway/next_builder.build.GetStoriesJson/api/v1/next-builder/storiesjson",
      options
    )
  ).data;
