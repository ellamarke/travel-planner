import React, { useState } from "react";
import StarterLists from "./Lists/StarterLists";

const defaultState = {
  favouritePlaces: [],
  myLists: StarterLists,
  currentList: StarterLists[0],
  myArticles: [],
  // If we add anything else here, it won't appear if localStorage isn't cleared as it defaults to getFromLocalStorage
};

// add new list
// set currentList to be the newly added list
// push history to go to edit page

//  function goToList() {
//  setState({ ...state, currentList: list });
//  history.push("/ListEdit");
// }

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
  const savedState = travelPlanner && JSON.parse(travelPlanner);

  if (savedState) {
    if (savedState.currentList) {
      savedState.currentList = savedState.myLists.find(
        (list) => list.listName === savedState.currentList.listName
      );
    }
  }
  return savedState;
}

function saveToLocalStorage(state) {
  localStorage.setItem("TravelPlannerStorage", JSON.stringify(state));
}
export default Store;
