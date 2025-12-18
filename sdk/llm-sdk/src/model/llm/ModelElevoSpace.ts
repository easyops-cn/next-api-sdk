/** SPACE@AI模型定义 */
export interface ModelElevoSpace {
  /** 实例ID */
  instanceId: string;

  /** 协作空间名称 */
  name: string;

  /** 图标 */
  icon: Record<string, any>;

  /** 协作空间描述 */
  description: string;

  /** 所有者 */
  owner: ModelElevoSpace_owner_item[];

  /** 参与人 */
  users: ModelElevoSpace_users_item[];

  /** 知识 */
  knowledges: ModelElevoSpace_knowledges_item[];

  /** 【管理业务实例】核心能力说明缓存 */
  manageInstancesCapability: string;

  /** 【发起业务流】核心能力说明缓存 */
  initiateFlowCapability: string;

  /** 【检索空间知识】核心能力说明缓存 */
  searchKnowledgeCapability: string;

  /** 推荐问题列表缓存 */
  recommendations: string[];

  /** 能力说明生成时间 */
  capabilitiesGeneratedAt: string;

  /** 推荐问题生成时间 */
  recommendationsGeneratedAt: string;
}

export interface ModelElevoSpace_owner_item {
  /** 实例ID */
  instanceId?: string;
}

export interface ModelElevoSpace_users_item {
  /** 实例ID */
  instanceId?: string;
}

export interface ModelElevoSpace_knowledges_item {
  /** 知识实例ID */
  instanceId?: string;
}
