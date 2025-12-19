/** AI_EMPLOYEE@AI模型定义 */
export interface ModelElevoAiEmployee {
  /** 实例ID */
  instanceId: string;

  /** 数字人ID */
  employeeId: string;

  /** 数字人名称 */
  name: string;

  /** 简介 */
  introduction: string;

  /** 数字人详细描述 */
  description: string;

  /** 头像图片地址 */
  avatar: string;

  /** 角色 */
  role: string;

  /** 行业 */
  industry: string;

  /** 所属团队 */
  usergroup: ModelElevoAiEmployee_usergroup_item[];

  /** ai数字分身的原型 */
  owner: ModelElevoAiEmployee_owner_item[];

  /** 绑定的agent列表 */
  agents: ModelElevoAiEmployee_agents_item[];

  /** 能力说明 */
  capabilities: string[];

  /** 排除的工具列表 */
  excludeTools: string[];

  /** 状态 */
  state: "active" | "inactive";

  /** 知识 */
  knowledges: ModelElevoAiEmployee_knowledges_item[];

  /** mcp工具权限 */
  toolPermission: string;

  /** 创建者 */
  creator: string;

  /** 创建时间 */
  ctime: string;

  /** 修改时间 */
  mtime: string;

  /** 修改者 */
  modifier: string;
}

export interface ModelElevoAiEmployee_usergroup_item {
  /** 用户组模型的instanceId */
  instanceId?: string;
}

export interface ModelElevoAiEmployee_owner_item {
  /** USER的instanceId */
  instanceId?: string;
}

export interface ModelElevoAiEmployee_agents_item {
  /** agent的instanceId */
  instanceId?: string;
}

export interface ModelElevoAiEmployee_knowledges_item {
  /** 知识实例ID */
  instanceId?: string;
}
