import React, { useState, useContext } from "react";
import "../css/Layout.css";
import "../css/Profile.css";
import ListForm from "./ListForm";
import List from "./List";
import { useEffect } from "react";
import { Context } from "../Store";
import { useHistory } from "react-router-dom";

function ListItems({ list }) {
  const [state, setState] = useContext(Context);
  const [listItems, setListItems] = useState([]);
  useEffect(() => setListItems(list.items), [list.items]);
  const history = useHistory();

  const updateCurrentList = (listItems) => {
    const myLists = state.myLists;
    const currentList = state.myLists.find(
      (globalList) => globalList.listName === list.listName
    );
    if (typeof listItems === "function") {
      currentList.items = listItems(currentList.items);
    } else {
      currentList.items = listItems;
    }
    return myLists;
  };

  const setGlobalListItems = (newListItems) => {
    setListItems(newListItems);
    setState({ ...state, myLists: updateCurrentList(newListItems) });
  };

  const addListItem = (listItem) => {
    if (!listItem.text || /^\s*$/.test(listItem.text)) {
      return;
    }

    const newListItems = [listItem, ...listItems];

    setGlobalListItems(newListItems);
    console.log(newListItems);
  };

  const updateList = (listItemId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setGlobalListItems((prev) =>
      prev.map((item) => (item.id === listItemId ? newValue : item))
    );
  };

  const removeListItem = (id) => {
    const removeArray = [...listItems].filter((listItem) => listItem.id !== id);
    setGlobalListItems(removeArray);
  };

  const completeListItem = (id) => {
    let updatedListItems = listItems.map((listItem) => {
      if (listItem.id === id) {
        listItem.isComplete = !listItem.isComplete;
      }
      return listItem;
    });
    setGlobalListItems(updatedListItems);
  };

  const changeListName = (event) => {
    console.log(event.target.value);

    setState({ ...state, myLists: updateCurrentListName(event.target.value) });
  };

  const updateCurrentListName = (listName) => {
    const myLists = state.myLists;
    const currentList = state.myLists.find(
      (globalList) => globalList.listName === list.listName
    );
    currentList.listName = listName;

    return myLists;
  };

  const returnToLists = () => {
    history.push("/profile");
  };

  return (
    <div className="list-items">
      <input
        type="text"
        value={list.listName}
        name="text"
        onChange={changeListName}
      />
      <ListForm onSubmit={addListItem} />
      <List
        listItems={listItems}
        completeListItem={completeListItem}
        removeListItem={removeListItem}
        updateList={updateList}
      />
      <button onClick={returnToLists}>Back to profile</button>
    </div>
  );
}

export default ListItems;
