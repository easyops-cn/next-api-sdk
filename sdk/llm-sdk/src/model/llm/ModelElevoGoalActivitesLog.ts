/** elevo_goal_activites_log@AI模型定义 */
export interface ModelElevoGoalActivitesLog {
  /** 时间戳 */
  time: number;

  /** 项目ID */
  project_id: string;

  /** 目标ID */
  goal_id: string;

  /** 用户ID */
  user_id: string;

  /** 用户名 */
  user_name: string;

  /** 动作类型 */
  action_type: string;

  /** 动作元数据 */
  metadata: Record<string, any>;
}
