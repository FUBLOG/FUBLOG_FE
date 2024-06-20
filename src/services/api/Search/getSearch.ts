import { search } from "@/services/endpoint";
import { postRequest } from "@/services/request";

export const getSearchUser = async (keywords: string) => {
  try {
    await postRequest(search.SEARCH_FRIEND, {
      security: true,
      data: {
        displayName: keywords,
      },
    })
      .then((res: any) => {
        return res?.metadata;
      })
      .catch((error) => {
        return [];
      })
      .finally(() => {});
  } catch (error) {
    return [];
  }
};
