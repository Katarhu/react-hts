import userReducer from "./userReducer";
import * as userAction from "../actions/constants";

const defaultState = {
  users: [],
  filter: '',
  activeUser: null,
};

test('should return updated state', () => {
  const newState = userReducer(defaultState, {
    type: userAction.SET_USER,
    payload: [1, 2, 3]
  });

  expect(newState).toEqual({"activeUser": null, "filter": "", "users": [1, 2, 3]});
});
