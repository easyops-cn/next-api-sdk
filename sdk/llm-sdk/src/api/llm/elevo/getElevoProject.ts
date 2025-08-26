import { http, HttpOptions } from "@next-core/http";
import { ModelElevoProject } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type ElevoApi_GetElevoProjectResponseBody = Partial<ModelElevoProject>;

/**
 * @description 获取elevo项目详情
 * @endpoint GET /api/v1/elevo/projects/:instanceId
 */
export const ElevoApi_getElevoProject = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<ElevoApi_GetElevoProjectResponseBody> =>
  /**! @contract easyops.api.llm.elevo.GetElevoProject@1.0.0 */ (
    await http.get<ResponseBodyWrapper<ElevoApi_GetElevoProjectResponseBody>>(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/projects/${instanceId}`,
      options
    )
  ).data;
