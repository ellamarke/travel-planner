import React, { useState, useContext } from "react";
import "./css/Layout.css";
import "./css/Profile.css";
import ListForm from "./ListForm";
import List from "./List";

function ListItems() {
  const [listItems, setListItems] = useState([]);

  const addListItem = (listItem) => {
    if (!listItem.text || /^\s*$/.test(listItem.text)) {
      return;
    }

    const newListItems = [listItem, ...listItems];

    setListItems(newListItems);
    console.log(newListItems);
  };

  const updateList = (listItemId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setListItems((prev) =>
      prev.map((item) => (item.id === listItemId ? newValue : item))
    );
  };

  const removeListItem = (id) => {
    const removeArray = [...listItems].filter((listItem) => listItem.id !== id);
    setListItems(removeArray);
  };

  const completeListItem = (id) => {
    let updatedListItems = listItems.map((listItem) => {
      if (listItem.id === id) {
        listItem.isComplete = !listItem.isComplete;
      }
      return listItem;
    });
    setListItems(updatedListItems);
  };

  return (
    <div className="list-items">
      <h1>Master Packing List</h1>
      <ListForm onSubmit={addListItem} />
      <List
        listItems={listItems}
        completeListItem={completeListItem}
        removeListItem={removeListItem}
        updateList={updateList}
      />
    </div>
  );
}

export default ListItems;
