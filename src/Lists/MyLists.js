import "../css/Profile.css";
import "../css/Layout.css";
import React, { useContext } from "react";
import { Context } from "../Store";
import { useHistory } from "react-router-dom";
import { newList } from "./StarterLists";

function MyLists({ lists }) {
  const [state, setState] = useContext(Context);
  const history = useHistory();

  function AddNewList() {
    // this is a closure!!
    const myLists = state.myLists;
    const anotherList = JSON.parse(JSON.stringify(newList)); // this is cloning newList
    myLists.push(anotherList); // this adds anotherList to myList

    setState({ ...state, myLists: myLists, currentList: anotherList }); // this updates the state with the previous state and changes the current list to the newly made list
    history.push("/ListEdit");
  }

  return (
    <div className="list-grid">
      <h2>My Lists</h2>
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

      <button className="add-list button" onClick={AddNewList}>
        add a new list
        <img src="img/star.svg" alt="" className="star-icon" />
      </button>
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
        <div className="card-buttons">
          <button className="delete-button button">delete</button>
          <img src="img/arrow-right.svg" className="arrow" alt="arrow button" />
        </div>
      </div>
    </div>
  );
}

export default MyLists;
