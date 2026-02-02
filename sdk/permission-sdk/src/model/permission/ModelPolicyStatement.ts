import { ModelStatementExtra } from "./index.js";

/** 策略规则 */
export type ModelPolicyStatement = ModelStatementExtra & ModelPolicyStatement_2;

export interface ModelPolicyStatement_2 {
  /** 权限点动作 */
  action: string;

  /** 资源数据类型 */
  resourceType: string;

  /** 资源授权对象 */
  resource: string;

  /** 动作点类型 */
  accessLevel: "Read" | "Write" | "List";

  /** 所属模块id */
  systemModule: string;

  /** 授权条件 */
  filters: string;
}
