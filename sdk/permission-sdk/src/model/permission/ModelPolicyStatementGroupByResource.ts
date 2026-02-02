import { ModelStatementExtra } from "./index.js";

/** 策略规则, 以资源进行分类 */
export type ModelPolicyStatementGroupByResource = ModelStatementExtra &
  ModelPolicyStatementGroupByResource_2;

export interface ModelPolicyStatementGroupByResource_2 {
  /** 所属模块 */
  systemModule: string;

  /** 资源授权对象 */
  resource: string;

  /** 授权条件 */
  filters: string;

  /** action类型统计, 展示时使用; */
  accessCount: ModelPolicyStatementGroupByResource_accessCount_item[];

  /** 声明action列表 */
  actions: ModelPolicyStatementGroupByResource_actions_item[];
}

export interface ModelPolicyStatementGroupByResource_accessCount_item {
  /** 动作点类型 */
  accessLevel?: "Read" | "Write" | "List";

  /** 数量 */
  count?: number;
}

export interface ModelPolicyStatementGroupByResource_actions_item {
  /** ABAC权限点id, 对应action */
  id?: string;

  /** 资源数据类型 */
  resourceType?: string;

  /** 动作点类型 */
  accessLevel?: "Read" | "Write" | "List";
}
