import {
  ProfileRequestResponse,
  ProfileRequestResponseList,
} from "@/model/response";
import { search } from "@/services/endpoint";
import { getRequest, postRequest } from "@/services/request";

export const getSearchUser = async (
  profileHash: string,
  keywords: string
): Promise<ProfileRequestResponseList["metadata"]> => {
  try {
    const res = await postRequest(search.SEARCH_FRIEND, {
      security: true,
      data: {
        profileHash: profileHash,
        displayName: keywords,
      },
    });

    return res?.metadata;
  } catch (error) {
    return [];
  }
};
