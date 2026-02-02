import { ModelPolicyStatement, ModelColumnDbSearchPrepare } from "./index.js";

/** 权限策略, 模型定义 */
export interface ModelPolicy {
  /** instance id */
  instanceId: string;

  /** 策略名 */
  name: string;

  /** 策略类型 */
  policyType: "system" | "custom";

  /** 规则效果 */
  effect: "allow" | "deny";

  /** 备注 */
  memo: string;

  /** 策略规则 */
  statement: Partial<ModelPolicyStatement>[];

  /** 是否作用到所有用户, 为true时策略对所有的user都会生效 */
  allUser: boolean;

  /** columnDB辅助关联查询 */
  columnDBSearchPrepare: Partial<ModelColumnDbSearchPrepare>;

  /** ctime */
  ctime: string;

  /** mtime */
  mtime: string;

  /** creator */
  creator: string;

  /** modifier */
  modifier: string;

  /** 是否禁用 */
  disable: boolean;

  /** 编辑模式 */
  editMode: "normal" | "highLevel";
}
