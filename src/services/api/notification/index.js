import { notificationEndpoint } from "@/services/endpoint";
import { getRequest, postRequest } from "@/services/request";
export const getAllNotifications = async () => {
  return await getRequest(notificationEndpoint.GET_NOTIFICATIONS, {
    security: true,
  });
}
export const markNotificationAsRead = async (notificationId) => {
  return await getRequest(notificationEndpoint.MARK_AS_READ(notificationId), {
    security: true,
  });
};


export const markAllNotificationsAsRead = async () => {
  return await patchRequest(notificationEndpoint.MARK_ALL_AS_READ, {}, {
    security: true,
  });
};