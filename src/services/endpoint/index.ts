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
const friendEndpoint = {
  GET_REQUESTS: `/friend/request`,
  ADD_FRIEND: `/friend/send`,
  ACCEPT_FRIEND: `/friend/accept`,
  DECLINE_FRIEND: `/friend/decline`,
  REMOVE_FRIEND: `/friend/unfriend`,
  BLOCK_FRIEND: `/friend/block`,
  UNBLOCK_FRIEND: `/friend/unblock`,
  GET_BLOCKED_FRIENDS: `/friend/block`,
  FRIEND_LIST: `/friend`,
  GET_REQUESTS_SENT: `/friend/request/`,
};
const notificationEndpoint = {
  GET_NOTIFICATIONS: `/notification`,
  MARK_AS_READ: `/notification/`,
  MARK_ALL_AS_READ: `/notification/`,
};
const search = {
  SEARCH_FRIEND: `/search/user`,
};
const profileEndpoint = {
  PROFILE_HASH: `/profile/`,
};
//export endpoint
export {
  profileEndpoint,
  authEndpoint,
  search,
  editProfileEndpoint,
  userEndpoint,
  messageEndpoint,
  friendEndpoint,
  notificationEndpoint,
};