import { ModelPermissionChangeDiff } from "./index.js";

/** 权限变更历史, 数据定义 */
export interface ModelPermissionChangeHistoryData {
  /** columnDB row id */
  _row_id: string;

  /** permission领域模型id */
  object_id: string;

  /** 数据实例id */
  instance_id: string;

  /** 业务唯一键 */
  name: string;

  /** 操作用户 */
  user: string;

  /** 事件类型 */
  event:
    | "event.policy.create"
    | "event.policy.modify"
    | "event.policy.delete"
    | "event.policy.modify_role";

  /** 时间戳 */
  time: number;

  /** 变更列表, 从columnDB获取后反序列化所得 */
  diff_list: Partial<ModelPermissionChangeDiff>[];
}
