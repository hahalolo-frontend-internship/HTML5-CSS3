import {
  GET_LIST_QUESTION,
  GET_LIST_QUESTION_SUCCESS,
  GET_LIST_QUESTION_FAILED,
  ADD_SELECT_QUESTION,
  RESET_SELECT_QUESTION,
  STOP_TIME,
  RESET_STOP_TIME,
  GET_TIME_OUT,
  RESET_TIME_OUT,
  GET_RESULT,
  RESET_RESULT,
} from "../constants/question";

export function getListQuestion() {
  return {
    type: GET_LIST_QUESTION,
  };
}

export function getListQuestionSuccess(payload) {
  return {
    type: GET_LIST_QUESTION_SUCCESS,
    payload,
  };
}

export function getListQuestionFailed(message = "") {
  return {
    type: GET_LIST_QUESTION_FAILED,
    message,
  };
}

export function addSelectQuestion(question) {
  return {
    type: ADD_SELECT_QUESTION,
    question,
  };
}

export function reSetSelectQuestion(question) {
  return {
    type: RESET_SELECT_QUESTION,
    question,
  };
}

export function stopTime() {
  return {
    type: STOP_TIME,
  };
}

export function resetStopTime() {
  return {
    type: RESET_STOP_TIME,
  };
}

export function getTimeOut(time) {
  return {
    type: GET_TIME_OUT,
    time,
  };
}

export function resetTimeOut() {
  return {
    type: RESET_TIME_OUT,
  };
}

export function getResult() {
  return {
    type: GET_RESULT,
  };
}

export function resetResult() {
  return {
    type: RESET_RESULT,
  };
}
