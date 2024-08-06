/** 工作台自定义入口 */
export interface ModelWorkbenchCustomEntry {
  /** 实例Id */
  instanceId: string;

  /** 标题 */
  title: string;

  /** 类型: example: normal/small/iframe */
  type: string;

  /** 卡片内容 */
  list: Record<string, any>[];

  /** 当前入口是否是被管理员添加的 用途: 是否被管理员添加的标记，管理员添加的入口普通用户不可编辑 */
  isCreatedBySystemAdmin: boolean;
}
