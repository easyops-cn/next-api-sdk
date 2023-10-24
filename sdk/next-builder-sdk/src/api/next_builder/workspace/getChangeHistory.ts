import { http, HttpOptions } from "@next-core/http";
import { ResponseBodyWrapper } from "../../../wrapper.js";

export interface WorkspaceApi_GetChangeHistoryRequestParams {
  /** 时间戳, 返回比这时间戳更早的变更历史, 0 则表示从最新的变更开始查询 */
  ts?: number;

  /** 最大返回条目数 */
  limit?: number;
}

export interface WorkspaceApi_GetChangeHistoryResponseBody {
  /** 最后一条变更历史的时间戳，可用作下一次查询 */
  ts?: number;

  /** 变更历史列表 */
  list?: WorkspaceApi_GetChangeHistoryResponseBody_list_item[];
}

/**
 * @description 获取变更历史（从上一次commit开始）
 * @endpoint GET /api/v1/next-builder/workspace/:appId/changes
 */
export const WorkspaceApi_getChangeHistory = async (
  appId: string | number,
  params: WorkspaceApi_GetChangeHistoryRequestParams,
  options?: HttpOptions
): Promise<WorkspaceApi_GetChangeHistoryResponseBody> =>
  /**! @contract easyops.api.next_builder.workspace.GetChangeHistory@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<WorkspaceApi_GetChangeHistoryResponseBody>
    >(
      `api/gateway/next_builder.workspace.GetChangeHistory/api/v1/next-builder/workspace/${appId}/changes`,
      { ...options, params }
    )
  ).data;

export interface WorkspaceApi_GetChangeHistoryResponseBody_list_item {
  /** 变更操作, add/delete/edit/import/append_relation/remove_relation/update_relation... */
  action?: string;

  /** node变更的对象分类, project/image/menu/menuItem/permission/i18n/function/route/brick/template/workflow... */
  category?: string;

  /** relation变更的relationId */
  relationId?: string;

  /** 变更对象的唯一标识，例如实例instanceId，关系两端id */
  uniqueKey?: string;

  /** 变更的概要信息 */
  abstract?: WorkspaceApi_GetChangeHistoryResponseBody_list_item_abstract;

  /** 变更用户 */
  user?: string;

  /** 变更的唯一id(ts) */
  changeId?: number;

  /** rollbackId(当操作是rollback)时使用， 表明回退到哪个步骤 */
  rollbackId?: number;

  /** 变更时间戳 */
  ts?: number;

  /** 变更前内容Hash */
  oldHash?: string;

  /** 变更后内容Hash */
  newHash?: string;
}

export interface WorkspaceApi_GetChangeHistoryResponseBody_list_item_abstract {
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
