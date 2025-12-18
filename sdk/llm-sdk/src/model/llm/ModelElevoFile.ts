/** elevo文件对象 */
export interface ModelElevoFile {
  /** 文件ID */
  fileId: string;

  /** 文件名称 */
  fileName: string;

  /** 文件大小 */
  fileSize: number;

  /** 文件类型 */
  fileType: string;

  /** 上传时间 */
  uploadTime: string;

  /** 上传状态 */
  status: string;

  /** 会话ID */
  conversationId: string;

  /** 对象存储URL */
  ossUrl: string;

  /** 解析后内容的对象存储URL */
  contentOssUrl: string;
}
