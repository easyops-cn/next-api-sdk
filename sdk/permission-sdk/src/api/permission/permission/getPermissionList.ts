import { http, HttpOptions } from "@next-core/http";
import { ModelPermission } from "../../../model/permission/index.js";

export interface PermissionApi_GetPermissionListRequestParams {
  /** 需要鉴权的动作, 全局唯一 */
  action?: string;

  /** action名称过滤，多个用,分隔 */
  action__in?: string;

  /** action名称过滤, 填写关键字 */
  action__like?: string;

  /** remark名称过滤, 填写关键字 */
  remark__like?: string;

  /** 启用/禁用状态过滤, 空为不过滤 */
  status?: "enable" | "disable";

  /** 指定system范围 */
  system?: string;

  /** system过滤，过滤多个用,分隔 */
  exclude_system?: string;

  /** 指定返回字段，多个用,分隔 */
  fields?: string;

  /** 分页 */
  page?: number;

  /** 分页大小 */
  page_size?: number;

  /** 权限id过滤，多个用,分隔 */
  _id__in?: string;

  /** sdk限制字段使用 */
  XXX_RestFieldMask?: string[];

  /** 忽略权限点关系 */
  ignoreRelation?: boolean;

  /** 是否关联用户 */
  withUser?: boolean;

  /** 是否关联用户组 */
  withUserGroup?: boolean;
}

export interface PermissionApi_GetPermissionListResponseBody {
  /** 返回码 */
  code?: number;

  /** 总数 */
  total?: number;

  /** 页码 */
  page?: number;

  /** 分页大小 */
  page_size?: number;

  /** 数据 */
  data?: Partial<ModelPermission>[];
}

/**
 * @description 获取权限点列表
 * @endpoint GET /api/v1/permission
 */
export const PermissionApi_getPermissionList = (
  params: PermissionApi_GetPermissionListRequestParams,
  options?: HttpOptions
): Promise<PermissionApi_GetPermissionListResponseBody> =>
  /**! @contract easyops.api.permission.permission.GetPermissionList@1.1.1 */ http.get<PermissionApi_GetPermissionListResponseBody>(
    "api/gateway/logic.permission/api/v1/permission",
    { ...options, params }
  );
