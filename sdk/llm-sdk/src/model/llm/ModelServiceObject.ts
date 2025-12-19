import {
  ModelServiceObjectAttribute,
  ModelServiceObjectRelation,
} from "./index.js";

/** 服务对象模型定义 */
export interface ModelServiceObject {
  /** CMDB模型ID（带命名空间） */
  objectId: string;

  /** 服务对象名称 */
  objectName: string;

  /** 服务对象描述 */
  description: string;

  /** 字段定义列表 */
  attributes: Partial<ModelServiceObjectAttribute>[];

  /** 生命周期定义（mermaid graph格式） */
  lifecycle: string;

  /** 关系定义列表 */
  relations: Partial<ModelServiceObjectRelation>[];

  /** 创建者 */
  creator: string;

  /** 创建时间 */
  ctime: string;

  /** 修改者 */
  modifier: string;

  /** 修改时间 */
  mtime: string;
}
