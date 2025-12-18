import { http, HttpOptions } from "@next-core/http";
import { ModelElevoProject } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_CreateElevoProjectRequestBody {
  /** 项目名称 */
  name: string;

  /** 项目描述 */
  description?: string;

  /** 状态：active, inactive */
  state?: string;
}

export type ElevoApi_CreateElevoProjectResponseBody =
  Partial<ModelElevoProject>;

/**
 * @description 创建elevo项目
 * @endpoint POST /api/v1/elevo/projects
 */
export const ElevoApi_createElevoProject = async (
  data: ElevoApi_CreateElevoProjectRequestBody,
  options?: HttpOptions
): Promise<ElevoApi_CreateElevoProjectResponseBody> =>
  /**! @contract easyops.api.llm.elevo.CreateElevoProject@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ElevoApi_CreateElevoProjectResponseBody>
    >(
      "api/gateway/logic.llm.aiops_service/api/v1/elevo/projects",
      data,
      options
    )
  ).data;
