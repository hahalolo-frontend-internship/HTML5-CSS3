import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from "../constants/login";
// Đăng nhập
export const login = (userInfo) => {
  return {
    type: LOGIN,
    userInfo,
  };
};
export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};
export const loginFailed = (message) => {
  return {
    type: LOGIN_FAILED,
    message,
  };
};
// Đăng xuất
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
