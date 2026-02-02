import { http, HttpOptions } from "@next-core/http";
import { ModelResourceAction } from "../../../model/permission/index.js";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper.js";

export interface ResourceActionApi_SearchActionRequestParams {
  /** id模糊查询，和其他查询条件共存时与关系 */
  likeId?: string;

  /** 资源类型，和其他查询条件共存时与关系 */
  resourceType?: string;

  /** 相关资源 */
  resource?: string;

  /** 动作点类型，和其他查询条件共存时与关系 */
  accessLevel?: "Read" | "Write" | "List";

  /** 所属模块的id */
  systemModuleId?: string;

  /** 权限点是否被禁用, 为空表示不设置查询条件 */
  disable?: "" | "true" | "false";

  /** page */
  page: number;

  /** page_size */
  pageSize: number;
}

/** 权限点结果列表 */
export type ResourceActionApi_SearchActionResponseItem =
  Partial<ModelResourceAction>;

export type ResourceActionApi_SearchActionResponseBody =
  ResponseListWrapper<ResourceActionApi_SearchActionResponseItem>;

/**
 * @description 查询基于策略的权限动作
 * @endpoint LIST /api/v1/resource_action/search
 */
export const ResourceActionApi_searchAction = async (
  params: ResourceActionApi_SearchActionRequestParams,
  options?: HttpOptions
): Promise<ResourceActionApi_SearchActionResponseBody> =>
  /**! @contract easyops.api.permission.resource_action.SearchAction@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ResourceActionApi_SearchActionResponseBody>
    >("api/gateway/logic.permission/api/v1/resource_action/search", {
      ...options,
      params,
    })
  ).data;
