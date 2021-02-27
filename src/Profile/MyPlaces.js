import "../css/Layout.css";
import "../css/Profile.css";

import React, { useContext } from "react";
import { Context } from "../Store";
import { useHistory } from "react-router-dom";

function MyPlaces({ places }) {
  const history = useHistory();
  function handleClick() {
    history.push("/explore");
  }
  return (
    <div className="place-card-grid">
      <h1>My Places</h1>
      <p className="my-places-introduction">
        Id consectetur excepteur consectetur adipisicing ex non cupidatat id ad
        ex. Cupidatat aliqua laborum officia proident eu reprehenderit id ea
        minim nisi voluptate nisi. Amet et reprehenderit qui qui est anim. Esse
        tempor incididunt consectetur ad et esse consectetur fugiat veniam.
      </p>
      <div className="place-cards">
        {places.map((place) => (
          <ProfilePlaceCard
            cardCaption={place.cardCaption}
            cardName={place.cardName}
            key={place.cardName}
          />
        ))}
      </div>

      <button className="explore-more" onClick={handleClick}>
        explore more places
      </button>
    </div>
  );
}

function ProfilePlaceCard({ cardCaption, cardName }) {
  const [state, setState] = useContext(Context);
  function handleClick() {
    const favouritePlaces = state.favouritePlaces;
    const newFavouritePlaces = favouritePlaces.filter(
      (place) => place !== cardName
    );
    setState({ ...state, favouritePlaces: newFavouritePlaces });
  }

  return (
    <div className="my-place-card">
      <div className="my-place-card-image">
        <p className="my-place-card-caption">{cardCaption}</p>
      </div>
      <div className="my-place-card-bottom">
        <p className="card-name">{cardName}</p>
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

export default MyPlaces;
