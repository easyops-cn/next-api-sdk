/** ELEVO_PROJECT_GOAL@AI模型定义 */
export interface ModelElevoProjectGoal {
  /** 实例ID */
  instanceId: string;

  /** 目标ID，项目内唯一 */
  id: number;

  /** 优先级 */
  priority: "low" | "medium" | "high";

  /** 预计完成时间 */
  deadline: string;

  /** 目标标题 */
  title: string;

  /** 目标描述 */
  description: string;

  /** 状态 */
  state: "ready" | "working" | "completed";

  /** 开始时间 */
  startTime: string;

  /** 完成时间 */
  endTime: string;

  /** 目标序号 */
  index: number;

  /** 子目标 */
  childGoal: Partial<ModelElevoProjectGoal>[];

  /** 父目标 */
  parentGoal: Partial<ModelElevoProjectGoal>[];

  /** 关联的会话数量 */
  conversations: number;

  /** 负责人 */
  owner: ModelElevoProjectGoal_owner;

  /** 参与人 */
  users: ModelElevoProjectGoal_users_item[];

  /** 项目 */
  project: ModelElevoProjectGoal_project;
}

export interface ModelElevoProjectGoal_owner {
  /** 负责人ID */
  instanceId?: string;
}

export interface ModelElevoProjectGoal_users_item {
  /** 用户ID */
  instanceId?: string;
}

export interface ModelElevoProjectGoal_project {
  /** 项目ID */
  instanceId?: string;
}
