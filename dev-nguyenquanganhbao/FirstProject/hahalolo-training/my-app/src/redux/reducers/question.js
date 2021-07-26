import produce from "immer";
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

export const initialState = {
  listQuestion: [],
  selectQuestion: [],
  timeOut: 0,
  result: {},
  statusFlags: {
    isLoading: false,
    isStopTime: false,
  },
  log: {
    error: "",
  },
};

const questionReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type } = action;
    switch (type) {
      case GET_LIST_QUESTION: {
        draft.statusFlags.isLoading = true;
        break;
      }
      case GET_LIST_QUESTION_SUCCESS: {
        draft.statusFlags.isLoading = false;
        draft.listQuestion = action.payload;
        break;
      }
      case GET_LIST_QUESTION_FAILED: {
        draft.statusFlags.isLoading = false;
        draft.log.error = action.message;
        break;
      }

      case ADD_SELECT_QUESTION: {
        if (state.selectQuestion.length > 0) {
          const index = state.selectQuestion.findIndex(
            (item) => item.parent_id === action.question.parent_id
          );
          if (index >= 0) {
            //update selectQuestion
            draft.selectQuestion[index] = {
              ...state.selectQuestion[index],
              ...action.question,
            };
          } else {
            draft.selectQuestion = [...state.selectQuestion, action.question];
          }
        } else {
          draft.selectQuestion = [...state.selectQuestion, action.question];
        }

        break;
      }

      case RESET_SELECT_QUESTION: {
        draft.selectQuestion = action.question;
        break;
      }

      case STOP_TIME: {
        draft.statusFlags.isStopTime = true;
        break;
      }

      case RESET_STOP_TIME: {
        draft.statusFlags.isStopTime = false;
        break;
      }

      case GET_TIME_OUT: {
        draft.timeOut = action.time;
        break;
      }

      case RESET_TIME_OUT: {
        draft.timeOut = 0;
        break;
      }

      case GET_RESULT: {
        let sumQuestion = state.listQuestion.length;
        let countQuestionCorrect = 0;
        let countQuestionWrong = 0;
        state.selectQuestion.map((i) =>
          i.result ? countQuestionCorrect++ : countQuestionWrong++
        );
        let scores =
          Math.round(countQuestionCorrect * (10 / sumQuestion) * 100) / 100;
        const result = {
          scores: scores,
          timeOut: state.timeOut,
          countQuestionCorrect: countQuestionCorrect,
          countQuestionWrong: countQuestionWrong,
        };
        draft.result = result;
        break;
      }

      case RESET_RESULT: {
        draft.result = {};
        break;
      }

      default: {
        break;
      }
    }
  });

export default questionReducer;
