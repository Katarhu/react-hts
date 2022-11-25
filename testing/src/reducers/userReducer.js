import * as userAction from "../actions/constants";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case userAction.SET_USER:
      return {...state, users: action.payload};
    case userAction.SET_ACTIVE_USER:
      const activeUser = state.activeUser === action.payload ? null : action.payload;
      return {...state, activeUser};
    case userAction.SET_FILTER:
      return {...state, filter: action.payload};
    default:
      return state;
  }
};

export default userReducer;
