import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../Store";

function PlaceCarousel({ title, places }) {
  return (
    <div className="place-carousel">
      <h3>{title}</h3>
      <div className="card-carousel">
        {places.map((place) => (
          <PlaceCard
            key={place.cardName}
            cardCaption={place.cardCaption}
            cardName={place.cardName}
            route={place.route}
            src={place.src}
          />
        ))}
      </div>
    </div>
  );
}

function PlaceCard({ cardCaption, cardName, route, src }) {
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
    history.push(route);
    console.log(route);
  }

  return (
    <div className="place-card">
      <img src={src} className="card-image" onClick={goToPlace} alt="china" />
      <div className="card-text">
        <h6 className="card-name" onClick={goToPlace}>
          {cardName}
        </h6>
        <div className="card-buttons">
          <button
            className={
              favourite
                ? "button saved-button small-button"
                : "button save-button small-button"
            }
            onClick={handleClick}
          >
            {favourite ? "Saved!" : "Save"}
            <img src="img/star.svg" alt="save button" />
          </button>
          <img
            src="img/arrow-right.svg"
            className="arrow"
            alt="arrow button"
            onClick={goToPlace}
          />
        </div>
      </div>
    </div>
  );
}

export default PlaceCarousel;
