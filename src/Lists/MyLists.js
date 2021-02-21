import "../css/Profile.css";
import "../css/Layout.css";
import React, { useContext } from "react";
import { Context } from "../Store";
import { Link, useHistory } from "react-router-dom";

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
          <ProfileListCard list={list} />
        ))}
      </div>

      <button className="add-list">create a new list</button>
    </div>
  );
}

function ProfileListCard({ list }) {
  const [state, setState] = useContext(Context);
  const history = useHistory();

  function goToList() {
    setState({ ...state, currentList: list });
    history.push("/ListEdit");
  }

  return (
    <div className="list-card" onClick={goToList}>
      <div className="list-card-bottom">
        <p className="list-name">{list.listName}</p>
        <img
          src="img/heart.png"
          alt="heart button"
          className="delete-icon"
        ></img>
      </div>
    </div>
  );
}

// if user presses delete, the list is removed from their myLists. The other items shift along the grid

export default MyLists;
