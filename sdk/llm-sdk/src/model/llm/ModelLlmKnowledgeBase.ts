import { ModelIcon } from "../common/index.js";

/** LLM_KNOWLEDGE_BASE@EASYOPS知识库模型定义 */
export interface ModelLlmKnowledgeBase {
  /** 实例id */
  instanceId: string;

  /** 知识库id */
  knowledgeId: string;

  /** 知识库名称 */
  name: string;

  /** 描述 */
  description: string;

  /** 图标 */
  icon: Partial<ModelIcon>;
}
