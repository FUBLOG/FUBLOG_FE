const API_SERVER = "https://has.io.vn/v1/api";
import { TIME_FORMAT } from "./formatDateTime";

//cookie keys storage
const ACCESS_TOKEN = "_access_token";
const REFRESH_TOKEN = "_refresh_token";
const PRIVATEKEY = "_privateKey";
const PROFILE_HASH = "_profile_hash";

const IS_AUTH = "_is_auth";
const USER_INFO = "_user_info";

//...more in need
//addition in here
const constants = {
  API_SERVER,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  IS_AUTH,
  USER_INFO,
  TIME_FORMAT,
  PRIVATEKEY,
  PROFILE_HASH,
};
export default constants;
