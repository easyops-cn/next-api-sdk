import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface PolicyValidateApi_PolicyValidateRequestBody {
  /** 校验角色 */
  user: string;

  /** 权限点 */
  action: string;

  /** 校验对象 */
  resource: string;

  /** 校验数据id */
  resourceIds?: string[];

  /** resourceId查询的key值，不设置则为instanceId */
  resourceKey?: string;

  /** 只返回filter, 不对校验对象进行校验，用于业务方获取规则filter，筛选查询条件 */
  onlyFilter?: boolean;

  /** 为true时，统计noPermissionIds和notFoundPermissionIds */
  collectNoPermissionIds?: boolean;

  /** 为true时，权限校验没通过也不返回错误。使用场景：批量鉴权时需要对部分没有权限的实例 ID 进行业务逻辑处理。 */
  noPermissionSuppressError?: boolean;
}

export interface PolicyValidateApi_PolicyValidateResponseBody {
  /** 权限校验是否通过 */
  accepted?: boolean;

  /** 动作点类型 */
  accessLevel?: "Read" | "Write" | "List";

  /** 校验用户是否为管理员 */
  is_admin?: boolean;

  /** accessLevel: List类型返回的数据控制条件 */
  filter?: Record<string, any>;

  /** 权限点是否被禁用 */
  actionDisable?: boolean;

  /** 不存在的resourceId列表 */
  notFoundResourceIds?: string[];

  /** 没有权限的resourceId列表 */
  noPermissionResourceIds?: string[];
}

/**
 * @description 策略权限校验
 * @endpoint POST /api/v1/policy_validate
 */
export const PolicyValidateApi_policyValidate = async (
  data: PolicyValidateApi_PolicyValidateRequestBody,
  options?: HttpOptions
): Promise<PolicyValidateApi_PolicyValidateResponseBody> =>
  /**! @contract easyops.api.permission.policy_validate.PolicyValidate@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<PolicyValidateApi_PolicyValidateResponseBody>
    >("api/gateway/logic.permission/api/v1/policy_validate", data, options)
  ).data;
