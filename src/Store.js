import React, { useState } from "react";
import StarterLists from "./Lists/StarterLists";
import { articles } from "./Reference/Articles";

const defaultState = {
  favouritePlaces: [],
  myLists: StarterLists,
  currentList: StarterLists[0],
  myArticles: [],
  currentArticleName: articles[0].articleName,
  // will need to delete local storage if adding to this
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
