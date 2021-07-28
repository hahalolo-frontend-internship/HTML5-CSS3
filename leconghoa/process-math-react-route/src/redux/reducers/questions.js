import produce from "immer";
import {
  GET_LIST_QUESTION,
  GET_LIST_QUESTION_SUCCESS,
  GET_LIST_QUESTION_FAILED,
} from "../constants/questions";

export const initialState = {
  questions: [],
  statusFlags: {
    isLoading: false,
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
      case GET_LIST_QUESTION: {
        draft.statusFlags.isLoading = true;
        break;
      }
      case GET_LIST_QUESTION_SUCCESS: {
        draft.statusFlags.isLoading = false;
        draft.questions = action.payload;
        break;
      }
      case GET_LIST_QUESTION_FAILED: {
        draft.statusFlags.isLoading = false;
        draft.log.error = action.message;
        break;
      }
    }
  });

export default appReducer;
