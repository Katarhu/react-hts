import {useReducer} from "react";

const init = (initialValue) => {
  return {
    count: initialValue
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "decrement":
      return {count: state.count - 1};
    case "increment":
      return {count: state.count + action.num};
    default:
      throw new Error();
  }
};

export const Counter = ({initialCount}) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <>
    <span>{state.count}</span>

      <button onClick={() => dispatch({type: "decrement"})}>-</button>
      <button onClick={() => dispatch({type: "increment", num: 5})}>Increment 5</button>
    </>
  );
};
