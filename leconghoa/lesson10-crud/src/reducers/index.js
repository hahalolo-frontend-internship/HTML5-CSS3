import { combineReducers } from "redux";
import tasks from "./tasks";
import toogleForm from "./toogleForm";
import itemEditing from "./itemEditing";
const myReducer = combineReducers({
  tasks,
  toogleForm,
  itemEditing,
});
export default myReducer;
