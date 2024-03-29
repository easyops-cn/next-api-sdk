import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface MockRuleApi_ListMockServiceRequestBody {
  /** queryCondition */
  queryCondition?: Record<string, any>;

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;
}

/** mock服务列表 */
export interface MockRuleApi_ListMockServiceResponseBody {
  /** 列表数据 */
  list?: MockRuleApi_ListMockServiceResponseBody_list_item[];

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** 实例总数 */
  total?: number;
}

/**
 * @description mock服务列表
 * @endpoint POST /api/v1/mock_service/list
 */
export const MockRuleApi_listMockService = async (
  data: MockRuleApi_ListMockServiceRequestBody,
  options?: HttpOptions
): Promise<MockRuleApi_ListMockServiceResponseBody> =>
  /**! @contract easyops.api.next_builder.mock_rule.ListMockService@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<MockRuleApi_ListMockServiceResponseBody>
    >(
      "api/gateway/next_builder.mock_rule.ListMockService/api/v1/mock_service/list",
      data,
      options
    )
  ).data;

export interface MockRuleApi_ListMockServiceResponseBody_list_item {
  /** 契约命名空间 */
  namespaceId?: string;

  /** 契约名称 */
  name?: string;

  /** 描述信息 */
  description?: string;

  /** mock规则数量 */
  mockRuleNumber?: number;
}
