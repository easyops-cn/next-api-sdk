import { http, HttpOptions } from "@next-core/http";
import { ModelElevoSpace } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoSpaceApi_UpdateElevoSpaceRequestBody =
  Partial<ModelElevoSpace>;

export type ElevoSpaceApi_UpdateElevoSpaceResponseBody =
  Partial<ModelElevoSpace>;

/**
 * @description 更新elevo协作空间（全量更新）
 * @endpoint PUT /api/v1/elevo/space/:instanceId
 */
export const ElevoSpaceApi_updateElevoSpace = async (
  instanceId: string | number,
  data: ElevoSpaceApi_UpdateElevoSpaceRequestBody,
  options?: HttpOptions
): Promise<ElevoSpaceApi_UpdateElevoSpaceResponseBody> =>
  /**! @contract easyops.api.llm.elevo_space.UpdateElevoSpace@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<ElevoSpaceApi_UpdateElevoSpaceResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/space/${instanceId}`,
      data,
      options
    )
  ).data;
