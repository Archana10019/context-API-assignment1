import React, { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const contextValues = {
    a: "hello world",
    b: "Ball",
    c: "Cat",
    d: "Dog",
    e: "Elephant",
    f: "Fish",
  };

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;