import axios from "axios";
import _find from "lodash/find";
import _get from "lodash/get";
import { call, put, takeLatest } from "redux-saga/effects";
import { loginFailure, loginSuccess } from "../actions/login";
import { LOGIN } from "../constants/login";

// function that makes the api request and returns a Promise for response
function fetchUsers() {
  return axios({
    method: "GET",
    url: "http://localhost:5000/users",
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* callApiUsers(userInfo) {
  const user = userInfo.userInfo;
  const response = yield call(fetchUsers);
  const data = _get(response, "data", []);
  const findUser = _find(
    data,
    (item) =>
      (item.email === user.username || item.numberphone === user.username) &&
      item.password === user.password
  );
  if (findUser) {
    localStorage.setItem("isSignIn", JSON.stringify(findUser));
    yield put(loginSuccess(findUser));
  } else {
    console.log("thất bại");
    yield put(loginFailure("Đăng nhập thất bại"));
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* userSaga() {
  yield takeLatest(LOGIN, callApiUsers);
}
