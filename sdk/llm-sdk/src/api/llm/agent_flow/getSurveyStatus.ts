import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface AgentFlowApi_GetSurveyStatusRequestBody {
  /** 任务id */
  taskId?: string;
}

/** 是否完成填写 */
export interface AgentFlowApi_GetSurveyStatusResponseBody {
  /** 是否完成填写 */
  done?: boolean;
}

/**
 * @description 获取agent flow问卷填写状态
 * @endpoint POST /api/v1/llm/agent/flow/get_survey_status
 */
export const AgentFlowApi_getSurveyStatus = async (
  data: AgentFlowApi_GetSurveyStatusRequestBody,
  options?: HttpOptions
): Promise<AgentFlowApi_GetSurveyStatusResponseBody> =>
  /**! @contract easyops.api.llm.agent_flow.GetSurveyStatus@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<AgentFlowApi_GetSurveyStatusResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/llm/agent/flow/get_survey_status",
      data,
      options
    )
  ).data;
