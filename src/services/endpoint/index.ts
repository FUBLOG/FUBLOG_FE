//edit prefixBase here
const prefixBase: string = "/api";

const authEndpoint = {
  SIGN_IN: `/access/login`,
  SIGN_UP: `/user/newUser`,
  VERIFY_TOKEN: `/access/verifyToken`,
  REFRESH_TOKEN: `/access/refreshToken`,
  FORGOT_PASSWORD: `/auth/forgot-password`,
  RESET_PASSWORD: `/auth/reset-password-with-otp-code`,
};
const editProfileEndpoint = {
  PROVINCE: `${prefixBase}/province`,
  DISTRICT: `${prefixBase}/province/district`,
  WARD: `${prefixBase}/province/ward`,
};
//export endpoint
export { authEndpoint, editProfileEndpoint };
