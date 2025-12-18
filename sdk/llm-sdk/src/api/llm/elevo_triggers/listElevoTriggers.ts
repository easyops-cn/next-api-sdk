import { http, HttpOptions } from "@next-core/http";
import { ModelElevoTrigger } from "../../../model/llm/index.js";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoTriggersApi_ListElevoTriggersRequestParams {
  /** 页码 */
  page?: number;

  /** 每页数量 */
  pageSize?: number;
}

export type ElevoTriggersApi_ListElevoTriggersResponseItem =
  Partial<ModelElevoTrigger>;

export type ElevoTriggersApi_ListElevoTriggersResponseBody =
  ResponseListWrapper<ElevoTriggersApi_ListElevoTriggersResponseItem>;

/**
 * @description 查询Elevo触发器列表
 * @endpoint LIST /api/v1/elevo/triggers
 */
export const ElevoTriggersApi_listElevoTriggers = async (
  params: ElevoTriggersApi_ListElevoTriggersRequestParams,
  options?: HttpOptions
): Promise<ElevoTriggersApi_ListElevoTriggersResponseBody> =>
  /**! @contract easyops.api.llm.elevo_triggers.ListElevoTriggers@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoTriggersApi_ListElevoTriggersResponseBody>
    >("api/gateway/logic.llm.aiops_service/api/v1/elevo/triggers", {
      ...options,
      params,
    })
  ).data;
