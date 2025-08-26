import { http, HttpOptions } from "@next-core/http";
import { ModelElevoAiEmployee } from "../../../model/llm/index.js";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_ListElevoAiEmployeesByProjectRequestParams {
  /** 页码 */
  page?: number;

  /** 每页数量 */
  page_size?: number;

  /** 搜索关键词 */
  key?: string;

  /** 状态过滤 */
  state?: string;
}

export type ElevoApi_ListElevoAiEmployeesByProjectResponseItem =
  Partial<ModelElevoAiEmployee>;

export type ElevoApi_ListElevoAiEmployeesByProjectResponseBody =
  ResponseListWrapper<ElevoApi_ListElevoAiEmployeesByProjectResponseItem>;

/**
 * @description 获取指定项目的elevo数字人列表
 * @endpoint list /api/v1/elevo/ai-employees/by-project/:projectId
 */
export const ElevoApi_listElevoAiEmployeesByProject = async (
  projectId: string | number,
  params: ElevoApi_ListElevoAiEmployeesByProjectRequestParams,
  options?: HttpOptions
): Promise<ElevoApi_ListElevoAiEmployeesByProjectResponseBody> =>
  /**! @contract easyops.api.llm.elevo.ListElevoAiEmployeesByProject@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoApi_ListElevoAiEmployeesByProjectResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/ai-employees/by-project/${projectId}`,
      { ...options, params }
    )
  ).data;
