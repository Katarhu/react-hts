import {createContext, useContext} from "react";

const Context = createContext({theme: "light"});

const ChildComponent = () => {
  const contextValue = useContext(Context);

  return <div>{contextValue.theme}</div>;
};

export const ComponentWithContext = () => {

  return (
      <ChildComponent/>
  );
};
