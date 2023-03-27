import { http, HttpOptions } from "@next-core/http";
import { ModelObjectAttr } from "../../../model/cmdb/index.js";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export type CmdbObjectApi_DeletePropertyResponseBody = Partial<ModelObjectAttr>;

/**
 * @description 删除模型属性
 * @endpoint DELETE /object/:objectId/attr/:attrId
 */
export const CmdbObjectApi_deleteProperty = async (
  objectId: string | number,
  attrId: string | number,
  options?: HttpOptions
): Promise<CmdbObjectApi_DeletePropertyResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.DeleteProperty@1.1.0 */ (
    await http.delete<
      ResponseBodyWrapper<CmdbObjectApi_DeletePropertyResponseBody>
    >(
      `api/gateway/cmdb.cmdb_object.DeleteProperty/object/${objectId}/attr/${attrId}`,
      options
    )
  ).data;
