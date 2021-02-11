import "./css/App.css";
import "./css/Layout.css";
import React, { useState } from "react";

function PlaceCarousel({ title, places }) {
  return (
    <div className="place-carousel">
      <h2>{title}</h2>
      <div className="card-carousel">
        {places.map((place) => (
          <PlaceCard
            cardCaption={place.cardCaption}
            cardName={place.cardName}
          />
        ))}
      </div>
    </div>
  );
}

function PlaceCard({ cardCaption, cardName }) {
  const [favourite, setFavourite] = useState(false);

  function handleClick() {
    favourite ? setFavourite(false) : setFavourite(true);
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
          className={favourite ? "favourite-icon-selected" : "favourite-icon"}
        ></img>
      </div>
    </div>
  );
}

export default PlaceCarousel;
