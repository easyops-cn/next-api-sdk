import { ModelFlowAgentTaskResponse } from "./index.js";

/** elevo会话的请求返回值 */
export interface ModelElevoConversionResponse {
  /** 任务id */
  id: string;

  /** 任务状态，可选值：| "submitted",  "working", "completed" ;
   */
  state: string;

  /** 任务列表 */
  tasks: Partial<ModelFlowAgentTaskResponse>[];

  /** 消息时间戳 */
  time: number;
}
