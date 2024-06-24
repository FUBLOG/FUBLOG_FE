import { ProfileRequestResponseList } from "@/model/response";
import { search } from "@/services/endpoint";
import { postRequest } from "@/services/request";

export const getSearchUser = async (
  keywords: string
): Promise<ProfileRequestResponseList["metadata"]> => {
  try {
    const res = await postRequest(search.SEARCH_FRIEND, {
      security: true,
      data: {
        displayName: keywords,
      },
    });

    return res?.metadata;
  } catch (error) {
    return [];
  }
};
