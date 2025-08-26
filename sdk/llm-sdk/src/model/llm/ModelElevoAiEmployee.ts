import {
  ModelElevoAgent,
  ModelLlmKnowledgeBase,
  ModelModelConfig,
} from "./index.js";

/** AI_EMPLOYEE@AI模型定义 */
export interface ModelElevoAiEmployee {
  /** 实例ID */
  instanceId: string;

  /** 数字人ID */
  employeeId: string;

  /** 数字人名称 */
  name: string;

  /** 数字人描述 */
  description: string;

  /** 行业 */
  industry: string;

  /** 角色 */
  role: string;

  /** 能力说明 */
  capabilities: string[];

  /** 排除的工具列表 */
  excludeTools: string[];

  /** 状态 */
  state: "active" | "inactive";

  /** 计划工具 */
  planTool: string;

  /** 关联的Agent信息 */
  agent: Partial<ModelElevoAgent>;

  /** 知识库 */
  knowledges: Partial<ModelLlmKnowledgeBase>[];

  /** mcp工具权限 */
  toolPermission: string;

  /** 模型配置 */
  modelConfig: Partial<ModelModelConfig>;

  /** 创建者 */
  creator: string;

  /** 创建时间 */
  ctime: string;

  /** 修改时间 */
  mtime: string;

  /** 修改者 */
  modifier: string;
}
