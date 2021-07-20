import { combineReducers } from "redux";
import  toogleForm  from "./toogleForm";
import tasks from "./tasks"
const myReducer = combineReducers({
  tasks,
  toogleForm
});
export default myReducer;
