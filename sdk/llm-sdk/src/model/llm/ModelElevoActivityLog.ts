/** 协作空间活动记录模型定义，采用 actionType + payload 模式 */
export interface ModelElevoActivityLog {
  /** 活动记录ID */
  activityId: string;

  /** 协作空间ID */
  spaceId: string;

  /** 业务对象ID（可选） */
  objectId: string;

  /** 业务对象实例ID（可选） */
  objectInstanceId: string;

  /** 会话ID（可选） */
  conversationId: string;

  /** 操作类型：create_instance(创建实例)、edit_instance(编辑实例)、comment(评论)、start_conversation(发起会话)、status_change(状态变更) */
  actionType: string;

  /** 操作用户名称 */
  userName: string;

  /** 动态参数体，根据 actionType 解析为不同的结构。如字段名称、评论内容、会话标题、会话ID、状态值等 */
  payload: Record<string, any>;

  /** 创建时间戳 */
  createTime: number;
}
