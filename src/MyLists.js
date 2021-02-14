import "./css/App.css";
import "./css/Layout.css";
import React, { useContext } from "react";
import { Context } from "./Store";

function MyLists({ lists }) {
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
          <ProfileListCard listName={list.listName} />
        ))}
      </div>

      <button className="add-list">create a new list</button>
    </div>
  );
}

function ProfileListCard({ listName }) {
  const [state, setState] = useContext(Context);
  function handleClick() {
    const myLists = state.myLists;
    const newLists = myLists.filter((list) => list !== listName);
    setState({ ...state, myLists: newLists });
  }

  return (
    <div className="list-card">
      <div className="list-card-bottom">
        <p className="list-name">{listName}</p>
        <img
          src="img/heart.png"
          alt="heart button"
          onClick={handleClick}
          className="delete-icon"
        ></img>
      </div>
    </div>
  );
}

// if user presses delete, the list is removed from their myLists. The other items shift along the grid

export default MyLists;
