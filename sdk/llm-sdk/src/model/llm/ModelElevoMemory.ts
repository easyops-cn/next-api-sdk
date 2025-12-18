/** 记忆 */
export interface ModelElevoMemory {
  /** 唯一key，创建时不需要传 */
  _row_id: string;

  /** 会话ID */
  conversationId: string;

  /** 任务ID */
  taskId: string;

  /** 步骤ID */
  stepId: string;

  /** 详细信息 */
  detail: string;

  /** 简单信息 */
  simple: string;

  /** 创建时间 */
  createdAt: number;

  /** 更新时间 */
  updatedAt: number;
}
