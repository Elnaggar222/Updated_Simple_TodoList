import { todosTypes } from "../Types"


export const addNewTodo = (newTaskToAdd) => {
    return {
        type: todosTypes.ADD_NEW_TODO,
        payload: newTaskToAdd
    }
}   

export const convertTaskCompletion = (id) => {
    return {
        type: todosTypes.CONVERT_TASK_COMPLETION,
        payload: id
    }
}

export const deleteTask = (id) => {
    return {
        type: todosTypes.DELETE_TASK,
        payload: id
    }
}   

export const setActiveTodo = (taskObjectToEdit) => {
    return {
        type:todosTypes.SET_ACTIVE_TODO,
        payload: taskObjectToEdit
    }
}

export const editTodo = (newTitle) => {
    return {
        type:todosTypes.EDIT_TODO,
        payload: newTitle
    }
}