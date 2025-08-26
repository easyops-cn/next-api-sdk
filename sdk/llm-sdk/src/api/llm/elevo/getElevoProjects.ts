import { http, HttpOptions } from "@next-core/http";
import { ModelElevoProject } from "../../../model/llm/index.js";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_GetElevoProjectsRequestParams {
  /** 页码 */
  page?: number;

  /** 每页数量 */
  page_size?: number;

  /** 搜索关键词 */
  key?: string;

  /** 状态过滤 */
  state?: string;
}

export type ElevoApi_GetElevoProjectsResponseItem = Partial<ModelElevoProject>;

export type ElevoApi_GetElevoProjectsResponseBody =
  ResponseListWrapper<ElevoApi_GetElevoProjectsResponseItem>;

/**
 * @description 获取elevo项目列表
 * @endpoint list /api/v1/elevo/projects
 */
export const ElevoApi_getElevoProjects = async (
  params: ElevoApi_GetElevoProjectsRequestParams,
  options?: HttpOptions
): Promise<ElevoApi_GetElevoProjectsResponseBody> =>
  /**! @contract easyops.api.llm.elevo.GetElevoProjects@1.0.0 */ (
    await http.get<ResponseBodyWrapper<ElevoApi_GetElevoProjectsResponseBody>>(
      "api/gateway/logic.llm.aiops_service/api/v1/elevo/projects",
      { ...options, params }
    )
  ).data;
