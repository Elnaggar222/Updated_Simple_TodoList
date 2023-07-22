import ModesReducer from "./Modes/ModesReducer";
import TodosReducer from "./Todos/TodosReducer";
import { combineReducers } from "redux";
const AllReducers = combineReducers({
  todosState: TodosReducer,
  modesState: ModesReducer,
});
export default AllReducers;
