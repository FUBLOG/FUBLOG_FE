import { useEffect, useState } from "react";
import { profileEndpoint } from "@/services/endpoint";
import { getRequest } from "@/services/request";
import { create } from "zustand";
import { ProfileRequestResponse } from "@/model/response";
interface ProfileProps {
  profileHash: string;
  setProfileHash: (value: string) => void;
  profile: any;
  setProfile: (value: any) => void;
}

export const useProfile = create<ProfileProps>((set) => ({
  profileHash: "",
  setProfileHash: (value) => set({ profileHash: value }),
  profile: null,
  setProfile: (value) => set({ profile: value }),
}));

export const useGetProfile = (profileHash: string) => {
  const [loading, setLoading] = useState(false);
  const { setProfile, setProfileHash, profile } = useProfile();
  const [profileSearch, setProfileSearch] = useState<any>();
  useEffect(() => {
    const getUserInfo = async (hash: string) => {
      setLoading(true);
      try {
        const res = await getRequest(profileEndpoint.PROFILE_HASH + hash);

        const metadata = res?.metadata;
        console.log(res);

        if (metadata) {
          setProfileHash(hash);
          setProfile(metadata);
          setProfileSearch(metadata);
        } else {
          throw new Error("Profile metadata not found.");
        }
      } catch (error) {
        console.error("Failed to fetch profile data:", error);
      } finally {
        setLoading(false);
      }
      return null;
    };
    getUserInfo(profileHash);
  }, []);

  return { profile, setProfile, profileSearch };
};
