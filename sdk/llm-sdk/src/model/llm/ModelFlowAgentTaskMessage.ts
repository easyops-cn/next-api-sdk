/** flow agent的消息 */
export interface ModelFlowAgentTaskMessage {
  /** 角色 */
  role: string;

  /** 消息 */
  parts: ModelFlowAgentTaskMessage_parts_item[];
}

export interface ModelFlowAgentTaskMessage_parts_item {
  /** 消息类型，可选：text, file, data */
  type?: string;

  /** 类型为text时的内容 */
  text?: string;

  /** 类型为file时的内容 */
  file?: ModelFlowAgentTaskMessage_parts_item_file;

  /** 类型为data时的内容 */
  data?: Record<string, any>;
}

export interface ModelFlowAgentTaskMessage_parts_item_file {
  /** 文件名 */
  name?: string;

  /** 类型 */
  mimeType?: string;

  /** base64编码后的内容 */
  bytes?: string;

  /** 链接 */
  uri?: string;
}
