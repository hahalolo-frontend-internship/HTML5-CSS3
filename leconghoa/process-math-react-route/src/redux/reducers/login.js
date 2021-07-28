import produce from "immer";
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from "../constants/login";

const User = JSON.parse(localStorage.getItem("isSignIn"));
export const initialState = {
  user: User || [],
  statusLoginFlags: {
    isLoading: false,
    isSuccessLogin: User ? true : false,
  },
  log: {
    error: "",
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type } = action;
    switch (type) {
      case LOGIN: {
        draft.statusLoginFlags.isSuccessLogin = false;
        draft.statusLoginFlags.isLoading = true;
        break;
      }
      case LOGIN_SUCCESS: {
        draft.statusLoginFlags.isLoading = false;
        draft.statusLoginFlags.isSuccessLogin = true;
        draft.users = action.payload;
        break;
      }
      case LOGIN_FAILED: {
        draft.statusLoginFlags.isLoading = false;
        draft.statusLoginFlags.isSuccessLogin = false;
        draft.log.error = action.message;
        break;
      }
      case LOGOUT: {
        draft.statusLoginFlags.isSuccessLogin = false;
        localStorage.removeItem("isSignIn");
        break;
      }
    }
  });

export default appReducer;
