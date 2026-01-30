import { http, HttpOptions } from "@next-core/http";

export interface OrgApi_ObjectInitRequestBody {
  /** 升级环境的org */
  org?: number;
}

/**
 * @description permission模型初始化，用于升级时初始化模型
 * @endpoint POST /api/v1/org/object_init
 */
export const OrgApi_objectInit = (
  data: OrgApi_ObjectInitRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.permission.org.ObjectInit@1.0.0 */ http.post<void>(
    "api/gateway/logic.permission/api/v1/org/object_init",
    data,
    options
  );
