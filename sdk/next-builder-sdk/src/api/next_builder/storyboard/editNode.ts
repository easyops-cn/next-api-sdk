import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface StoryboardApi_EditNodeRequestBody {
  /** objectId */
  objectId: string;

  /** 实例上一次修改时间 */
  mtime?: string;

  /** instance_id */
  instanceId?: string;

  /** node instance */
  instance: Record<string, any>;

  /** 是否记录变更历史 */
  isRecordChangeHistory?: boolean;
}

export interface StoryboardApi_EditNodeResponseBody {
  /** 更新成功的实例信息 */
  instanceInfo?: Record<string, any>;
}

/**
 * @description Edit Node
 * @endpoint PUT /api/v1/next-builder/:appId/nodes
 */
export const StoryboardApi_editNode = async (
  appId: string | number,
  data: StoryboardApi_EditNodeRequestBody,
  options?: HttpOptions
): Promise<StoryboardApi_EditNodeResponseBody> =>
  /**! @contract easyops.api.next_builder.storyboard.EditNode@1.0.0 */ (
    await http.put<ResponseBodyWrapper<StoryboardApi_EditNodeResponseBody>>(
      `api/gateway/next_builder.storyboard.EditNode/api/v1/next-builder/${appId}/nodes`,
      data,
      options
    )
  ).data;
