import { search } from "@/services/endpoint";
import { getRequest } from "@/services/request";

export const getSearchUser = async (keywords: string) => {
  try {
    await getRequest(search.SEARCH_FRIEND, {
      security: true,
      keywords: keywords,
    })
      .then((res: any) => {
        console.log(res);
        return true;
      })
      .catch((error) => {
        return false;
      })

      .finally(() => {});
  } catch (error) {
    return false;
  }
};
