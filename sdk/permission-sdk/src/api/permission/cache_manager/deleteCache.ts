import { http, HttpOptions } from "@next-core/http";

export interface CacheManagerApi_DeleteCacheRequestParams {
  /** 清理的模式, 广播其他节点清理还是只清理当前节点 */
  mode?: "broadcast" | "local";
}

/**
 * @description 清空缓存
 * @endpoint DELETE /api/v1/permission/cache_manager
 */
export const CacheManagerApi_deleteCache = (
  params: CacheManagerApi_DeleteCacheRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.permission.cache_manager.DeleteCache@1.1.0 */ http.delete<void>(
    "api/gateway/logic.permission/api/v1/permission/cache_manager",
    { ...options, params }
  );
