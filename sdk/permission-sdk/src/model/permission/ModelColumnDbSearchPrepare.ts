/** columnDB辅助查询 */
export interface ModelColumnDbSearchPrepare {
  /** name */
  name: string;

  /** 资源id */
  resource: string;

  /** 查询条件 */
  filter: string;

  /** 选择字段 */
  fields: string[];
}
