/** PROJECT@AI模型定义 */
export interface ModelElevoProject {
  /** 实例ID */
  instanceId: string;

  /** 项目名称 */
  name: string;

  /** 项目描述 */
  description: string;

  /** 状态 */
  state: "active" | "inactive";

  /** 默认数字人ID */
  defaultAiEmployeeId: string;

  /** 创建者 */
  creator: string;

  /** 创建时间 */
  ctime: string;

  /** 修改时间 */
  mtime: string;

  /** 修改者 */
  modifier: string;
}
