import { ModelPolicy, ModelBaseRole, ModelBaseUserGroup } from "./index.js";

/** 策略, 带模型关系, 模型定义 */
export type ModelPolicyWithRelation = ModelPolicy & ModelPolicyWithRelation_2;

export interface ModelPolicyWithRelation_2 {
  /** 关系角色 */
  role: Partial<ModelBaseRole>[];

  /** 关系用户组 */
  user_group: Partial<ModelBaseUserGroup>[];
}
