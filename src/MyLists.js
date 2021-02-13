import "./css/App.css";
import "./css/Layout.css";
import React, { useState } from "react";

function MyLists() {
  return (
    <div className="list-grid">
      <h1>My Lists</h1>
      <p className="my-lists-introduction">
        Id consectetur excepteur consectetur adipisicing ex non cupidatat id ad
        ex. Cupidatat aliqua laborum officia proident eu reprehenderit id ea
        minim nisi voluptate nisi. Amet et reprehenderit qui qui est anim. Esse
        tempor incididunt consectetur ad et esse consectetur fugiat veniam.
      </p>
      <div className="list-cards">
        {lists.map((list) => (
          <ProfileListCard cardName={list.cardName} />
        ))}
      </div>

      <button className="add-list">create a new list</button>
    </div>
  );
}

function ProfileListCard({ cardName }) {
  const [deleteList, setDeleteList] = useState(false);

  function handleClick() {
    deleteList ? setDeleteList(false) : setDeleteList(true);
  }

  function openList() {
    console.log("list opens on screen!");
  }

  return (
    <div className="list-card" onClick={openList}>
      <p className="card-name">{cardName}</p>
      <img
        src="img/heart.png"
        alt="delete button"
        onClick={handleClick}
        className={deleteList ? "delete-icon-selected" : "delete-icon"}
      ></img>
    </div>
  );
}

// if user presses delete, the list is removed from their myLists. The other items shift along the grid

export default MyLists;
