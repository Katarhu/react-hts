import React from "react";

import { CounterButton } from "../CounterButton/CounterButton";
import { useCounter } from "../../hooks/useCounter";

export const Counter = () => {
  const { count, increment, decrement, setCount } = useCounter();

  const handleChangeInput = ({ target }) => setCount(parseInt(target.value));

  return (
    <div>
      <input role="input" aria-label="input" type="number" value={count} onChange={handleChangeInput}/>
      <CounterButton onClick={increment}>+</CounterButton>
      <CounterButton onClick={decrement}>-</CounterButton>
    </div>
  );
};
