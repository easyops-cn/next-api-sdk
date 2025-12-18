import { http, HttpOptions } from "@next-core/http";
import { ModelElevoSpace } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoSpaceApi_CreateElevoSpaceRequestBody =
  Partial<ModelElevoSpace>;

export type ElevoSpaceApi_CreateElevoSpaceResponseBody =
  Partial<ModelElevoSpace>;

/**
 * @description 创建elevo协作空间
 * @endpoint POST /api/v1/elevo/space
 */
export const ElevoSpaceApi_createElevoSpace = async (
  data: ElevoSpaceApi_CreateElevoSpaceRequestBody,
  options?: HttpOptions
): Promise<ElevoSpaceApi_CreateElevoSpaceResponseBody> =>
  /**! @contract easyops.api.llm.elevo_space.CreateElevoSpace@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoSpaceApi_CreateElevoSpaceResponseBody>
    >("api/gateway/logic.llm.aiops_service/api/v1/elevo/space", data, options)
  ).data;
