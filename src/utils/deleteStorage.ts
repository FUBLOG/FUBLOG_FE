import { constants } from "@/settings";
import webStorageClient from "./webStorageClient";

const deleteStorage = () => {
  webStorageClient.remove(constants.ACCESS_TOKEN);
  webStorageClient.remove(constants.PROFILE_HASH);
  webStorageClient.set(constants.IS_AUTH, false);
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("privateKey");
};
export default deleteStorage;
