import { useEffect, useState } from "react";
import { profileEndpoint } from "@/services/endpoint";
import { getRequest } from "@/services/request";
import { create } from "zustand";
import { useRouter } from "next/navigation";
interface ProfileProps {
  profileHash: any;
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

export const useGetProfile = (profileHash: any) => {
  const [loading, setLoading] = useState(false);
  const { setProfile, setProfileHash, profile } = useProfile();
  const [profileSearch, setProfileSearch] = useState<any>();
  const router = useRouter();
  const getUserInfo = async (hash: any) => {
    setLoading(true);
    try {
      const res = await getRequest(profileEndpoint.PROFILE_HASH + hash);

      const metadata = res?.metadata;

      if (metadata) {
        setProfileHash(hash);
        setProfile(metadata);
        setProfileSearch(metadata);
      } else {
        throw new Error("Profile metadata not found.");
      }
    } catch (error) {
      router.replace("/not-found");
    } finally {
      setLoading(false);
    }
    return null;
  };
  useEffect(() => {
    getUserInfo(profileHash);
  }, [profileHash]);

  return { profile, setProfile, profileSearch, getUserInfo, loading };
};
