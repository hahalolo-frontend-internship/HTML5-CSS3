import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from "../constants/login";

export function login(userInfo) {
  return {
    type: LOGIN,
    userInfo,
  };
}

export function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload, // payload: payload
  };
}

export function loginFailure(message = "") {
  return {
    type: LOGIN_FAILED,
    message, // message: message
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
