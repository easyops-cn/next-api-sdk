import { http, HttpOptions } from "@next-core/http";
import { ModelElevoTrigger } from "../../../model/llm/index.js";

export interface ElevoTriggersApi_CreateElevoTriggerRequestBody {
  /** 触发器名称 */
  name: string;

  /** 触发器类型 */
  triggerType: "SCHEDULE" | "WEBHOOK" | "POLLING";

  /** 是否禁用 */
  disable?: boolean;

  /** 触发活动、动作 */
  action?: ModelElevoTrigger["action"];

  /** cron表达式，用于定时触发 */
  cronExpression?: string;

  /** webhook配置 */
  webhookConfig?: ModelElevoTrigger["webhookConfig"];

  /** 轮询配置 */
  pollingConfig?: ModelElevoTrigger["pollingConfig"];

  /** 过滤配置列表 */
  filterConfig?: ModelElevoTrigger["filterConfig"];
}

/**
 * @description 创建Elevo触发器
 * @endpoint POST /api/v1/elevo/triggers
 */
export const ElevoTriggersApi_createElevoTrigger = (
  data: ElevoTriggersApi_CreateElevoTriggerRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo_triggers.CreateElevoTrigger@1.0.0 */ http.post<void>(
    "api/gateway/logic.llm.aiops_service/api/v1/elevo/triggers",
    data,
    options
  );
