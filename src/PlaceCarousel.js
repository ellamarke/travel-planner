import "./css/App.css";
import "./css/Layout.css";
import React, { useState } from "react";

function PlaceCarousel() {
  return (
    <div className="place-carousel">
      <h2>our favourite places</h2>
      <div className="card-carousel">
        <PlaceCard /> <PlaceCard /> <PlaceCard /> <PlaceCard />
      </div>
    </div>
  );
}

function PlaceCard() {
  const [favourite, setFavourite] = useState(false);

  function handleClick() {
    favourite ? setFavourite(false) : setFavourite(true);
  }

  return (
    <div className="place-card">
      <div className="card-image">
        <p className="card-caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="card-bottom">
        <p className="card-name">Hello I'm a card</p>
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
