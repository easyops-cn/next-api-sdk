import { http, HttpOptions } from "@next-core/http";

/**
 * @description 删除业务流
 * @endpoint DELETE /api/v1/elevo/spaces/:spaceId/service-flows/:instanceId
 */
export const ElevoSpaceApi_deleteServiceFlow = (
  spaceId: string | number,
  instanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.llm.elevo_space.DeleteServiceFlow@1.0.0 */ http.delete<void>(
    `api/gateway/logic.llm.aiops_service/api/v1/elevo/spaces/${spaceId}/service-flows/${instanceId}`,
    options
  );
