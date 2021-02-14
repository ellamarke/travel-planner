import React, { useState } from "react";

const initialState = {
  favouritePlaces: [],
  myLists: [
    { listName: "Master Packing List" },
    { listName: "Weekend Away Packing List" },
  ],
};

export const Context = React.createContext();

const Store = ({ children }) => {
  const [state, setState] = useState(initialState);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default Store;
