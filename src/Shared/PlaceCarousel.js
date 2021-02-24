import "../css/App.css";
import "../css/Layout.css";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../Store";

function PlaceCarousel({ title, places }) {
  return (
    <div className="place-carousel">
      <h2>{title}</h2>
      <div className="card-carousel">
        {places.map((place) => (
          <PlaceCard
            key={place.cardName}
            cardCaption={place.cardCaption}
            cardName={place.cardName}
          />
        ))}
      </div>
    </div>
  );
}

function PlaceCard({ cardCaption, cardName }) {
  const [state, setState] = useContext(Context);
  const favouritePlaces = state.favouritePlaces;
  const history = useHistory();

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

  function goToPlace() {
    history.push("/place");
  }

  return (
    <div className="place-card">
      <div className="card-image" onClick={goToPlace}>
        <p className="card-caption" onClick={goToPlace}>
          {cardCaption}
        </p>
      </div>
      <div className="card-bottom">
        <p className="card-name" onClick={goToPlace}>
          {cardName}
        </p>
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

export default PlaceCarousel;
