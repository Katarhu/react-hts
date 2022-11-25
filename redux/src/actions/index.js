import {ADD_TODO, TOGGLE_TODO} from "./constnts";

let nextTodoID = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    text,
    id: nextTodoID++,
  }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id
});
