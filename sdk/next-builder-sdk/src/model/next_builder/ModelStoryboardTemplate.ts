import { ModelMicroAppProject } from "./index.js";

/** Storyboard template */
export interface ModelStoryboardTemplate {
  /** proxy */
  proxy: string;

  /** templateId */
  templateId: string;

  /** project */
  project: Partial<ModelMicroAppProject>;
}
