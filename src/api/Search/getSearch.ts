import { search } from "@/services/endpoint";
import { getRequest, postRequest } from "@/services/request";

export const getSearchUser = async (keywords: string) => {
  try {
    await postRequest(search.SEARCH_FRIEND, {
      security: true,
      data: {
        displayName: keywords,
      },
    })
      .then((res: any) => {
        console.log("ok vẫn phản hồi");

        console.log(res);
      })
      .catch((error) => {})
      .finally(() => {});
  } catch (error) {}
};
