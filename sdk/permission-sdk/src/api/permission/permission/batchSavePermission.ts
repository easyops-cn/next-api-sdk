import { http, HttpOptions } from "@next-core/http";

export interface PermissionApi_BatchSavePermissionRequestBody {
  /** 权限点列表 */
  permissionList: PermissionApi_BatchSavePermissionRequestBody_permissionList_item[];
}

export interface PermissionApi_BatchSavePermissionResponseBody {
  /** 返回码 */
  code?: number;

  /** 结果信息 */
  msg?: string;

  /** 数据 */
  data?: PermissionApi_BatchSavePermissionResponseBody_data;
}

/**
 * @description 批量保存权限配置(已存在权限点则更新)
 * @endpoint POST /api/v1/permission/batch_save
 */
export const PermissionApi_batchSavePermission = (
  data: PermissionApi_BatchSavePermissionRequestBody,
  options?: HttpOptions
): Promise<PermissionApi_BatchSavePermissionResponseBody> =>
  /**! @contract easyops.api.permission.permission.BatchSavePermission@1.1.0 */ http.post<PermissionApi_BatchSavePermissionResponseBody>(
    "api/gateway/logic.permission/api/v1/permission/batch_save",
    data,
    options
  );

export interface PermissionApi_BatchSavePermissionRequestBody_permissionList_item {
  /** 权限ID */
  id?: string;

  /** 组织号 */
  org?: number;

  /** 系统名 */
  system?: string;

  /** 需要鉴权的动作, 全局唯一 */
  action?: string;

  /** 权限备注 */
  remark?: string;

  /** remark英文翻译 */
  remark_translation?: string;

  /** 权限角色 */
  roles?: string[];

  /** 是否禁用, 默认为false */
  disable?: boolean;

  /** 用户名列表 */
  user?: string[];

  /** 用户组ID列表，ID开头带有分号，例：“:5c9f7b46cb292” */
  user_group?: string[];

  /** 单个资源结构参考PermissionResource. 如果依赖多个资源，资源间判定逻辑条件用%and或者%or来扩住。 比如： { "%or":[ { "system":"flow", "condition":{ "executeAuthorizers":"%user" }, "name":"flow" }, { "system":"tool", "condition":{ "executeAuthorizers":"%user" }, "name":"tool" } ] } 表示这个权限点依赖流程的执行授权白名单和工具的执行授权白名单才能鉴权成功。 */
  resource?: any;
}

export interface PermissionApi_BatchSavePermissionResponseBody_data {
  /** 权限IDs */
  ids?: string[];
}
