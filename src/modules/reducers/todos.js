import { ADD_TODO, SET_IS_LOADED } from "../actionTypes";

const initialState = {
  data: [],
  isLoaded: false,
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { data } = action.payload;
      return { ...state, data }; // { ...state, data: data }
    }

    case SET_IS_LOADED: {
      const { isLoaded } = action.payload;
      return { ...state, isLoaded }; // { ...state, data: data }
    }

    default: 
      return state;
  }
}

export default todos;