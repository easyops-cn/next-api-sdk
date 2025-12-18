import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_GenerateElevoUiViewRequestBody {
  /** 是否强制重新创建视图 */
  forceReCreate?: boolean;
}

export interface ElevoApi_GenerateElevoUiViewResponseBody {
  /** 生成的代码 */
  generatedCode?: string;
}

/**
 * @description 调用智能 UI 视图生成接口，返回代码
 * @endpoint POST /api/v1/elevo/conversation/:conversationId/task/:taskId/views
 */
export const ElevoApi_generateElevoUiView = async (
  conversationId: string | number,
  taskId: string | number,
  data: ElevoApi_GenerateElevoUiViewRequestBody,
  options?: HttpOptions
): Promise<ElevoApi_GenerateElevoUiViewResponseBody> =>
  /**! @contract easyops.api.llm.elevo.GenerateElevoUIView@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoApi_GenerateElevoUiViewResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/conversation/${conversationId}/task/${taskId}/views`,
      data,
      options
    )
  ).data;
