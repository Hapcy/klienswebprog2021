import { SET_USER } from "./actions";

const initialState = null;

export function userReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_USER: {
      newState = action.payload;
      break;
    }
    default: {
      newState = state;
      break;
    }
  }
  return newState;
}