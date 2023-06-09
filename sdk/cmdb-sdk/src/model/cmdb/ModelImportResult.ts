import { ModelImportStatus, ModelObjectIndex } from "./index.js";

/** ImportResult */
export interface ModelImportResult {
  /** 模型的实例ID列表 */
  objectId: string;

  /** 模型名称 */
  name: string;

  /** 分类, 点分表示二级分类 */
  category: string;

  /** 说明 */
  memo: string;

  /** true代表是核心模型，是受保护的模型，不允许被删除 */
  protected: boolean;

  /** 模型所属小产品，有值则会在界面隐藏该模型 */
  system: string;

  /** 状态码 */
  code: number;

  /** 导入信息 */
  message: string;

  /** 基础信息导入结果 */
  info_result: Partial<ModelImportStatus>[];

  /** 关系分组导入结果 */
  relation_group_result: Partial<ModelImportStatus>[];

  /** 属性导入结果 */
  attr_list_result: Partial<ModelImportStatus>[];

  /** 关系导入结果 */
  relation_list_result: Partial<ModelImportStatus>[];

  /** 索引导入结果 */
  index_list_result: (Partial<ModelObjectIndex> &
    ModelImportResult_index_list_result_item)[];

  /** 是否新建模型 */
  is_create: boolean;

  /** 是否是抽象模型(父模型) */
  isAbstract: boolean;

  /** 所属父模型 */
  parentObjectId: string;
}

export interface ModelImportResult_index_list_result_item {
  /** 状态码 */
  code?: number;

  /** 描述 */
  message?: string;
}
