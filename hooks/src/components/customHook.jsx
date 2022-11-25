import {useState, useRef, useEffect, useDebugValue} from "react";

const usePrevious = (value) => {
  const prevValue = useRef(null);

  useEffect(() => {
    prevValue.current = value;
  });

  useDebugValue(prevValue.current, (debugValue) => `Hi there ${debugValue}`);

  return prevValue.current;
};

export const Counter = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  useEffect(() => {});

  if (count === 1) {
    return null;
  }

  return (
    <>
      <h1>New state: {count}, previous state: {prevCount}</h1>
      <button onClick={() => setCount(count => count + 1)}>Update</button>
    </>
  );
};
