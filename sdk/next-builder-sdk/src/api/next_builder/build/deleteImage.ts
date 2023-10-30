import { http, HttpOptions } from "@next-core/http";

export interface BuildApi_DeleteImageRequestParams {
  /** 是否记录变更历史 */
  isRecordChangeHistory?: boolean;
}

/**
 * @description 删除图片
 * @endpoint DELETE /api/v1/next_builder/images/:imageInstanceId
 */
export const BuildApi_deleteImage = (
  imageInstanceId: string | number,
  params: BuildApi_DeleteImageRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.build.DeleteImage@1.1.0 */ http.delete<void>(
    `api/gateway/next_builder.build.DeleteImage/api/v1/next_builder/images/${imageInstanceId}`,
    { ...options, params }
  );
