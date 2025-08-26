import { http, HttpOptions } from "@next-core/http";
import { ModelElevoProject } from "../../../model/llm/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface ElevoApi_UpdateElevoProjectRequestBody {
  /** 更新后的项目名称 */
  name?: string;

  /** 更新后的描述 */
  description?: string;

  /** 状态：active, inactive */
  state?: string;

  /** 新的默认数字人ID */
  defaultAiEmployeeId?: string;
}

export type ElevoApi_UpdateElevoProjectResponseBody =
  Partial<ModelElevoProject>;

/**
 * @description 更新elevo项目
 * @endpoint PUT /api/v1/elevo/projects/:instanceId
 */
export const ElevoApi_updateElevoProject = async (
  instanceId: string | number,
  data: ElevoApi_UpdateElevoProjectRequestBody,
  options?: HttpOptions
): Promise<ElevoApi_UpdateElevoProjectResponseBody> =>
  /**! @contract easyops.api.llm.elevo.UpdateElevoProject@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<ElevoApi_UpdateElevoProjectResponseBody>
    >(
      `api/gateway/logic.llm.aiops_service/api/v1/elevo/projects/${instanceId}`,
      data,
      options
    )
  ).data;
