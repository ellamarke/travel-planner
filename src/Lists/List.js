import React, { useState } from "react";
import "../css/Layout.css";
import "../css/Profile.css";
import "../css/lists.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
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
        <RiCloseCircleLine
          onClick={() => removeListItem(listItem.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: listItem.id, value: listItem.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default List;
