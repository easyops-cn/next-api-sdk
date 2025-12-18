/** 业务流模型 */
export interface ModelServiceFlow {
  /** 业务流实例ID */
  instanceId: string;

  /** 业务流名称 */
  name: string;

  /** 业务流描述 */
  description: string;

  /** 前置条件 */
  prerequisite: string;

  /** 是否需求确认执行 */
  needConfirm: boolean;

  /** 是否禁用 */
  disable: boolean;

  /** 业务流配置 */
  spec: ModelServiceFlow_spec_item[];

  /** 创建者 */
  creator: string;

  /** 创建时间 */
  ctime: string;
}

export interface ModelServiceFlow_spec_item {
  /** 阶段名称 */
  name?: string;

  /** 业务流活动列表 */
  serviceFlowActivities?: ModelServiceFlow_spec_item_serviceFlowActivities_item[];
}

export interface ModelServiceFlow_spec_item_serviceFlowActivities_item {
  /** 活动名称 */
  name?: string;

  /** 活动描述，描述活动本身，活动的产出物 */
  description?: string;

  /** 分配的数字人ID */
  aiEmployeeId?: string;

  /** HIL规则 */
  hilRules?: string;

  /** HIL用户名 */
  hilUser?: string;
}
