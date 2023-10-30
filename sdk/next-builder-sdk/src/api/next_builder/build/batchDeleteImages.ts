import { http, HttpOptions } from "@next-core/http";

export interface BuildApi_BatchDeleteImagesRequestBody {
  /** 图片所在项目的instanceId */
  projectInstanceId: string;

  /** 要删除的图片的instanceId */
  imageInstanceIds: string[];

  /** 是否记录变更历史 */
  isRecordChangeHistory?: boolean;
}

/**
 * @description 批量删除图片
 * @endpoint POST /api/v1/next_builder/images/batch_delete
 */
export const BuildApi_batchDeleteImages = (
  data: BuildApi_BatchDeleteImagesRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.build.BatchDeleteImages@2.0.0 */ http.post<void>(
    "api/gateway/next_builder.build.BatchDeleteImages/api/v1/next_builder/images/batch_delete",
    data,
    options
  );
