import { http, HttpOptions } from "@next-core/http";

/**
 * @description 启用Org[内部]
 * @endpoint PUT /api/v1/org/:id/enable
 */
export const OrganizationApi_enableOrg = (
  id: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.organization.EnableOrg@1.0.0 */ http.put<void>(
    `api/gateway/user_service.organization.EnableOrg/api/v1/org/${id}/enable`,
    undefined,
    options
  );
