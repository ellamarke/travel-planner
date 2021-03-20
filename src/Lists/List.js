import React, { useState } from "react";
import ListForm from "./ListForm";

function List({ listItems, completeListItem, removeListItem, updateList }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateList(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <ListForm edit={edit} onSubmit={submitUpdate} />;
  }

  return listItems.map((listItem, index) => (
    <div
      className={listItem.isComplete ? "listItem-row complete" : "listItem-row"}
      key={index}
    >
      <div key={listItem.id} onClick={() => completeListItem(listItem.id)}>
        {listItem.text}
      </div>
      <div className="icons">
        <button
          onClick={() => setEdit({ id: listItem.id, value: listItem.text })}
          className="edit-icon button"
        >
          edit <img src="img/arrow-right.svg" alt="" className="arrow-icon" />
        </button>
        <button
          onClick={() => removeListItem(listItem.id)}
          className="delete-icon button"
        >
          delete{" "}
          <img src="img/cross-red-thick.svg" alt="" className="cross-icon" />
        </button>
      </div>
    </div>
  ));
}

export default List;
