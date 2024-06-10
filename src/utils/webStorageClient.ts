import _ from "lodash";
import { getCookie, setCookie } from "cookies-next";
import Cookies from "js-cookie";

import { constants } from "@/settings";

const webStorageClient = {
  set(key: string, rawValue: any, option?: any) {
    const value = _.isString(rawValue) ? rawValue : JSON?.stringify(rawValue);
    setCookie(key, value, option);
  },

  get(key: string) {
    const value: string = getCookie(key) || "";
    try {
      return JSON?.parse(value);
    } catch {
      return value;
    }
  },

  remove(key: string) {
    setCookie(key, null, { maxAge: 0 });
  },

  removeAll() {
    Object.keys(Cookies.get()).forEach((cookieName) => {
      Cookies.remove(cookieName);
    });
  },

  setToken(value: string, option?: any) {
    setCookie(constants.ACCESS_TOKEN, value, option);
  },
  setProfileHash(value: string, option?: any) {
    setCookie(constants.PROFILE_HASH, value, option);
  },
  getToken: async () => {
    const data = await getCookie(constants.ACCESS_TOKEN);
    return data;
  },
  getProfileHash: async () => {
    const data = await getCookie(constants.PROFILE_HASH);
    return data;
  },
};

export default webStorageClient;
