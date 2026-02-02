import { ModelPermissionSystemModule } from "./index.js";

/** 策略权限动作, 模型定义 */
export interface ModelResourceAction {
  /** action id */
  id: string;

  /** 资源数据类型 */
  resourceType: string;

  /** 资源授权对象 */
  resource: string;

  /** 资源范围字段 */
  filterKeys: string[];

  /** 动作点类型 */
  accessLevel: "Read" | "Write" | "List";

  /** 备注 */
  memo: string;

  /** 权限点是否禁用, 为false时启用 */
  disable: boolean;

  /** 是否有默认规则 */
  isDefaultPolicy: boolean;

  /** 默认规则 */
  defaultPolicy: ModelResourceAction_defaultPolicy;

  /** 所属的系统模块 */
  system_module: Partial<ModelPermissionSystemModule>[];
}

export interface ModelResourceAction_defaultPolicy {
  /** 规则效果 */
  effect?: "allow" | "deny";

  /** 授权条件 */
  filters?: string;
}
