/** 模型配置 */
export interface ModelModelConfig {
  /** 默认模型 */
  defaultModel: string;

  /** 温度参数 */
  temperature: number;

  /** 最大Token数 */
  maxTokens: number;

  /** 基础系统提示词 */
  baseSystemPrompt: string;

  /** 自由对话提示词 */
  freeChatSystemPrompt: string;

  /** 确认提示词 */
  confirmingChatSystemPrompt: string;

  /** 计划提示词 */
  planningChatSystemPrompt: string;

  /** 执行提示词 */
  executingChatSystemPrompt: string;
}
