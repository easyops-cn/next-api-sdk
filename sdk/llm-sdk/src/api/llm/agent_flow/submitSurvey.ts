import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface AgentFlowApi_SubmitSurveyRequestBody {
  /** 任务id */
  taskId?: string;

  /** 对plan的评价 */
  plan?: string[];

  /** 对结论的评价 */
  result?: string[];

  /** 用户反馈 */
  feedback?: string;
}

/** 是否完成填写 */
export interface AgentFlowApi_SubmitSurveyResponseBody {
  /** 是否完成填写 */
  done?: boolean;
}

/**
 * @description 填写agent flow问卷
 * @endpoint POST /api/v1/llm/agent/flow/submit_survey
 */
export const AgentFlowApi_submitSurvey = async (
  data: AgentFlowApi_SubmitSurveyRequestBody,
  options?: HttpOptions
): Promise<AgentFlowApi_SubmitSurveyResponseBody> =>
  /**! @contract easyops.api.llm.agent_flow.SubmitSurvey@1.0.0 */ (
    await http.post<ResponseBodyWrapper<AgentFlowApi_SubmitSurveyResponseBody>>(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/agent/flow/submit_survey",
      data,
      options
    )
  ).data;
