import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_SubmitElevoSurveyRequestBody {
  /** 对plan的评价 */
  plan?: string[];

  /** 对结论的评价 */
  result?: string[];

  /** 用户反馈 */
  feedback?: string;
}

/** 是否完成填写 */
export interface ElevoApi_SubmitElevoSurveyResponseBody {
  /** 是否完成填写 */
  done?: boolean;
}

/**
 * @description 填写elevo问卷
 * @endpoint POST /api/v1/elevo/conversations/:conversationId/submit-survey
 */
export const ElevoApi_submitElevoSurvey = async (
  conversationId: string | number,
  data: ElevoApi_SubmitElevoSurveyRequestBody,
  options?: HttpOptions
): Promise<ElevoApi_SubmitElevoSurveyResponseBody> =>
  /**! @contract easyops.api.llm.elevo.SubmitElevoSurvey@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoApi_SubmitElevoSurveyResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/conversations/${conversationId}/submit-survey`,
      data,
      options
    )
  ).data;
