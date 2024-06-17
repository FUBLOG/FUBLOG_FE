const prefixBase: string = "/api";

const authEndpoint = {
  SIGN_IN: `/access/login`,
  SIGN_UP: `/user/newUser`,
  VERIFY_TOKEN: `/access/verifyToken`,
  REFRESH_TOKEN: `/access/refreshToken`,
  FORGOT_PASSWORD: `/auth/forgot-password`,
  RESET_PASSWORD: `/auth/reset-password-with-otp-code`,
  AUTH_TOKEN: `/auth/checkToken`,
};
const userEndpoint = {
  USER_MESSAGES: `/user/getUserMessages`,
};
const messageEndpoint = {
  GET_MESSAGE: `/message/`,
  SEND_MESSAGE: `/message/send/`,
};
const editProfileEndpoint = {
  PROVINCE: `${prefixBase}/province`,
  DISTRICT: `${prefixBase}/province/district`,
  WARD: `${prefixBase}/province/ward`,
};
const profileEndpoint = {
  PROFILE_HASH: `/profile/`,
};
const addFriendEndpoint = {
  SEND_FRIEND: `/friend/send`,
  ACCEPT_FRIEND: `/friend/accept`,
  DECLINE_FRIEND: `/friend/decline`,
  UNFRIEND: `/friend/unFriend`,
  BLOCK_FRIEND: `/friend/block`,
  ALL_BLOCKS: `/friend/block`,
  ALL_FRIEND: `/friend/getAll`,
  IS_REQUEST: `/friend/request/`,
  ALL_REQUEST: `/friend/request`,
};
//export endpoint
export {
  authEndpoint,
  editProfileEndpoint,
  userEndpoint,
  messageEndpoint,
  profileEndpoint,
  addFriendEndpoint,
};
