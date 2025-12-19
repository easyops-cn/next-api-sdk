import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_SubStepDataSourceRequestBody {
  /** MCP工具的参数，JSON字符串格式 */
  params: Record<string, any>;
}

/** MCP工具执行结果 */
export type ElevoApi_SubStepDataSourceResponseBody = Record<string, any>;

/**
 * @description 映射的MCP数据源，根据 conversationId,stepId ，调用 mcp 工具以获取
 * @endpoint POST /api/v1/elevo/conversation/:conversationId/step/:stepId/view
 */
export const ElevoApi_subStepDataSource = async (
  conversationId: string | number,
  stepId: string | number,
  data: ElevoApi_SubStepDataSourceRequestBody,
  options?: HttpOptions
): Promise<ElevoApi_SubStepDataSourceResponseBody> =>
  /**! @contract easyops.api.llm.elevo.SubStepDataSource@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoApi_SubStepDataSourceResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/conversation/${conversationId}/step/${stepId}/view`,
      data,
      options
    )
  ).data;
