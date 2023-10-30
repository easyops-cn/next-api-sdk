/** 工作空间变更历史 */
export interface ModelWorkspaceChangeHistory {
  /** 变更操作, add/delete/edit/import/append_relation/remove_relation/update_relation... */
  action: string;

  /** node变更的对象分类, project/image/menu/menuItem/permission/i18n/function/route/brick/template/workflow... */
  category: string;

  /** relation变更的relationId */
  relationId: string;

  /** 变更对象的唯一标识，例如实例instanceId，关系两端id */
  uniqueKey: string;

  /** 变更的概要信息 */
  abstract: ModelWorkspaceChangeHistory_abstract;

  /** 变更用户 */
  user: string;

  /** 变更的唯一id(ts) */
  changeId: string;

  /** rollbackId(当操作是rollback)时使用， 表明回退到哪个步骤 */
  rollbackId: string;

  /** 回退id详细信息 */
  rollBackIdInfo: Partial<ModelWorkspaceChangeHistory>;

  /** 变更时间戳 */
  ts: string;

  /** 变更前内容Hash */
  oldHash: string;

  /** 变更后内容Hash */
  newHash: string;
}

export interface ModelWorkspaceChangeHistory_abstract {
  /** subCategory变更操作：add/edit/delete */
  action?: string;

  /** 基于上层category的更细致的变更分类：比如: project的dependencies信息 */
  subCategory?: string;

  /** node变更的对象名称, 最多3个。超过3个时，总数取nodesCount */
  nodes?: string[];

  /** node变更的对象总数 */
  nodesCount?: number;

  /** node变更了哪些属性，例如 properties、events */
  nodeChanges?: string[];

  /** relation变更的left object id */
  leftObjectId?: string;

  /** relation变更的left nodes。超过3个时，总数取leftNodesCount */
  leftNodes?: string[];

  /** relation变更的left node总数 */
  leftNodesCount?: number;

  /** relation变更的right object id */
  rightObjectId?: string;

  /** relation变更的right nodes。超过3个时，总数取rightNodesCount */
  rightNodes?: string[];

  /** relation变更的right node总数 */
  rightNodesCount?: number;

  /** relation变更了哪些属性 */
  relationChanges?: string[];
}
