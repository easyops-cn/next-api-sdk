/** Elevo 聊天指令，采用 type + payload 模式，参考 Cursor/Claude Code 的可扩展指令系统 */
export interface ModelElevoCmd {
  /** 指令类型，如：serviceFlowStarting, goalPlanning 等 */
  type: string;

  /** 动态参数体，根据 type 解析为不同的 Payload 结构体。使用 json.RawMessage 实现延迟解析，保证类型安全和扩展性。 */
  payload: Record<string, any>;
}
