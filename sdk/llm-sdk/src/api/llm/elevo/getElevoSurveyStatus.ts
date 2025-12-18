import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

/** 是否完成填写 */
export interface ElevoApi_GetElevoSurveyStatusResponseBody {
  /** 是否完成填写 */
  done?: boolean;
}

/**
 * @description 获取elevo问卷填写状态
 * @endpoint POST /api/v1/elevo/conversations/:conversationId/get-survey-status
 */
export const ElevoApi_getElevoSurveyStatus = async (
  conversationId: string | number,
  options?: HttpOptions
): Promise<ElevoApi_GetElevoSurveyStatusResponseBody> =>
  /**! @contract easyops.api.llm.elevo.GetElevoSurveyStatus@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoApi_GetElevoSurveyStatusResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/conversations/${conversationId}/get-survey-status`,
      undefined,
      options
    )
  ).data;
