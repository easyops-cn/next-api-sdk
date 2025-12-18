import { http, HttpOptions } from "@next-core/http";
import { ModelElevoTrigger } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoTriggersApi_UpdateElevoTriggerRequestBody =
  Partial<ModelElevoTrigger>;

export type ElevoTriggersApi_UpdateElevoTriggerResponseBody =
  Partial<ModelElevoTrigger>;

/**
 * @description 更新Elevo触发器
 * @endpoint PUT /api/v1/elevo/triggers/:instanceId
 */
export const ElevoTriggersApi_updateElevoTrigger = async (
  instanceId: string | number,
  data: ElevoTriggersApi_UpdateElevoTriggerRequestBody,
  options?: HttpOptions
): Promise<ElevoTriggersApi_UpdateElevoTriggerResponseBody> =>
  /**! @contract easyops.api.llm.elevo_triggers.UpdateElevoTrigger@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<ElevoTriggersApi_UpdateElevoTriggerResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/triggers/${instanceId}`,
      data,
      options
    )
  ).data;
