import * as types from "./../constants/ActionTypes";
let s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

let randomID = () => {
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

let findIndex = (tasks, id) => {
  let result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};

let data = JSON.parse(localStorage.getItem("tasks"));
let initialState = data ? data : [];
let myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      let newTask = {
        id: randomID(),
        name: action.task.name,
        status: action.task.status === "true" ? true : false,
      };
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.UPDATE_STATUS_TASK:
      let id = action.id;
      let index = findIndex(state, id);
      state[index] = { ...state[index],status: !state[index].status };
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};
export default myReducer;
