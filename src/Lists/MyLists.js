import "../css/Profile.css";
import "../css/Layout.css";
import React, { useContext } from "react";
import { Context } from "../Store";
import { useHistory } from "react-router-dom";
import { newList } from "./StarterLists";

function MyLists({ lists }) {
  const [state, setState] = useContext(Context);
  const history = useHistory();

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
          <ProfileListCard list={list} key={list.listName} />
        ))}
      </div>

      <button
        className="add-list"
        onClick={() => AddNewList(state, setState, history)}
      >
        create a new list
      </button>
    </div>
  );
}

function AddNewList(state, setState, history) {
  // this isn't a functional component -- it's just a normal function. This means we can't use Hooks directly
  const myLists = state.myLists;
  const anotherList = JSON.parse(JSON.stringify(newList)); // this is cloning newList
  myLists.push(anotherList); // this adds anotherList to myList

  setState({ ...state, myLists: myLists, currentList: anotherList }); // this updates the state with the previous state and changes the current list to the newly made list
  history.push("/ListEdit");
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

export default MyLists;
