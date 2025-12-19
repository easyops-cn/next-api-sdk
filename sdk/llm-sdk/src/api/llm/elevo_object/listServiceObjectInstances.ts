import { http, HttpOptions } from "@next-core/http";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoObjectApi_ListServiceObjectInstancesRequestParams {
  /** 关键字匹配查询 */
  keyword?: string;

  /** 页码（从1开始） */
  page?: number;

  /** 每页数量 */
  pageSize?: number;

  /** 是否带出实例关系数据，默认为true */
  withRelations?: boolean;
}

/** 实例对象（动态字段，根据不同对象类型字段不同） */
export type ElevoObjectApi_ListServiceObjectInstancesResponseItem = Record<
  string,
  any
>;

export type ElevoObjectApi_ListServiceObjectInstancesResponseBody =
  ResponseListWrapper<ElevoObjectApi_ListServiceObjectInstancesResponseItem>;

/**
 * @description 查询服务对象实例列表
 * @endpoint list /api/v1/elevo/objects/:objectId/instances
 */
export const ElevoObjectApi_listServiceObjectInstances = async (
  objectId: string | number,
  params: ElevoObjectApi_ListServiceObjectInstancesRequestParams,
  options?: HttpOptions
): Promise<ElevoObjectApi_ListServiceObjectInstancesResponseBody> =>
  /**! @contract easyops.api.llm.elevo_object.ListServiceObjectInstances@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoObjectApi_ListServiceObjectInstancesResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/objects/${objectId}/instances`,
      { ...options, params }
    )
  ).data;
