import {useState, useEffect, useLayoutEffect} from "react";

export const RandomValue = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
   if (value === 0) {
     setValue(Math.random());
   }
  }, [value]);

  console.log(value);

  return <div onClick={() => setValue(0)} style={{userSelect: "none"}}>{value}</div>;
};
