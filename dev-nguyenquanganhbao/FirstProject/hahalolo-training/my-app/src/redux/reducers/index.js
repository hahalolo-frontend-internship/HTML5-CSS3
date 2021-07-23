import { combineReducers } from "redux";
import accountReducer from "./account";
import resultReducer from "./result";

const rootReducer = combineReducers({
  account: accountReducer,
  result: resultReducer,
});

export default rootReducer;
