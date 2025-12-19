/** 模型配置 */
export interface ModelModelConfig {
  /** 默认大模型 */
  defaultModel: string;

  /** 温度参数 */
  temperature: number;

  /** 最大Token数 */
  maxTokens: number;

  /** 基础系统提示词 */
  baseSystemPrompt: string;

  /** 意图理解专家模型 */
  intentModel: string;

  /** 意图理解提示词 */
  intentPrompt: string;

  /** 计划提示词 */
  planPrompt: string;
}
