/** 权限角色基本字段, CMDB的存储结构 */
export interface ModelBaseRole {
  /** 实例id */
  instanceId: string;

  /** 角色名称 */
  role: string;

  /** 旧的角色id，保留项 */
  oid: string;
}
