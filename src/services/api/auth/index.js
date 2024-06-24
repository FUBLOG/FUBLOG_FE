import { authEndpoint } from "@/services/endpoint";
import { getRequest } from "@/services/request";

export const checkAuth = async () => {
  return await getRequest(authEndpoint.AUTH_TOKEN, {
    security: true,
  });
};
