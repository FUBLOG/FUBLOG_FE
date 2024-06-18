import { notificationEndpoint } from "@/services/endpoint";
import { getRequest, postRequest } from "@/services/request";
export const getAllNotifications = async () => {
  return await getRequest(notificationEndpoint.GET_NOTIFICATIONS, {
    security: true,
  });
};
