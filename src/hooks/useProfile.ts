import { useState } from "react";
import { Info, User, useProfileContext } from "@/contexts/ProfileContext";
import { profileEndpoint } from "@/services/endpoint";
import { getRequest } from "@/services/request";

export const useProfile = () => {
  const { setProfileInfo } = useProfileContext();
  const [loading, setLoading] = useState(false);
  const [profileHash, setProfileHash] = useState("");

  const getUserInfo = async (profileHash: string) => {
    setProfileHash(profileHash);
    setLoading(true);
    try {
      const res = await getRequest<{
        message: string;
        statusCode: number;
        metadata: {
          user: User;
          info: Info;
        };
      }>(profileEndpoint.PROFILE_HASH + profileHash);

      const metadata = res?.metadata;
      await setProfileInfo({
        user: {
          ...metadata.user,
          profileHash: profileHash,
        },
        info: metadata.info,
      });
    } catch (error) {
      console.error("Profile does not exist:");
    } finally {
      setLoading(false);
    }
  };

  return { getUserInfo, loading, profileHash };
};
