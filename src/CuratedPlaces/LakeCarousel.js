import "../css/App.css";
import "../css/Layout.css";
import React, { useContext } from "react";
import { Context } from "../Store";

function LakeCarousel({ title, lakes }) {
  return (
    <div className="place-carousel">
      <h2>{title}</h2>
      <div className="card-carousel">
        {lakes
          .map((lake) => (
            <PlaceCard
              key={lake.cardName}
              cardCaption={lake.cardCaption}
              cardName={lake.cardName}
            />
          ))
          .filter((lake, index) => index > 2)}
      </div>
    </div>
  );
}

function PlaceCard({ cardCaption, cardName }) {
  const [state, setState] = useContext(Context);
  const favouritePlaces = state.favouritePlaces;

  function handleClick() {
    const favourite = !favouritePlaces.includes(cardName);
    if (favourite) {
      favouritePlaces.push(cardName);
      setState({ ...state, favouritePlaces: favouritePlaces });
    } else {
      const newFavouritePlaces = favouritePlaces.filter(
        (place) => place !== cardName
      );
      setState({
        ...state,
        favouritePlaces: newFavouritePlaces,
      });
    }
  }

  const favourite = favouritePlaces.includes(cardName);

  return (
    <div className="place-card">
      <div className="card-image">
        <p className="card-caption">{cardCaption}</p>
      </div>
      <div className="card-bottom">
        <p className="card-name">{cardName}</p>
        <img
          src="img/heart.png"
          alt="heart button"
          onClick={handleClick}
          className={favourite ? "favourite-icon-selected" : "favourite-icon"}
        ></img>
      </div>
    </div>
  );
}

export default LakeCarousel;