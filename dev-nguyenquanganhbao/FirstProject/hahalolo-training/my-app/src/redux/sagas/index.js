import { all } from "redux-saga/effects";
import accountSaga from "./accountSaga";
import rerultSaga from "./resultSaga";

export default function* rootSaga() {
  yield all([accountSaga(), rerultSaga()]);
}
