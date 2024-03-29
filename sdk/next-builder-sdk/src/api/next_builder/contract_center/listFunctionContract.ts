import { http, HttpOptions } from "@next-core/http";
import { ModelFlowBuilderContractNamespace } from "../../../model/flow_builder/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ContractCenterApi_ListFunctionContractRequestParams {
  /** namespaceId */
  namespaceId?: string;

  /** 查询条件：project instanceId */
  projectInstanceId?: string;
}

export interface ContractCenterApi_ListFunctionContractResponseBody {
  /** 函数契约列表 */
  list?: ContractCenterApi_ListFunctionContractResponseBody_list_item[];
}

/**
 * @description 函数契约列表
 * @endpoint GET /api/v1/contract/function
 */
export const ContractCenterApi_listFunctionContract = async (
  params: ContractCenterApi_ListFunctionContractRequestParams,
  options?: HttpOptions
): Promise<ContractCenterApi_ListFunctionContractResponseBody> =>
  /**! @contract easyops.api.next_builder.contract_center.ListFunctionContract@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ContractCenterApi_ListFunctionContractResponseBody>
    >(
      "api/gateway/next_builder.contract_center.ListFunctionContract/api/v1/contract/function",
      { ...options, params }
    )
  ).data;

export interface ContractCenterApi_ListFunctionContractResponseBody_list_item {
  /** instanceId */
  instanceId?: string;

  /** name */
  name?: string;

  /** language */
  language?: "golang" | "java" | "js" | "python" | "rust" | "c" | "c++";

  /** 契约对应的命名空间信息 */
  namespace?: Partial<ModelFlowBuilderContractNamespace>;

  /** namespaceId */
  namespaceId?: string;

  /** 单个函数契约的最新版本 */
  latestVersion?: string;

  /** creator */
  creator?: string;

  /** modifier */
  modifier?: string;
}
