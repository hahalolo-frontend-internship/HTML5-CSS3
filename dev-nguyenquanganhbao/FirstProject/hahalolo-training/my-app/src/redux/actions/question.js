import {
  GET_LIST_QUESTION,
  GET_LIST_QUESTION_SUCCESS,
  GET_LIST_QUESTION_FAILED,
  ADD_SELECT_QUESTION,
  RESET_SELECT_QUESTION,
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
