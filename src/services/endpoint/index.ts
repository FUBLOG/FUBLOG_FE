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
const tagEndpoint = {
  GET_TAG : `/tag`,
}
const postEndpoint = {
  GET_POSTS : `/post`,
  POST_POST : `/post`,
}
const editProfileEndpoint = {
  PROVINCE: `${prefixBase}/province`,
  DISTRICT: `${prefixBase}/province/district`,
  WARD: `${prefixBase}/province/ward`,
};
//export endpoint
export { authEndpoint, editProfileEndpoint, userEndpoint, messageEndpoint,tagEndpoint,postEndpoint };
