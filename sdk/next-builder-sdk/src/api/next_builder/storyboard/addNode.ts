import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface StoryboardApi_AddNodeRequestBody {
  /** 模型id */
  objectId: string;

  /** node instance */
  instance: Record<string, any>;

  /** 是否记录变更历史 */
  isRecordChangeHistory?: boolean;
}

export interface StoryboardApi_AddNodeResponseBody {
  /** 节点实例信息 */
  instance?: Record<string, any>;
}

/**
 * @description Add Node
 * @endpoint POST /api/v1/next-builder/:appId/nodes
 */
export const StoryboardApi_addNode = async (
  appId: string | number,
  data: StoryboardApi_AddNodeRequestBody,
  options?: HttpOptions
): Promise<StoryboardApi_AddNodeResponseBody> =>
  /**! @contract easyops.api.next_builder.storyboard.AddNode@1.0.0 */ (
    await http.post<ResponseBodyWrapper<StoryboardApi_AddNodeResponseBody>>(
      `api/gateway/next_builder.storyboard.AddNode/api/v1/next-builder/${appId}/nodes`,
      data,
      options
    )
  ).data;
