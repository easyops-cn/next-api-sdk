import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface StoryboardApi_BatchImportNodesRequestBody {
  /** 模型id */
  objectId?: string;

  /** 联合唯一的key(只支持普通属性,不支持结构体与关系字段),以这些key与datas里的数据组装query,作为插入/更新的依据 */
  keys?: string[];

  /** 导入实例数据列表,必须包含keys里面的字段 */
  datas?: Record<string, any>[];

  /** 是否记录变更历史 */
  isRecordChangeHistory?: boolean;
}

export interface StoryboardApi_BatchImportNodesResponseBody {
  /** 成功插入数量 */
  insert_count?: number;

  /** 成功更新数量 */
  update_count?: number;

  /** 失败数量 */
  failed_count?: number;

  /** 失败数据 */
  data?: StoryboardApi_BatchImportNodesResponseBody_data_item[];
}

/**
 * @description Batch Import Nodes
 * @endpoint POST /api/v1/next-builder/app/:appId/nodes/import
 */
export const StoryboardApi_batchImportNodes = async (
  appId: string | number,
  data: StoryboardApi_BatchImportNodesRequestBody,
  options?: HttpOptions
): Promise<StoryboardApi_BatchImportNodesResponseBody> =>
  /**! @contract easyops.api.next_builder.storyboard.BatchImportNodes@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<StoryboardApi_BatchImportNodesResponseBody>
    >(
      `api/gateway/next_builder.storyboard.BatchImportNodes/api/v1/next-builder/app/${appId}/nodes/import`,
      data,
      options
    )
  ).data;

export interface StoryboardApi_BatchImportNodesResponseBody_data_item {
  /** 错误码 */
  code?: number;

  /** 错误信息 */
  error?: string;

  /** 错误数据 */
  data?: Record<string, any>[];
}
