


import { ADD_TODO, SET_IS_LOADED } from "../actionTypes"

export const addTodo = data => ({
  type: ADD_TODO,
  payload: {
    data
  }
});

export const setIsLoaded = isLoaded => ({
  type: SET_IS_LOADED,
  payload: {
    isLoaded
  }
})