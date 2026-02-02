/** 权限策略资源配置表, 模型定义 */
export interface ModelPermissionResourceEnable {
  /** cmdb实例id */
  instanceId: string;

  /** 模块id */
  moduleId: string;

  /** 模块名称 */
  moduleName: string;

  /** 资源对象 */
  resource: string;
}
