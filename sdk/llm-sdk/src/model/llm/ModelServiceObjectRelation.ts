/** 服务对象关系定义 */
export interface ModelServiceObjectRelation {
  /** 关系ID */
  relation_id: string;

  /** 关系名称 */
  name: string;

  /** 关系描述 */
  description: string;

  /** 关系左端对象ID（当前对象） */
  left_object_id: string;

  /** 关系左端字段ID */
  left_id: string;

  /** 关系左端描述 */
  left_description: string;

  /** 关系左端最小数量 */
  left_min: number;

  /** 关系左端最大数量（-1表示无限） */
  left_max: number;

  /** 关系右端对象ID（目标对象） */
  right_object_id: string;

  /** 关系右端字段ID */
  right_id: string;

  /** 关系右端描述 */
  right_description: string;

  /** 关系右端最小数量 */
  right_min: number;

  /** 关系右端最大数量（-1表示无限） */
  right_max: number;
}
