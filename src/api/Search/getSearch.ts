import { search } from "@/services/endpoint";
import { getRequest } from "@/services/request";

export const getSearchUser = async (keywords: string) => {
  try {
    await getRequest(search.SEARCH_FRIEND, {
      security: true,
      data: keywords,
    })
      .then((res: any) => {
        console.log(res);
        return true;
      })
      .catch((error) => {
        console.log("không tìm ra");

        return false;
      })

      .finally(() => {});
  } catch (error) {
    console.log("không tìm ra");

    return false;
  }
};
