import { http, HttpOptions } from "@next-core/http";
import { ModelElevoSpace } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoSpaceApi_GetElevoSpaceDetailResponseBody =
  Partial<ModelElevoSpace>;

/**
 * @description 获取elevo协作空间详情
 * @endpoint GET /api/v1/elevo/space/:instanceId
 */
export const ElevoSpaceApi_getElevoSpaceDetail = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<ElevoSpaceApi_GetElevoSpaceDetailResponseBody> =>
  /**! @contract easyops.api.llm.elevo_space.GetElevoSpaceDetail@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ElevoSpaceApi_GetElevoSpaceDetailResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/space/${instanceId}`,
      options
    )
  ).data;
