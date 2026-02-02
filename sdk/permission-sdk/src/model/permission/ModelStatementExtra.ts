/** Statement额外信息 */
export interface ModelStatementExtra {
  /** 额外信息, 资源过滤类型 */
  extraFilterType:
    | ""
    | "all"
    | "yaml"
    | "cmdbInstance.resource.selectInstance"
    | "cmdbInstance.resource.condition"
    | "cmdbInstance.resourceOwner.currResource"
    | "cmdbInstance.resourceOwner.relation"
    | "tool.selectTool"
    | "tool.selectToolCategory";

  /** 额外信息, 关系路径标识 */
  extraRelationPath: ModelStatementExtra_extraRelationPath_item[];
}

export interface ModelStatementExtra_extraRelationPath_item {
  /** 模型id */
  objectId?: string;

  /** 关系向量id */
  relationSideId?: string;
}
