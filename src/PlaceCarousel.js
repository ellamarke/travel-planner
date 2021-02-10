import "./css/App.css";
import "./css/Layout.css";
import React, { useState } from "react";

function PlaceCarousel() {
  return (
    <div className="place-carousel">
      <h2>our favourite places</h2>
      <PlaceCard /> <PlaceCard /> <PlaceCard />
    </div>
  );
}

function PlaceCard() {
  return (
    <div className="place-card">
      <div className="card-image">
        <p className="card-caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <img src="img/grey-rectangle-small.jpg"></img>
      </div>
      <div className="card-bottom">
        <p className="card-name">Hello I'm a card</p>
        <img src="img/heart.png"></img>
      </div>
    </div>
  );
}

export default PlaceCarousel;
