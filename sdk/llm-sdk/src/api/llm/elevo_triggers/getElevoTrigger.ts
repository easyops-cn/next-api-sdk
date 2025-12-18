import { http, HttpOptions } from "@next-core/http";
import { ModelElevoTrigger } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoTriggersApi_GetElevoTriggerResponseBody =
  Partial<ModelElevoTrigger>;

/**
 * @description 查询Elevo触发器详情
 * @endpoint GET /api/v1/elevo/triggers/:instanceId
 */
export const ElevoTriggersApi_getElevoTrigger = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<ElevoTriggersApi_GetElevoTriggerResponseBody> =>
  /**! @contract easyops.api.llm.elevo_triggers.GetElevoTrigger@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoTriggersApi_GetElevoTriggerResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/triggers/${instanceId}`,
      options
    )
  ).data;
