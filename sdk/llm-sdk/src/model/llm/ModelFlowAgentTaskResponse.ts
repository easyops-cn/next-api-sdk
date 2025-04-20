import { ModelFlowAgentTaskMessage } from "./index.js";

/** flow agent的请求返回值 */
export interface ModelFlowAgentTaskResponse {
  /** 任务id */
  id: string;

  /** 任务状态，可选值：| "submitted",  "working", "input-required","completed","canceled","failed", "unknown";
   */
  state: string;

  /** 用户要求 */
  requirement: string;

  /** 任务计划步骤 */
  plan: ModelFlowAgentTaskResponse_plan_item[];

  /** 任务详情 */
  jobs: ModelFlowAgentTaskResponse_jobs_item[];
}

export interface ModelFlowAgentTaskResponse_plan_item {
  /** Pre-generated Job ID for this step */
  id?: string;

  /** 任务说明 */
  instruction?: string;
}

export interface ModelFlowAgentTaskResponse_jobs_item {
  /** job id */
  id?: string;

  /** 父任务id */
  parent?: string[];

  /** 任务说明 */
  instruction?: string;

  /** 任务状态，可选值：| "submitted",  "working", "input-required","completed","canceled","failed", "unknown";
   */
  state?: string;

  /** 工具执行结果 */
  toolCall?: ModelFlowAgentTaskResponse_jobs_item_toolCall;

  /** 执行结果消息 */
  messages?: Partial<ModelFlowAgentTaskMessage>[];
}

export interface ModelFlowAgentTaskResponse_jobs_item_toolCall {
  /** 工具唯一名称 */
  name?: string;

  /** 工具执行参数 */
  arguments?: Record<string, any>;
}
