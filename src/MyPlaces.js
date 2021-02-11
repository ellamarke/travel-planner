import "./css/App.css";
import "./css/Layout.css";
import React, { useState } from "react";

function MyPlaces({ places }) {
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
          />
        ))}
      </div>

      <button className="go">explore more places</button>
    </div>
  );
}

function ProfilePlaceCard({ cardCaption, cardName }) {
  const [deletePlace, setDeletePlace] = useState(false);

  function handleClick() {
    deletePlace ? setDeletePlace(false) : setDeletePlace(true);
  }

  return (
    <div className="place-card">
      <div className="card-image">
        <p className="card-caption">{cardCaption}</p>
      </div>
      <div className="card-bottom">
        <p className="card-name">{cardName}</p>
        <img
          src="img/heart.png"
          onClick={handleClick}
          className={deletePlace ? "delete-icon-selected" : "delete-icon"}
        ></img>
      </div>
    </div>
  );
}

// if user presses delete, the place is removed from their myPlaces.

export default MyPlaces;
