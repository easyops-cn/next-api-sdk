import { http, HttpOptions } from "@next-core/http";
import { ModelCmdbObject } from "../../../model/cmdb/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type CmdbObjectApi_DeleteObjectResponseBody = Partial<ModelCmdbObject>;

/**
 * @description 删除模型
 * @endpoint DELETE /object/:objectId
 */
export const CmdbObjectApi_deleteObject = async (
  objectId: string | number,
  options?: HttpOptions
): Promise<CmdbObjectApi_DeleteObjectResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.DeleteObject@1.1.0 */ (
    await http.delete<
      ResponseBodyWrapper<CmdbObjectApi_DeleteObjectResponseBody>
    >(`api/gateway/cmdb.cmdb_object.DeleteObject/object/${objectId}`, options)
  ).data;
