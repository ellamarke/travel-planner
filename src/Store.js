import React, { useState } from "react";
import StarterLists from "./Lists/StarterLists";

const defaultState = {
  favouritePlaces: [],
  myLists: StarterLists,
  currentList: StarterLists[0],
  // If we add anything else here, it won't appear if localStorage isn't cleared as it defaults to getFromLocalStorage
};

export const Context = React.createContext();

const Store = ({ children }) => {
  const initialState = getFromLocalStorage() || defaultState;
  const [state, setState] = useState(initialState);

  const mySetState = (newState) => {
    setState(newState);
    saveToLocalStorage(newState);
  };
  return (
    <Context.Provider value={[state, mySetState]}>{children}</Context.Provider>
  );
};

function getFromLocalStorage() {
  const travelPlanner = localStorage.getItem("TravelPlannerStorage");
  return travelPlanner && JSON.parse(travelPlanner);
}

function saveToLocalStorage(state) {
  localStorage.setItem("TravelPlannerStorage", JSON.stringify(state));
}
export default Store;
