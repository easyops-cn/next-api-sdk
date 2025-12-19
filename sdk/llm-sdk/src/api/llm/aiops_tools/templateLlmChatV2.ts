import { http, HttpOptions } from "@next-core/http";
import {
  ModelLlmChatAgentTaskResponse,
  ModelLlmChatMessage,
} from "../../../model/aiops_service/index.js";

export interface AiopsToolsApi_TemplateLlmChatV2RequestBody {
  /** 模板，为空时，不使用默认引擎 */
  template?: string;

  /** 模板引擎的数据 */
  variables?: Record<string, any>;

  /** 大模型id */
  model?: string;

  /** 历史对话消息 */
  historyMessages?: Partial<ModelLlmChatMessage>[];

  /** 输入对话,模板为空时才生效 */
  input?: string;

  /** 输出格式，默认json */
  outputType?: string;

  /** 取值范围是：(0.0, 1.0]，不能等于 0，默认值为 0.1，值越大，会使输出更随机，更具创造性；值越小，输出会更加稳定或确定 */
  temperature?: number;

  /** 是否是调试模式，为true时，返回debug_resp */
  debug?: boolean;

  /** 是否是流式 */
  stream?: boolean;

  /** system角色的提示词模板 */
  systemTemplate?: string;

  /** system模板所需要的数据 */
  systemVariables?: Record<string, any>;

  /** 任务id */
  taskId?: string;

  /** 输入的图片url */
  images?: string[];

  /** 请求最大 token 数 */
  maxTokens?: number;

  /** 拓展的元数据字段，其中：elevoConversationId，不为空时，会记录elevo的会话日志 */
  extendMeta?: Record<string, any>;

  /** 请求大模型的seed, 不传为默认 */
  seed?: number;
}

export type AiopsToolsApi_TemplateLlmChatV2ResponseBody =
  Partial<ModelLlmChatAgentTaskResponse> &
    AiopsToolsApi_TemplateLlmChatV2ResponseBody_2;

/**
 * @description 根据模板与大模型对话，返回json
 * @endpoint POST /api/v1/llm/tools/template_llm_chat_v2
 */
export const AiopsToolsApi_templateLlmChatV2 = (
  data: AiopsToolsApi_TemplateLlmChatV2RequestBody,
  options?: HttpOptions
): Promise<AiopsToolsApi_TemplateLlmChatV2ResponseBody> =>
  /**! @contract easyops.api.llm.aiops_tools.TemplateLlmChatV2@1.0.0 */ http.post<AiopsToolsApi_TemplateLlmChatV2ResponseBody>(
    "api/gateway/logic.llm.aiops_service/api/v1/llm/tools/template_llm_chat_v2",
    data,
    options
  );

export interface AiopsToolsApi_TemplateLlmChatV2ResponseBody_2 {
  /** 提取返回的数据 */
  data?: any;

  /** 推理模型的推理内容 */
  reasoning_content?: string;

  /** 调试时大模型返回值 */
  debug_resp?: string;

  /** 如果解析不到正确的数据格式，则将大模型返回的数据塞到这里 */
  errorOutput?: string;
}
