import { http, HttpOptions } from "@next-core/http";

export interface CmdbObjectApi_UpdateAttributeCategoryRequestBody {
  /** 新分类名称 */
  newName?: string;

  /** 添加属性，关系到此分组 */
  appendAttrList?: string[];

  /** 从此分组中移除属性，关系 */
  removeAttrList?: string[];
}

/**
 * @description 修改字段分类
 * @endpoint PUT /object/:objectId/attribute_category/:name
 */
export const CmdbObjectApi_updateAttributeCategory = (
  objectId: string | number,
  name: string | number,
  data: CmdbObjectApi_UpdateAttributeCategoryRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.cmdb_object.UpdateAttributeCategory@1.0.0 */ http.put<void>(
    `api/gateway/cmdb.cmdb_object.UpdateAttributeCategory/object/${objectId}/attribute_category/${name}`,
    data,
    options
  );
