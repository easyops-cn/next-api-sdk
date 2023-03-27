import { http, HttpOptions } from "@next-core/http";
import { ModelInstanceQueryStrategy } from "../../../model/cmdb/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type InstanceApi_GetInstanceQueryStrategyResponseBody =
  Partial<ModelInstanceQueryStrategy>;

/**
 * @description 获取实例查询策略
 * @endpoint GET /object/:objectId/query/strategy/:strategyId
 */
export const InstanceApi_getInstanceQueryStrategy = async (
  objectId: string | number,
  strategyId: string | number,
  options?: HttpOptions
): Promise<InstanceApi_GetInstanceQueryStrategyResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.GetInstanceQueryStrategy@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<InstanceApi_GetInstanceQueryStrategyResponseBody>
    >(
      `api/gateway/cmdb.instance.GetInstanceQueryStrategy/object/${objectId}/query/strategy/${strategyId}`,
      options
    )
  ).data;
