import { ModelIcon } from "../common/index.js";
import { ModelModelConfig } from "./index.js";

/** AGENT@AI模型定义 */
export interface ModelElevoAgent {
  /** 实例ID */
  instanceId: string;

  /** 智能体ID */
  agentId: string;

  /** 智能体名称 */
  name: string;

  /** 智能体描述 */
  description: string;

  /** 状态 */
  state: "active" | "inactive";

  /** 能力标签 */
  capabilities: string[];

  /** 绑定的MCP服务器列表 */
  mcpServers: string[];

  /** 计划工具 */
  planTool: string;

  /** 模型配置 */
  modelConfig: Partial<ModelModelConfig>;

  /** 图标 */
  icon: Partial<ModelIcon>;

  /** 创建者 */
  creator: string;

  /** 创建时间 */
  ctime: string;

  /** 修改时间 */
  mtime: string;

  /** 修改者 */
  modifier: string;
}
