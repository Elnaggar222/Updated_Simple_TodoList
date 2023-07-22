import { todosTypes } from "../Types";

const localStorageTodos = localStorage.getItem("todosList") ?
                      JSON.parse(localStorage.getItem("todosList")) : []

const initialState = {
  todos:localStorageTodos ,
  activeTodo: {},
};

const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case todosTypes.ADD_NEW_TODO:
      return { ...state, todos: [action.payload, ...state.todos] };
    case todosTypes.CONVERT_TASK_COMPLETION:
      return {...state , todos:convertTask(state.todos, action.payload)};
    case todosTypes.DELETE_TASK:
      return {...state , todos:DeleteTask(state.todos, action.payload)};
    case todosTypes.SET_ACTIVE_TODO:
      return {...state ,activeTodo:action.payload};
    case todosTypes.EDIT_TODO:
      return {...state ,todos:editTask(state.todos,state.activeTodo,action.payload)};
    default:
      return state;
  }
};

const convertTask = (allTodos, id) => {
  return allTodos.map((td) => {
    if (td.id === id) {
      td.done = !td.done;
      return td;
    } else {
      return td;
    }
  });
};

const DeleteTask = (allTodos, id) => {
  return allTodos.filter(td =>  td.id !== id)
}

const editTask = (allTodos , activeTodo , newTitle ) => {
  return allTodos.map((td) => {
    if(td.id === activeTodo.id){
      td.title = newTitle
      return td
    }else{
      return td
    }
  })
}

export default TodosReducer;
