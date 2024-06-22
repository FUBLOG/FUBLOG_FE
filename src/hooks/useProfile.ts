import { useEffect, useState } from "react";
import { profileEndpoint } from "@/services/endpoint";
import { getRequest } from "@/services/request";
import { create } from "zustand";
import { useAuth } from "./useAuthStatus";
import { ProfileRequestResponse } from "@/model/response";
import webStorageClient from "@/utils/webStorageClient";
import { constants } from "@/settings";
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
  const { loading, setLoading } = useAuth();
  const { setProfile, setProfileHash } = useProfile();
  useEffect(() => {
    const getUserInfo = async (hash: string) => {
      try {
        setLoading(true);
        const res = await getRequest(profileEndpoint.PROFILE_HASH + hash);

        const metadata: ProfileRequestResponse = res?.metadata;
        if (metadata) {
          setProfileHash(hash);
          setProfile(metadata);
          return metadata;
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
    if (!loading) {
      getUserInfo(profileHash);
    }
  }, [profileHash]);

  return { setProfile, loading };
};
