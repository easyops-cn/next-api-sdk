import { http, HttpOptions } from "@next-core/http";
import { ModelElevoAiEmployee } from "../../../model/llm/index.js";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_ListElevoAiEmployeesRequestParams {
  /** 项目ID */
  projectId?: string;

  /** 页码 */
  page?: number;

  /** 每页数量 */
  page_size?: number;

  /** 搜索关键词，多个用","分开 */
  key?: string;

  /** 状态过滤 */
  state?: string;

  /** 数字人id，相等匹配 */
  employeeId?: string;

  /** 所有者实例ID */
  ownerInstanceId?: string;

  /** 过滤数字分身，为false时不过滤，为true时不会返回数字分身 */
  notAiSelf?: boolean;
}

export type ElevoApi_ListElevoAiEmployeesResponseItem =
  Partial<ModelElevoAiEmployee>;

export type ElevoApi_ListElevoAiEmployeesResponseBody =
  ResponseListWrapper<ElevoApi_ListElevoAiEmployeesResponseItem>;

/**
 * @description 获取elevo数字人列表
 * @endpoint list /api/v1/elevo/ai-employees
 */
export const ElevoApi_listElevoAiEmployees = async (
  params: ElevoApi_ListElevoAiEmployeesRequestParams,
  options?: HttpOptions
): Promise<ElevoApi_ListElevoAiEmployeesResponseBody> =>
  /**! @contract easyops.api.llm.elevo.ListElevoAiEmployees@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoApi_ListElevoAiEmployeesResponseBody>
    >("api/gateway/logic.llm.aiops_service/api/v1/elevo/ai-employees", {
      ...options,
      params,
    })
  ).data;
