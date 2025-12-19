/** 服务对象属性定义 */
export interface ModelServiceObjectAttribute {
  /** 字段ID */
  id: string;

  /** 字段名称 */
  name: string;

  /** 字段描述 */
  description: string;

  /** 是否必填 */
  required: boolean;

  /** 字段类型（string/text/enum/file） */
  type: string;

  /** 是否为数组类型 */
  isArray: boolean;

  /** 枚举值列表（仅enum类型） */
  options: string[];
}
