/** 权限变更历史, 数据定义 */
export interface ModelPermissionChangeDiff {
  /** 变更字段 */
  key: string;

  /** 变更后的值 */
  value: string;

  /** 变更前的值 */
  old_value: string;
}
