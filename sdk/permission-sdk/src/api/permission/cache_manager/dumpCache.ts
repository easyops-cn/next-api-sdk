import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type CacheManagerApi_DumpCacheResponseBody = Record<string, any>;

/**
 * @description 获取cache缓存全量数据
 * @endpoint GET /api/v1/permission/cache_manager
 */
export const CacheManagerApi_dumpCache = async (
  options?: HttpOptions
): Promise<CacheManagerApi_DumpCacheResponseBody> =>
  /**! @contract easyops.api.permission.cache_manager.DumpCache@1.1.0 */ (
    await http.get<ResponseBodyWrapper<CacheManagerApi_DumpCacheResponseBody>>(
      "api/gateway/logic.permission/api/v1/permission/cache_manager",
      options
    )
  ).data;
