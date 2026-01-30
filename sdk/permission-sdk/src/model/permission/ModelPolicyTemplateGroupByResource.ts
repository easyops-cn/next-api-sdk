import { ModelIcon } from "../common/index.js";
import {
  ModelPolicyStatementGroupByResource,
  ModelColumnDbSearchPrepare,
} from "./index.js";

/** 权限策略模板定义, 以资源进行分类 */
export interface ModelPolicyTemplateGroupByResource {
  /** instance id */
  instanceId: string;

  /** 图标 */
  icon: Partial<ModelIcon>;

  /** 策略名 */
  name: string;

  /** 规则效果 */
  effect: "allow" | "deny";

  /** 备注 */
  memo: string;

  /** 策略规则 */
  statement: Partial<ModelPolicyStatementGroupByResource>[];

  /** columnDB辅助关联查询 */
  columnDBSearchPrepare: Partial<ModelColumnDbSearchPrepare>;
}
